import { NextRequest, NextResponse } from 'next/server';
import { Stripe } from 'stripe';

// Initialize Stripe with test key - following Stripe's exact pattern
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { priceId } = await request.json();

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      );
    }

    // Create checkout session - exactly like Stripe docs
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/store/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/store`,
    });

    return NextResponse.json({ 
      url: session.url 
    });
  } catch (error) {
    console.error('Stripe error:', error);
    
    return NextResponse.json(
      { 
        error: 'Unable to create checkout session',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}