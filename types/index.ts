export interface CustomButtonProps {
	title: string;
	buttonStyles?: string;
}

export interface SearchNameProps {
	nameSearch: string;
	setManuFacturer: (nameSearch: string) => void;
}
