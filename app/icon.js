import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

// Browser-tab favicon: gold "ML" on espresso. Generated in-code.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2E2A24',
          color: '#C0894B',
          fontSize: 17,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          borderRadius: 6,
        }}
      >
        ML
      </div>
    ),
    { ...size }
  );
}
