"use client";

import { CustomButtonProps } from "@/types";

export default function CustomButton({
	title,
	buttonStyles,
	handleClick,
}: CustomButtonProps) {
	return (
		<button
			type="button"
			className={`outline-none hover:bg-cyan-500 transition-all active:scale-95 ${buttonStyles}`}
			onClick={handleClick}
		>
			<span>{title}</span>
		</button>
	);
}
