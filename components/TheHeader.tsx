import Image from "next/image";
export default function TheHeader() {
	return (
		<header className="w-full flex justify-between items-center px-8 py-3  bg-slate-300">
			<div className="flex items-center gap-2">
				<Image src="/logo/logo5.png" width={200} height={100} alt="Logo" />
				<h2 className="text-3xl font-medium">Car Shop</h2>
			</div>
			<nav>
				<ul className=" flex justify-around items-center gap-4">
					<li>First</li>
					<li>Second</li>
					<li>Third</li>
					<li>Fourth</li>
				</ul>
			</nav>
		</header>
	);
}
