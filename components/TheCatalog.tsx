"use client";
import {
	dataCarsBody,
	dataCarsModel,
	dataCarsYears,
	dataSearchName,
} from "@/data/dataSearch";
import { ICarCard } from "@/types";
import { getCarsPaginate, getDataCard, getFiltrationCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import BodyCards from "./BodyCards";
import FilterName from "./FilterName";
import ParameterFilter from "./ParameterFilter";
let ifFound = true;
let isClickFilter = false;

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
		if (
			nameFilter != "" ||
			carModel != "" ||
			selectedYear != "" ||
			selectedBody != ""
		) {
			isClickFilter = true;
			let resCars = await getFiltrationCars(filterParameter);

			if (resCars.length < 1) {
				ifFound = false;
			} else {
				ifFound = true;
			}
			setCars(resCars);
		}
	}
	async function carsPaginate() {
		const limit = 2;

		let resCars = await getCarsPaginate(limit);
		setCars(resCars);
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
					className="flex justify-center items-center gap-2 text-white py-2 px-3 bg-cyan-600 hover:bg-cyan-500 transition-all active:scale-95"
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
			<div className="my-5 flex justify-center items-center">
				{cars.length === 16 || isClickFilter ? (
					""
				) : (
					<button
						type="button"
						className="flex justify-center items-center gap-2 text-white py-2 px-3 bg-cyan-600 hover:bg-cyan-500 transition-all active:scale-95"
						onClick={carsPaginate}
					>
						<span>Показать ещё</span>
					</button>
				)}
			</div>
		</section>
	);
}
