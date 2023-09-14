import Image from "next/image";
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
				<Image src="/logo/logo2.png" width={200} height={100} alt="Logo" />
			</div>
			<h2 className="">Created by &copy; Nikolay Pilgun</h2>
		</footer>
	);
}
