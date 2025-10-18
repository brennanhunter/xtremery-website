import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { getStripe } = await import('@/lib/stripe');
    const stripe = getStripe();

    // Test if we can connect to Stripe
    const account = await stripe.accounts.retrieve();
    
    return NextResponse.json({ 
      status: 'Stripe connected successfully',
      accountId: account.id 
    });
  } catch (error) {
    console.error('Stripe test error:', error);
    return NextResponse.json({ 
      error: 'Stripe connection failed', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}