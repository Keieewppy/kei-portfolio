import { ImageResponse } from "next/og";

// Browser-tab icon: a teal "K" tile, matching the navbar logo.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 14,
          background: "#2ec4b6",
          color: "#08111d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 42,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        K
      </div>
    ),
    size,
  );
}
