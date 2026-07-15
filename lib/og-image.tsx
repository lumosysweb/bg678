import { SITE } from "@/lib/data";

export function SocialCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #05100B 0%, #0d1f16 55%, #05100B 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 120,
          height: 120,
          borderRadius: 28,
          background: "linear-gradient(135deg, #1FD8A4 0%, #00B383 50%, #1FD8A4 100%)",
          marginBottom: 36,
        }}
      >
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#04231a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l4 6-10 12L2 9l4-6Zm0 6h12M9 3l-2 6 5 12 5-12-2-6" />
        </svg>
      </div>
      <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#ffffff", letterSpacing: -1 }}>
        {SITE.name}
      </div>
      <div style={{ display: "flex", marginTop: 18, fontSize: 30, color: "#1FD8A4", fontWeight: 600 }}>
        {SITE.tagline}
      </div>
    </div>
  );
}
