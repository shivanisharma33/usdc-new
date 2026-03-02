import { NextResponse } from 'next/server';

const UPSTREAM = process.env.STRAPI_API_BASE ?? 'https://thankful-miracle-1ed8bdfdaf.strapiapp.com/api/email-alerts';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Strapi expects a { data: { ... } } payload for creating entries
    const payload = { data: body };

    const res = await fetch(UPSTREAM, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json({ error: `Upstream HTTP ${res.status}`, details: text }, { status: res.status });
    }

    try {
      const data = JSON.parse(text);
      return NextResponse.json(data, { status: 201 });
    } catch (e) {
      return new NextResponse(text, { status: 201, headers: { 'content-type': res.headers.get('content-type') || 'text/plain' } });
    }
  } catch (error) {
    console.error('[api/email-alert] proxy error', error);
    return NextResponse.json({ error: 'Proxy failed' }, { status: 502 });
  }
}
