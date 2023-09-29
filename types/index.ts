import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	title: string;
	buttonStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchNameProps {
	valueFilter: string;
	setValueFilter: (valueFilter: string) => void;
	dataSearchName: string[];
	ImageSrc: string;
	placeholderSearch: string;
}

export interface FilterSelectProps {
	selectParameter: string;
	setSelectParameter: (selectParameter: string) => void;
	dataCarsParameter: string[];
	placeholderSelect: string;
	widthSelect: string;
}

export interface ICarCard {
	id: number;
	make: string;
	model: string;
	picture: string;
	bodyColor: string;
	powerfulEngine: number;
	price: number;
	year: number;
	transmission: string;
	body: string;
	driveUnit: string;
	equipment: string[];
}
