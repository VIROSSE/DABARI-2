import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../fonts.css";
import MainNav from "../components/main-nav";
import Footer from "../components/footer";
import GoToTop from "../components/goToTop";
import toast, { Toaster } from "react-hot-toast";
import { NextRouter } from "next/router";
import Translation from "../components/translation";
import HeaderLayout from "../components/header/layout";

const inter = Inter({ subsets: ["latin"] });
const notify = () => toast("Here is your toast.");

export const metadata: Metadata = {
	title: "Dabari",
	description: "",
};

export default function RootLayout({
	children,
	router
}: {
	children: React.ReactNode;
	router: NextRouter
}) {

	return (
		<html lang="en">
			<body className={inter.className}>
				<header className=" top-0 z-50 sticky   bg-transparent  w-full    ">
					<HeaderLayout />
				</header>
				<Translation router={router} />
				<Toaster position="top-center" reverseOrder={false} />
				{children}
				<footer>
					<Footer />
				</footer>
				<GoToTop />
			</body>
		</html>
	);
}
