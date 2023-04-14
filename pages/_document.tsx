"use client";

import { Html, Head, Main, NextScript } from 'next/document'
import { Providers } from './providers';


export default function Document({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html suppressHydrationWarning lang="en">
      <Providers>
      <Head />
      <body className="dark:bg-black">
        <Main />
        <NextScript />
      </body>
      </Providers>
    </Html>
  )
}
