import { NextResponse } from 'next/server';

const TERRARIA_APP_ID = 105600;

export async function GET() {
  const key = process.env.STEAM_API;
  const steamId = process.env.USER_ID;

  if (!key || !steamId) {
    return NextResponse.json({ error: 'Missing Steam API credentials' }, { status: 500 });
  }

  try {
    const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${encodeURIComponent(key)}&steamid=${encodeURIComponent(steamId)}&format=json`;
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return NextResponse.json({ error: 'Steam API request failed' }, { status: 502 });
    }

    const data = await res.json();
    const games = data?.response?.games;

    if (!Array.isArray(games)) {
      return NextResponse.json({ error: 'Could not retrieve games' }, { status: 502 });
    }

    const terraria = games.find((g: { appid: number }) => g.appid === TERRARIA_APP_ID);

    if (!terraria) {
      return NextResponse.json({ error: 'Terraria not found in library' }, { status: 404 });
    }

    const totalMinutes: number = terraria.playtime_forever ?? 0;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return NextResponse.json(
      { hours, minutes, totalMinutes },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        },
      }
    );
  } catch {
    return NextResponse.json({ error: 'Failed to fetch Steam data' }, { status: 500 });
  }
}
