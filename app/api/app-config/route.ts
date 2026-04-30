import { NextRequest, NextResponse } from 'next/server';
import { getEffectiveConfig, readStoredConfig, toPublicConfig, writeStoredConfig } from '@/lib/app-config';
import type { AppConfig } from '@/lib/types';

export async function GET() {
  try {
    const config = await getEffectiveConfig();
    return NextResponse.json(toPublicConfig(config));
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'unknown error' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<AppConfig>;
    const current = await readStoredConfig();

    const nextConfig = await writeStoredConfig({
      ...current,
      ...body,
    });

    return NextResponse.json(toPublicConfig(nextConfig));
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'unknown error' },
      { status: 500 },
    );
  }
}
