import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1FD8A4 0%, #00B383 50%, #1FD8A4 100%)",
          borderRadius: 7,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#04231a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l4 6-10 12L2 9l4-6Zm0 6h12M9 3l-2 6 5 12 5-12-2-6" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
