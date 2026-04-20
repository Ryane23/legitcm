import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legit.cm | Build, Connect, Launch",
  description: "Legit.cm is the premier ecosystem for African innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
        <script id="tailwind-config" dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: "class",
              theme: {
                extend: {
                  "colors": {
                          "secondary-fixed": "#d3e4fe",
                          "on-secondary-fixed": "#0b1c30",
                          "surface-container": "#eaedff",
                          "on-surface": "#131b2e",
                          "tertiary": "#a0002d",
                          "on-error": "#ffffff",
                          "on-primary-fixed": "#001452",
                          "surface-container-highest": "#dae2fd",
                          "on-primary-fixed-variant": "#0038b6",
                          "on-secondary-container": "#54647a",
                          "error-container": "#ffdad6",
                          "secondary-container": "#d0e1fb",
                          "primary": "#003ec7",
                          "secondary-fixed-dim": "#b7c8e1",
                          "on-tertiary": "#ffffff",
                          "on-primary-container": "#dfe3ff",
                          "inverse-surface": "#283044",
                          "tertiary-container": "#cd003c",
                          "surface-container-low": "#f2f3ff",
                          "background": "#faf8ff",
                          "primary-fixed": "#dde1ff",
                          "inverse-primary": "#b7c4ff",
                          "inverse-on-surface": "#eef0ff",
                          "error": "#ba1a1a",
                          "outline": "#737688",
                          "on-secondary": "#ffffff",
                          "surface": "#faf8ff",
                          "on-secondary-fixed-variant": "#38485d",
                          "tertiary-fixed-dim": "#ffb3b6",
                          "surface-tint": "#004ced",
                          "on-tertiary-container": "#ffddde",
                          "on-primary": "#ffffff",
                          "surface-container-high": "#e2e7ff",
                          "outline-variant": "#c3c5d9",
                          "tertiary-fixed": "#ffdada",
                          "surface-container-lowest": "#ffffff",
                          "primary-fixed-dim": "#b7c4ff",
                          "surface-variant": "#dae2fd",
                          "on-surface-variant": "#434656",
                          "surface-dim": "#d2d9f4",
                          "surface-bright": "#faf8ff",
                          "on-tertiary-fixed": "#40000c",
                          "on-tertiary-fixed-variant": "#920028",
                          "on-error-container": "#93000a",
                          "on-background": "#131b2e",
                          "primary-container": "#0052ff",
                          "secondary": "#505f76"
                  },
                  "borderRadius": {
                          "DEFAULT": "0.25rem",
                          "lg": "0.5rem",
                          "xl": "1.5rem",
                          "full": "9999px"
                  },
                  "fontFamily": {
                          "headline": ["Manrope"],
                          "body": ["Inter"],
                          "label": ["Inter"]
                  }
                },
              },
            }
          `
        }}></script>
        <style dangerouslySetInnerHTML={{
          __html: `
            .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
            body { font-family: 'Inter', sans-serif; background-color: #faf8ff; }
            h1, h2, h3, .headline { font-family: 'Manrope', sans-serif; }
            .glass-panel {
                background: rgba(255, 255, 255, 0.6);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
            }
            body {
              min-height: max(884px, 100dvh);
            }
            .hero-gradient {
                background: linear-gradient(135deg, #003ec7 0%, #0052ff 100%);
            }
            .hero-text-gradient {
                background: linear-gradient(135deg, #003ec7 0%, #0052ff 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
          `
        }}></style>
      </head>
      <body className="text-on-surface">{children}</body>
    </html>
  );
}
