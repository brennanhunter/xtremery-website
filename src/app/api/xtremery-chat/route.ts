import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey || !message) {
    return NextResponse.json({ error: 'Missing API key or message' }, { status: 400 });
  }

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          "You are Xtremery's AI assistant. You are helpful, witty, and know all about tech repair and web design. Stay brief, warm, and clear.",
      },
      {
        role: 'user',
        content: message,
      },
    ],
    temperature: 0.7,
    max_tokens: 200,
  };

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (data.error) {
    console.error('OpenAI error:', data.error);
    return NextResponse.json({ error: data.error.message }, { status: 500 });
  }

  const reply = data.choices?.[0]?.message?.content || 'No response';
  return NextResponse.json({ response: reply });
}
