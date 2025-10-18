import { Stripe } from 'stripe';

let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    
    if (!stripeSecretKey) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set');
    }
    
    stripeInstance = new Stripe(stripeSecretKey, {
      typescript: true,
    });
  }
  
  return stripeInstance;
}

// For backward compatibility
export const stripe = getStripe;