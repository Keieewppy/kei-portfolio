import { ImageResponse } from "next/og";

// The preview card shown when the link is shared on LinkedIn, WhatsApp, X, Slack, etc.
export const alt = "Chaitanya Yadav (Kei) · Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          backgroundColor: "#08111d",
          backgroundImage: "linear-gradient(135deg, #08111d 0%, #0d1a2a 55%, #0f3a44 100%)",
          color: "#e6edf5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#2ec4b6",
              color: "#08111d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 30, color: "#93a6bc" }}>Chaitanya Yadav (Kei)</div>
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3, display: "flex", flexDirection: "column" }}>
          <span>I build apps people can</span>
          <span style={{ color: "#2ec4b6" }}>actually use.</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: "#93a6bc", display: "flex" }}>
          Flutter · React Native · Node.js · Co-founder @ BeClazo
        </div>
      </div>
    ),
    size,
  );
}
