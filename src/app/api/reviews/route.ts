// app/api/reviews/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
  );

  const data = await res.json();

  if (!data.result?.reviews) {
    return NextResponse.json([], { status: 200 });
  }

interface GoogleReview {
  author_name: string;
  relative_time_description: string;
  text: string;
}

const reviews = data.result.reviews.map((r: GoogleReview) => ({
  name: r.author_name,
  meta: r.relative_time_description,
  text: r.text,
}));


  return NextResponse.json(reviews, { status: 200 });
}
