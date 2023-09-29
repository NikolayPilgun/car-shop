"use client";
import { ICarCard } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Dispatch, Fragment, SetStateAction } from "react";

interface CarDetailsProps {
	isOpen: boolean;
	closeModal: Dispatch<SetStateAction<boolean>>;
	car: ICarCard;
}
export default function CarDetails({
	isOpen,
	closeModal,
	car,
}: CarDetailsProps) {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-20"
					onClose={() => closeModal(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
									<button
										type="button"
										className="absolute top-4 right-4 bg-orange-300 rounded-full p-3 cursor-pointer z-10"
										onClick={() => closeModal(false)}
									>
										<Image
											src="/pictures/nav/close.png"
											width={20}
											height={20}
											alt="close"
										/>
									</button>
									<div className="flex flex-col gap-3">
										<div className="relative w-full h-40 object-contain bg-[#aea791] rounded-lg">
											<Image
												src={car.picture}
												alt={car.model}
												fill
												sizes="80vw"
												className="object-contain"
											/>
										</div>
										<div className="flex flex-wrap gap-3">
											<div className="flex-1 relative w-full h-24  rounded-lg">
												<Image
													src="/pictures/cars/carDetails/carDetails3.png"
													alt={car.model}
													sizes="80vw"
													fill
													className="object-contain"
												/>
											</div>
											<div className="flex-1 relative w-full h-24  rounded-lg">
												<Image
													src="/pictures/cars/carDetails/carDetails8.png"
													alt={car.model}
													sizes="80vw"
													fill
													className="object-contain"
												/>
											</div>
											<div className="flex-1 relative w-full h-24  rounded-lg">
												<Image
													src="/pictures/cars/carDetails/carDetails5.png"
													alt={car.model}
													sizes="80vw"
													fill
													className="object-contain"
												/>
											</div>
											<div className="flex-1 relative w-full h-24  rounded-lg">
												<Image
													src="/pictures/cars/carDetails/carDetails6.png"
													alt={car.model}
													sizes="80vw"
													fill
													className="object-contain"
												/>
											</div>
										</div>
										<div>
											<h2 className="font-semibold text-xl">
												{car.make} {car.model}
											</h2>
										</div>
										<div className="flex flex-col gap-2 px-2">
											<p className="flex justify-between items-center">
												<span>Год выпуска</span>
												<span>{car.year}</span>
											</p>
											<p className="flex justify-between items-center">
												<span>Кузов</span>
												<span>{car.body}</span>
											</p>
											<p className="flex justify-between items-center">
												<span>Цвет</span>
												<span>{car.bodyColor}</span>
											</p>
											<p className="flex justify-between items-center">
												<span>Двигатель</span>
												<span>{car.powerfulEngine}л.с.</span>
											</p>
											<p className="flex justify-between items-center">
												<span>Коробка</span>
												<span>{car.transmission}</span>
											</p>
											<p className="flex justify-between items-center">
												<span>Привод</span>
												<span>{car.driveUnit}</span>
											</p>
											<p className="flex justify-between items-center">
												<span>Цена</span>
												<span>{car.price}&#8381;</span>
											</p>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
