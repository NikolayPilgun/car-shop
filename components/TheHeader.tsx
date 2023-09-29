import Image from "next/image";
import logoHeader from "../public/logo/logo5.png";
import TheNavigation from "./TheNavigation";
export default function TheHeader() {
	return (
		<header className="w-full h-[100px] flex justify-between items-center px-8 py-3  bg-slate-300">
			<div className="flex items-center gap-2">
				<Image
					src={logoHeader}
					alt="logoHeader"
					width={150}
					height={80}
					className="h-auto w-auto"
				/>
				<h2 className="md:text-2xl font-medium w-full max-sm:hidden ">
					Car Shop
				</h2>
			</div>
			<TheNavigation />
		</header>
	);
}
