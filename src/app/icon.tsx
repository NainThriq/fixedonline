import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const imageData = readFileSync(join(process.cwd(), "public/logo.jpeg"));
  const base64 = imageData.toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          backgroundColor: "white",
          backgroundImage: `url(data:image/jpeg;base64,${base64})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    ),
    { ...size }
  );
}
