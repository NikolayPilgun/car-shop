"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function TheNavigation() {
	const menuItems = [
		{ title: "Главная", href: "/" },
		{ title: "О нас", href: "/aboutUs" },
		{ title: "Контакты", href: "/contacts" },
	];
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	return (
		<nav>
			{/* Desktop Navigation */}
			<ul className="sm:flex items-center hidden sm:gap-4 md:text-lg text-base">
				{menuItems.map((item) => (
					<li key={item.title}>
						<Link
							href={item.href}
							className={`transition-all hover:text-[#ed8936] ${
								pathname === item.href ? "activeLink" : ""
							}`}
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>

			{/* Mobile Navigation */}
			<div className="sm:hidden flex relative">
				{isOpen ? (
					<Image
						src="/pictures/nav/close.png"
						width={40}
						height={40}
						alt="close"
						onClick={() => setIsOpen(false)}
						className="cursor-pointer"
					/>
				) : (
					<Image
						src="/pictures/nav/burgerMenu.png"
						width={40}
						height={40}
						alt="burgerMenu"
						onClick={() => setIsOpen(true)}
						className="cursor-pointer"
					/>
				)}
				{isOpen && (
					<ul className="w-52 text-lg absolute top-10 right-0 flex flex-col gap-4 py-6 px-5 bg-slate-200">
						{menuItems.map((item) => (
							<li key={item.title}>
								<Link
									href={item.href}
									className={`transition-all hover:text-[#ed8936] ${
										pathname === item.href ? "activeLink" : ""
									}`}
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</nav>
	);
}
