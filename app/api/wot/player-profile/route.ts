import { NextRequest, NextResponse } from 'next/server';
import { getPlayerProfile } from '@/lib/wargaming';
import type { WotRegion } from '@/lib/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const accountIdValue = searchParams.get('accountId')?.trim() ?? '';
    const region = (searchParams.get('region')?.trim() ?? process.env.WOT_DEFAULT_REGION ?? 'eu') as WotRegion;
    const accountId = Number(accountIdValue);

    if (!accountIdValue || Number.isNaN(accountId)) {
      return NextResponse.json({ error: 'valid accountId is required' }, { status: 400 });
    }

    const profile = await getPlayerProfile(region, accountId);
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'unknown error' },
      { status: 500 },
    );
  }
}
