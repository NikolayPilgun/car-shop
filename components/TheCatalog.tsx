"use client";
import {
	dataCarsBody,
	dataCarsModel,
	dataCarsYears,
	dataSearchName,
} from "@/data/dataSearch";
import { ICarCard } from "@/types";
import { getDataCard } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import BodyCards from "./BodyCards";
import FilterName from "./FilterName";
import ParameterFilter from "./ParameterFilter";
let ifFound = true;

export default function TheCatalog() {
	const [nameFilter, setNameFilter] = useState("");
	const [carModel, setCarModel] = useState("");
	const [selectedYear, setSelectedYear] = useState("");
	const [selectedBody, setSelectedBody] = useState("");

	const [cars, setCars] = useState<ICarCard[] | []>([]);

	async function filtrationCars() {
		let filterParameter = `${nameFilter && `&make=${nameFilter}`}${
			carModel && `&model=${carModel}`
		}${selectedYear && `&year=${selectedYear}`}${
			selectedBody && `&body=${selectedBody}`
		}`;

		//_________________________________________
		let resCars = await getDataCard(filterParameter);

		if (resCars.length < 1) {
			ifFound = false;
		} else {
			ifFound = true;
		}
		setCars(resCars);

		// getDataCard(filterParameter).then(setCars);
		//_________________________________________
	}

	useEffect(() => {
		getDataCard().then(setCars);
	}, []);

	return (
		<section className="w-11/12 mx-auto my-10">
			<div>
				<h2 className="md:text-3xl text-xl">Каталог автомобилей</h2>
				<p className="mt-3">
					Посмотрите автомобили, которые могут вам понравиться
				</p>
			</div>
			<div className="flex justify-between items-start gap-4 flex-wrap mt-5">
				<FilterName
					valueFilter={nameFilter}
					setValueFilter={setNameFilter}
					dataSearchName={dataSearchName}
					ImageSrc={"/icons/icon1.png"}
					placeholderSearch={"Модель автомобиля"}
				/>
				<FilterName
					valueFilter={carModel}
					setValueFilter={setCarModel}
					dataSearchName={dataCarsModel}
					ImageSrc={"/icons/icon2.png"}
					placeholderSearch={"Марка автомобиля"}
				/>

				<ParameterFilter
					selectParameter={selectedYear}
					setSelectParameter={setSelectedYear}
					dataCarsParameter={dataCarsYears}
					placeholderSelect={"Выберите год:"}
					widthSelect={"w-[110px]"}
				/>

				<ParameterFilter
					selectParameter={selectedBody}
					setSelectParameter={setSelectedBody}
					dataCarsParameter={dataCarsBody}
					placeholderSelect={"Тип кузова:"}
					widthSelect={"w-[160px]"}
				/>
				<button
					type="button"
					className="flex justify-center items-center gap-2 text-white py-2 px-3 bg-cyan-600"
					onClick={filtrationCars}
				>
					<span>Фильтр</span>
					<Image src="/icons/search6.png" alt="search" width={20} height={20} />
				</button>
			</div>
			{ifFound ? (
				<BodyCards cars={cars} />
			) : (
				<div className="w-full h-20 flex justify-center items-center my-16 ">
					<h3>По заданным вами параметрам Ничего не найдено</h3>
				</div>
			)}
		</section>
	);
}

// {cars.length > 0 ? (
// 	<div className="w-full grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mt-10 mb-11">
// 		{cars.map((car) => (
// 			<CarCard key={car.id} car={car} />
// 		))}
// 	</div>
// ) : (
// 	<div className="w-full h-20 flex justify-center items-center my-16 ">
// 		<h3>По заданным вами параметрам Ничего не найдено</h3>
// 	</div>
// )}
