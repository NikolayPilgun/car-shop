"use client";

import { CustomButtonProps } from "@/types";

export default function CustomButton({
	title,
	buttonStyles,
}: CustomButtonProps) {
	return (
		<button type="button" className={`py-3 px-6 outline-none ${buttonStyles}`}>
			<span>{title}</span>
		</button>
	);
}
