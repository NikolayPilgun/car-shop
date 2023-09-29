import { ICarCard } from "@/types";
import CarCard from "./CarCard";
import TheLoading from "./TheLoading";

interface CarCardProps {
	cars: ICarCard[];
}
export default function BodyCards({ cars }: CarCardProps) {
	return (
		<>
			{cars.length > 0 ? (
				<div className="w-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mt-10 mb-11">
					{cars.map((car) => (
						<CarCard key={car.id} car={car} />
					))}
				</div>
			) : (
				<TheLoading />
			)}
		</>
	);
}
