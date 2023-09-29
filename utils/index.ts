import { ICarCard } from "@/types";

export async function getDataCard(parameter?: string): Promise<ICarCard[]> {
	let response;

	if (parameter) {
		response = await fetch(`http://localhost:3004/cars?${parameter}`);
	} else {
		response = await fetch(`http://localhost:3004/cars`);
	}

	if (!response.ok) throw new Error("Unable to fetch  post!");
	return response.json();
}
