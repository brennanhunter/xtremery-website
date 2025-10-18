# Stripe Integration Setup Guide

## Prerequisites
1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe dashboard
3. Install Stripe dependencies

## Installation
```bash
npm install stripe @stripe/stripe-js
```

## Environment Variables
Add to your `.env.local` file:

### Required for MVP Store:
```
STRIPE_SECRET_KEY=sk_test_... (your secret key)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (your publishable key)
```

### Optional for Advanced Features:
```
STRIPE_WEBHOOK_SECRET=whsec_... (webhook endpoint secret - only needed for automated order fulfillment)
```

**Note:** The webhook secret is only required if you want to set up automated email delivery of digital products or handle advanced payment events. For the basic MVP store, you can handle order fulfillment manually.

## Stripe Products Setup
1. Log into your Stripe dashboard
2. Go to Products → Add Product
3. Create these products:

### Product 1: PC Health Check Guide
- Name: PC Health Check Guide
- Description: Complete diagnostic checklist to keep your computer running smoothly
- Price: $19.00
- Type: One-time payment
- Copy the Product ID and Price ID

### Product 2: Website Emergency Kit
- Name: Website Emergency Kit  
- Description: Essential tools and guides for website disasters and recovery
- Price: $49.00
- Type: One-time payment
- Copy the Product ID and Price ID

## Code Implementation

### 1. Stripe Client Setup
```typescript
// lib/stripe.ts
import { Stripe } from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});
```

### 2. Checkout API Route
```typescript
// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { priceId } = await request.json();

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${request.nextUrl.origin}/store/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/store`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
```

### 3. Update Product Data
Update `lib/store-data.ts` with your actual Stripe IDs:
```typescript
export const STORE_PRODUCTS: Product[] = [
  {
    // ... other properties
    stripeProductId: 'prod_YOUR_PRODUCT_ID',
    stripePriceId: 'price_YOUR_PRICE_ID',
  },
  // ... repeat for other products
];
```

### 4. Update ProductCard Component
Replace the `handlePurchase` function in `ProductCard.tsx`:
```typescript
const handlePurchase = async () => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: product.stripePriceId,
      }),
    });

    const { sessionId } = await response.json();

    // Redirect to Stripe Checkout
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    await stripe?.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  }
};
```

## Success Page
Create `app/store/success/page.tsx`:
```typescript
'use client';

import { useSearchParams } from 'next/navigation';
import { handelsonTwo, avenir } from '@/app/fonts';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✅</span>
        </div>
        <h1 className={`${handelsonTwo.className} text-3xl font-bold text-gray-800 mb-4`}>
          Payment Successful!
        </h1>
        <p className={`${avenir.className} text-gray-600 mb-6`}>
          Thank you for your purchase. You should receive an email with your download link shortly.
        </p>
        <a
          href="/store"
          className={`${avenir.className} inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors`}
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
```

## Security Notes
- Never expose your secret key in client-side code
- Always validate payments server-side
- Set up webhook endpoints for order fulfillment
- Use HTTPS in production

## Testing
1. Use Stripe test mode initially
2. Test with test card numbers (4242 4242 4242 4242)
3. Verify the full purchase flow
4. Check that success/cancel pages work

## Production Checklist
- [ ] Switch to live Stripe keys
- [ ] Set up webhook endpoints
- [ ] Configure email notifications
- [ ] Test with real payment methods
- [ ] Set up order fulfillment system
- [ ] Add proper error handling