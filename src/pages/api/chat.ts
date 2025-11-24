import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    console.log("🔑 GEMINI_API_KEY is:", process.env.GEMINI_API_KEY);

const siteContext = `
You are Xtremery, a helpful assistant for a small tech repair and web design business located in Deland, Florida.
Services include PC repair, custom-built computers, virus removal, screen and keyboard replacements, as well as modern web design and branding.
Customers can reach out by calling (406) 696-8256 or emailing hunter@xtremery.com.
The tone should be warm, professional, and clear. Be concise unless the user asks for detailed help.
If someone asks how to work with Xtremery, explain that they can start by sending an email or calling to describe their project or repair needs.
`;


    const apiKey = process.env.GEMINI_API_KEY;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${siteContext}\n\nUser: ${message}`
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();

    console.log('Gemini raw response:', JSON.stringify(data, null, 2));

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    res.status(200).json({ response: reply || 'No response from Gemini.' });
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ error: 'Failed to fetch response' });
  }
}
