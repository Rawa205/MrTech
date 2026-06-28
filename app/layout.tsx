import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteContent } from "./siteContent";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  keywords: siteContent.metadata.keywords,
  openGraph: {
    title: siteContent.metadata.openGraphTitle,
    description: siteContent.metadata.openGraphDescription,
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1280,
        height: 632,
        alt: siteContent.metadata.openGraphImageAlt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ckb" dir="rtl">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                if ("scrollRestoration" in history) {
                  history.scrollRestoration = "manual";
                }

                if (window.location.hash) {
                  history.replaceState(
                    null,
                    "",
                    window.location.pathname + window.location.search
                  );
                }

                window.scrollTo(0, 0);
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
