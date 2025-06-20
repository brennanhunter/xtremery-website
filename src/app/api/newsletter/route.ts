import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🔥 API route hit!');
  
  try {
    const { email } = await request.json();
    console.log('📧 Email received:', email);

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    console.log('🚀 About to call ConvertKit form API...');
    console.log('Using form ID: 8208104');
    
    const formData = new URLSearchParams();
    formData.append('api_key', process.env.CONVERTKIT_API_KEY || '');
    formData.append('email', email);

    const response = await fetch('https://api.convertkit.com/v3/forms/8208104/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    console.log('📊 ConvertKit status:', response.status);
    const data = await response.json();
    console.log('📊 ConvertKit response:', JSON.stringify(data, null, 2));

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'Successfully subscribed to DeLand tech tips!' 
      });
    } else {
      return NextResponse.json(
        { error: data.message || 'Failed to subscribe' },
        { status: 500 }
      );
    }

  } catch (error: unknown) {
    console.error('💥 Full error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}