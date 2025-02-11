/* eslint-disable @next/next/no-page-custom-font */
// @ts-ignore
import "@/public/scss/styles.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EdgeApps – Инновационные решения для бизнеса",
  description: "EdgeApps – передовая платформа для управления бизнес-процессами. Автоматизируйте рутину и достигайте новых высот!",
  alternates: {
    canonical: "http://178.22.171.60:3331",
  },
  openGraph: {
    title: "EdgeApps – Оптимизируйте свой бизнес",
    description: "Современные технологии, удобные инструменты и максимальная эффективность – всё это EdgeApps.",
    url: "http://178.22.171.60:3331",
    images: [
      {
        url: "http://178.22.171.60:3331/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EdgeApps – передовые решения для бизнеса",
      },
    ],
    siteName: "EdgeApps",
  },
};

export default function LocaleLayout({
  children,
  params: { locale },
}: any) {
  return (
    <html lang={locale}>
      <head>
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
      </head>
      <body>{children}</body>
    </html>
  );
}
