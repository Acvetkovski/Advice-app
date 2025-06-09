// Import font-family.
import { Inter } from "next/font/google";

// Import css global file.
import "./globals.css";

// Declare font-family.
const inter = Inter({ subsets: ["latin"] });

// Metadata information.
export const metadata = {
	title: {
		default: "Advice app",
	},
	description:
		"This web application is a simple advice tool that fetches and displays various pieces of advice from a public API. Users can generate random advice with a single click, providing quick insights or inspiration through a clean and user-friendly interface.",

	author: "Andreas",
	htmlAttributes: {
		lang: "en",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>{children}</main>
			</body>
		</html>
	);
}
