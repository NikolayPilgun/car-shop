import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
	title: "Контакты",
};
export default function Contacts() {
	return (
		<div className="w-full flex justify-between items-center max-md:flex-col gap-5">
			<div className="flex-[0_1_50%]">
				<Image
					src="/logo/contacts.jpg"
					width="0"
					height="0"
					sizes="100vw"
					className="w-full h-auto"
					alt="Logo"
				/>
			</div>
			<div className="flex-[0_1_50%] max-md:p-5">
				<address>
					<p className="text-xl mb-5">Адрес г.Москва</p>
					<p className="mb-8">
						Режим работы Каждый день: с 9.00 - 21.00 Суббота и Воскресенье: с
						8.00 - 21.00
					</p>
					<p className="mb-5">
						<span>Телефоны: </span>
						<a className="px-3" href="tel:+145455534368">
							(311) 225-23238
						</a>
						<span>Бесплатно по России</span>
					</p>
					<p className="mb-5">
						<span>Электронная почта </span>
						<a href="mailto:jim@aftoservis.com">info@aftoservis.ru</a>
					</p>
				</address>
			</div>
		</div>
	);
}
