import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "MyStore",
    description: "Buy cool products",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="flex flex-col min-h-full bg-white">
            <Navbar/>
                <main className="flex-grow container mx-auto px-4 py-8">
                    {children}
                </main>
            </body>
        </html>
    );
}
