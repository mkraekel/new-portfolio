import "./globals.css";
import {Metadata, Viewport} from "next";

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}
export const metadata: Metadata = {
    title: 'Mathis Kräkel - Softwareentwicklung & Beratung',
    description: 'Professionelle Softwareentwicklung und technische Beratung. Maßgeschneiderte Lösungen für Ihre digitalen Herausforderungen. Jetzt unverbindlich anfragen!',
    keywords: 'Softwareentwicklung, Technische Beratung, Webentwicklung, Freelancer, Digitalberatung, Projektentwicklung, Technische Lösungen',
    authors: [{ name: 'Mathis Kraekel' }],
    robots: 'index, follow',
    openGraph: {
        title: 'Mathis Kräkel - Individuelle Softwarelösungen',
        description: 'Professionelle Softwareentwicklung und Beratung. Effiziente Lösungen für Ihr Unternehmen.',
        images: [{ url: 'https://mathiskraekel.de/preview-image.jpg' }],
        url: 'https://mathiskraekel.de',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Mathis Kräkel - Softwareentwicklung & Beratung',
        description: 'Maßgeschneiderte technische Lösungen für Ihr Unternehmen. Jetzt Termin vereinbaren!',
    },

    icons: {
        icon: '/favicon.ico',
    },

    alternates: {
        canonical: 'https://mathiskraekel.de',
    },
}
export default async function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
    {/*<SEO />*/}
      <body>
          <main className={"dark text-foreground bg-background"}>
              {children}
          </main>
      </body>
    </html>
);
}
