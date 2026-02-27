import { NextResponse } from 'next/server';

const UPSTREAM = process.env.LIVE_STOCK_UPSTREAM ?? 'http://ec2-51-20-254-227.eu-north-1.compute.amazonaws.com/api/live-stock';

export async function GET(request: Request) {
  try {
    const res = await fetch(UPSTREAM, { cache: 'no-store' });

    const contentType = res.headers.get('content-type') || 'application/json';
    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json({ error: `Upstream HTTP ${res.status}` }, { status: res.status });
    }

    if (contentType.includes('application/json')) {
      try {
        const data = JSON.parse(text);
        return NextResponse.json(data);
      } catch (e) {
        return NextResponse.json({ error: 'Invalid JSON from upstream' }, { status: 502 });
      }
    }

    return new NextResponse(text, {
      status: 200,
      headers: { 'content-type': contentType },
    });
  } catch (error) {
    console.error('[api/live-stock] proxy error', error);
    return NextResponse.json({ error: 'Proxy failed' }, { status: 502 });
  }
}
