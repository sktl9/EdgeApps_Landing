/* eslint-disable @next/next/no-page-custom-font */
// @ts-ignore
import "@/public/scss/styles.scss";
import Head from "next/head";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const titleEn = "Beyim Demo Ai - Microlearning Social Network";

  return {
    title: titleEn,
  };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  return (
    <html lang={locale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
