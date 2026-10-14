import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.iplay.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "iPlay: Free HD Video & Music Player for macOS, iOS, Android",
    template: "%s | iPlay"
  },
  description: "iPlay is a smooth video and music player for your device. Play local media, import files, enjoy background audio, playlists, and powerful playback controls. iOS available now; Android coming soon.",
  applicationName: "iPlay",
  keywords: ["iPlay", "video player", "music player", "HD video player", "audio player", "macOS media player", "iOS media player", "local video player", "background music player"],
  openGraph: {
    title: "iPlay: Free HD Video & Music Player",
    description: "Your media. Your way. One beautiful player for video and music.",
    url: siteUrl, siteName: "iPlay", type: "website"
  },
  twitter: { card: "summary_large_image", title: "iPlay — Video & Music Player", description: "Play your media your way with iPlay." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}