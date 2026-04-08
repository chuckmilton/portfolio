import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Charles Milton - Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Yin Yang Symbol */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          style={{ marginBottom: 40 }}
        >
          <circle cx="50" cy="50" r="48" fill="none" stroke="#a3a3a3" strokeWidth="2" />
          <path
            d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2"
            fill="#a3a3a3"
          />
          <circle cx="50" cy="26" r="8" fill="#a3a3a3" />
          <circle cx="50" cy="74" r="8" fill="#0a0a0a" />
        </svg>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: '#e5e5e5',
            marginBottom: 16,
          }}
        >
          Charles Milton
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#737373',
          }}
        >
          Software Engineer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
