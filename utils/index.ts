import { ICarCard } from "@/types";
let limitPage = 8;

export async function getDataCard(): Promise<ICarCard[]> {
	let response = await fetch(`http://localhost:3004/cars?_page=1&_limit=8`);
	if (!response.ok) throw new Error("Unable to fetch  post!");
	return response.json();
}

export async function getFiltrationCars(
	parameter: string
): Promise<ICarCard[]> {
	let response = await fetch(`http://localhost:3004/cars?${parameter}`);

	if (!response.ok) throw new Error("Unable to fetch  post!");
	return response.json();
}

export async function getCarsPaginate(limit: number): Promise<ICarCard[]> {
	limitPage = limit + limitPage;
	let response = await fetch(
		`http://localhost:3004/cars?_page=1&_limit=${String(limitPage)}`
	);

	if (!response.ok) throw new Error("Unable to fetch  post!");
	return response.json();
}
