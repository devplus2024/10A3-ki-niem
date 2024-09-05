import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "10A3 Ảnh Kỉ Niệm",
  description: "Ảnh Kỉ Niệm 10A3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
	<head>
		  <!-- Thẻ meta cơ bản -->
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <meta name="description" content="Kỷ niệm 10A3 - Những kỷ niệm đáng nhớ của lớp 10A3.">

		  <!-- Open Graph meta tags cho Facebook, LinkedIn, etc. -->
		  <meta property="og:title" content="Kỷ niệm 10A3 - Những kỷ niệm đáng nhớ" />
		  <meta property="og:description" content="Hình ảnh và kỷ niệm tuyệt vời của lớp 10A3." />
		  <meta property="og:image" content="https://10-a3-ki-niem.vercel.app/10A3.jpg" />
		  <meta property="og:url" content="https://10-a3-ki-niem.vercel.app" />
		  <meta property="og:type" content="website" />
		  
		  <!-- Thẻ meta cho Twitter -->
		  <meta name="twitter:card" content="summary_large_image" />
		  <meta name="twitter:title" content="Kỷ niệm 10A3 - Những kỷ niệm đáng nhớ" />
		  <meta name="twitter:description" content="Hình ảnh và kỷ niệm tuyệt vời của lớp 10A3." />
		  <meta name="twitter:image" content="https://10-a3-ki-niem.vercel.app/10A3.jpg" />
		</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
