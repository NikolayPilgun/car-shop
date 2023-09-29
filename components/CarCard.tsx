"use client";
import Image from "next/image";

import { ICarCard } from "@/types";
import { useState } from "react";
import CarDetails from "./CarDetails";
import CustomButton from "./CustomButton";

interface CarCardProps {
	car: ICarCard;
}

export default function CarCard({ car }: CarCardProps) {
	let [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex flex-col justify-center items-center rounded-lg p-5 bg-[#FDF8E9]">
			<div className="flex items-center justify-between w-full mb-5">
				<div>
					<h3 className="text-base font-medium">{car.make}</h3>
					<h3 className="text-sm">{car.model}</h3>
				</div>
				<div>
					<CustomButton
						handleClick={() => setIsOpen(true)}
						title="Подробнее"
						buttonStyles="bg-cyan-600 text-white rounded-3xl p-2 text-sm"
					/>
				</div>
			</div>
			<div>
				<h2 className="font-medium text-orange-500">{car.price}&#8381;</h2>
			</div>

			<div className="relative w-full h-40 my-3 object-contain">
				<Image
					src={car.picture}
					alt={car.model}
					blurDataURL="/pictures/cars/placeholder.png"
					placeholder="blur"
					fill
					sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
					className="object-contain"
				/>
			</div>
			<div className="flex items-center justify-between w-full">
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/icons/transmission.png"
						width={30}
						height={30}
						alt="transmission"
						className="w-auto"
					/>
					<h4 className="text-base">{car.transmission}</h4>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/icons/powerfulEngine.png"
						width={30}
						height={30}
						alt="powerfulEngine"
					/>
					<h4 className="text-base">{car.powerfulEngine}л.с.</h4>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/icons/driveUnit.png"
						width={30}
						height={30}
						alt="driveUnit"
					/>
					<h4 className="text-base">{car.driveUnit}</h4>
				</div>
			</div>
			<CarDetails isOpen={isOpen} closeModal={setIsOpen} car={car} />
		</div>
	);
}
