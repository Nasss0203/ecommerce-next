import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
});

export const metadata: Metadata = {
	title: "Ecommerce",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link
					rel='shortcut icon'
					href='/sneat-logo.png'
					type='image/x-icon'
				/>
			</head>
			<body
				className={`${poppins.className} antialiased`}
				suppressHydrationWarning
			>
				{children}
				<Toaster />
				<SpeedInsights />
			</body>
		</html>
	);
}
