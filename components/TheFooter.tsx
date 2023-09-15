import Image from "next/image";
import logoFooter from "../public/logo/logo2.png";
export default function TheFooter() {
	return (
		<footer className="w-full flex max-md:flex-col gap-5  justify-between items-center px-7 py-9 bg-slate-700 text-orange-400 ">
			<address className="flex flex-col justify-start items-start">
				<span>АДРЕС</span>
				<span>Ленина ул., с101В, КП</span>
				<span>ТЕЛЕФОН</span>
				<a href="tel:+132342433">(311) 335-234324</a>
			</address>
			<div>
				<Image
					src={logoFooter}
					width="0"
					height="0"
					sizes="300px"
					className="w-full h-auto"
					alt="logoFooter"
				/>
			</div>
			<h2 className="">Created by &copy; Nikolay Pilgun</h2>
		</footer>
	);
}
