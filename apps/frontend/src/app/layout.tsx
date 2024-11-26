import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { ToastContainer } from "react-toastify";

const fonte = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Seu evento começa aqui",
  description: "Aplicação Fullstack de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/mail-heart.svg" />
      </head>
      <body
        className={fonte.className}
      >
        <ToastContainer position="top-right" autoClose={5000} theme="dark" />
        {children}
      </body>
    </html>
  );
}
