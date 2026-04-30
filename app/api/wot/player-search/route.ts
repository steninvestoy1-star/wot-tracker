import { NextRequest, NextResponse } from 'next/server';
import { searchPlayerByNickname } from '@/lib/wargaming';
import type { WotRegion } from '@/lib/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const nickname = searchParams.get('nickname')?.trim() ?? '';
    const region = (searchParams.get('region')?.trim() ?? process.env.WOT_DEFAULT_REGION ?? 'eu') as WotRegion;

    if (!nickname) {
      return NextResponse.json({ error: 'nickname is required' }, { status: 400 });
    }

    const player = await searchPlayerByNickname(region, nickname);

    if (!player) {
      return NextResponse.json({ error: 'player not found' }, { status: 404 });
    }

    return NextResponse.json(player);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'unknown error' },
      { status: 500 },
    );
  }
}
