import Image from "next/image";
import logoHeader from "../public/logo/logo5.png";
import TheNavigation from "./TheNavigation";
export default function TheHeader() {
	return (
		<header className="w-full flex justify-between items-center px-8 py-3  bg-slate-300">
			<div className="flex items-center gap-2">
				<Image
					src={logoHeader}
					width={200}
					height={100}
					sizes="200px"
					className="w-full h-auto"
					alt="logoHeader"
				/>
				<h2 className="md:text-3xl font-medium w-full max-md:sm:hidden ">
					Car Shop
				</h2>
			</div>
			<TheNavigation />
		</header>
	);
}
