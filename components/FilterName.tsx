"use client";

import { SearchNameProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function FilterName({
	valueFilter,
	setValueFilter,
	dataSearchName,
	ImageSrc,
	placeholderSearch,
}: SearchNameProps) {
	const [query, setQuery] = useState("");

	const filteredSearchName =
		query === ""
			? dataSearchName
			: dataSearchName.filter((name) =>
					name
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );
	return (
		<div>
			<Combobox value={valueFilter} onChange={setValueFilter}>
				<div className="relative mt-1">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
						<Combobox.Input
							placeholder={placeholderSearch}
							className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
							displayValue={(name: string) => name}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
							<Image
								src={ImageSrc}
								alt="car icon"
								width={20}
								height={20}
								className="h-auto w-auto"
							/>
						</Combobox.Button>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
							{filteredSearchName.length === 0 && query !== "" ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Ничего не найдено.
								</div>
							) : (
								filteredSearchName.map((name) => (
									<Combobox.Option
										key={name}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? "bg-cyan-600 text-white" : "text-gray-900"
											}`
										}
										value={name}
									>
										{({ selected }) => (
											<>
												<span
													className={`block truncate ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{name}
												</span>
												{selected ? (
													<span className="absolute inset-y-0 left-0 flex items-center pl-3">
														<Image
															src="/icons/icon4.png"
															width={20}
															height={20}
															alt="selected icon"
														/>
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
}
