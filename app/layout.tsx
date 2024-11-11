import React from "react";
import "./globals.css"; 

export const metadata = {
  title: "Chainox",
  description: "Landing. Just front. Blinksy22.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
