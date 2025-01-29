import Head from 'next/head';

export default function SEO() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Mathis Kräkel - Software Developer </title>
            <meta
                name="description"
                content="Softwareentwickler mit Fokus auf Webentwicklung und Backend-Architektur mit Next.js, React, TypeScript und Node.js. Maßgeschneiderte Lösungen für skalierbare Webanwendungen."
            />
            <meta
                name="keywords"
                content="Mathis Kraekel,Mathis Kräkel, Softwareentwickler,  Webentwicklung, Freelancer, software developer, TypeScript, Node.js, React, Firebase, Next.js, web development, web app development, backend, frontend"
            />
            <meta name="author" content="Mathis Kraekel" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Open Graph / Social Media Metadata */}
            <meta property="og:title" content="Mathis Kräkel - Software Developer" />
            <meta
                property="og:description"
                content="Discover Mathis Kraekel's skills, projects, and expertise in web and software development, including Next.js, and modern tech stacks."
            />
            <meta property="og:image" content="https://mathiskraekel.de/preview-image.jpg" />
            <meta property="og:url" content="https://mathiskraekel.de" />
            <meta property="og:type" content="website" />

            {/*/!* Twitter Metadata *!/*/}
            {/*<meta name="twitter:card" content="summary_large_image" />*/}
            {/*<meta name="twitter:title" content="Mathis Kraekel - Software Developer Portfolio" />*/}
            {/*<meta*/}
            {/*    name="twitter:description"*/}
            {/*    content="Discover Mathis Kraekel's skills, projects, and expertise in web and software development, including Next.js, Prisma, and modern tech stacks."*/}
            {/*/>*/}
            {/*<meta name="twitter:image" content="https://mathiskraekel.de/preview-image.jpg" />*/}
            {/*<meta name="twitter:creator" content="@MathisKraekel" />*/}

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
