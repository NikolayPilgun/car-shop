import CustomFilter from "./CustomFilter";
import CustomSearch from "./CustomSearch";

export default function TheCatalog() {
	return (
		<section className="w-11/12 mx-auto my-10">
			<div>
				<h2 className="md:text-3xl text-xl">Каталог автомобилей</h2>
				<p className="mt-3">
					Посмотрите автомобили, которые могут вам понравиться
				</p>
			</div>
			<div className="flex justify-between items-start flex-wrap mt-5">
				<CustomFilter />
				<CustomSearch />
			</div>
		</section>
	);
}
