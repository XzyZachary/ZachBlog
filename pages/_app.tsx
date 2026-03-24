import "css/tailwind.css";
import "css/twemoji.css";
import "css/extra.css";

import { ThemeProvider } from "next-themes";
import Head from "next/head";
// import { Analytics } from '@/components/analytics'
import LayoutWrapper from "@/components/LayoutWrapper";
import { UmamiAnalytics } from "@/components/analytics/umami";
import SITE_METADATA from "../data/siteMetadata";

export default function App({ Component, pageProps }) {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <UmamiAnalytics websiteId={SITE_METADATA.analytics.umamiWebsiteId} />
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
