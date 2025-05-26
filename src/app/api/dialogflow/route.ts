import { NextResponse } from 'next/server';
import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuidv4 } from 'uuid';

const projectId = process.env.DIALOGFLOW_PROJECT_ID;

// No need to pass credentials manually
const sessionClient = new SessionsClient();

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const sessionPath = sessionClient.projectAgentSessionPath(projectId!, uuidv4());
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: 'en-US',
        },
      },
    };

    const [response] = await sessionClient.detectIntent(request);
    const result = response.queryResult?.fulfillmentText || 'No response';

    return NextResponse.json({ response: result }, { status: 200 });
  } catch (error) {
    console.error('Dialogflow error:', error);
    return NextResponse.json({ error: 'Failed to fetch response' }, { status: 500 });
  }
}
