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
			className={`outline-none ${buttonStyles}`}
			onClick={handleClick}
		>
			<span>{title}</span>
		</button>
	);
}
