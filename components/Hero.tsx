import Image from "next/image";
import CustomButton from "./CustomButton";
export default function Hero() {
	return (
		<section className="w-full flex md:flex-row flex-col justify-between items-center gap-4  my-6 px-8">
			<div className="flex-[0_1_50%]">
				<h1 className="mb-8 lg:text-4xl md:text-2xl text-xl font-medium">
					В автосалоне «Центральный» всегда действуют выгодные спецпредложения
					на автомобили различных марок.
				</h1>
				<h3 className="mb-6">
					С ними вы можете ознакомиться в специальном разделе, а наши менеджеры
					с радостью ответят на все интересующие вопросы
				</h3>
				<p className="mb-6">
					<CustomButton
						title="Узнать больше"
						buttonStyles="bg-cyan-600 text-white py-3 px-6"
					/>
				</p>
			</div>
			<div className="flex-[0_1_50%] posterBackground">
				<Image
					src="/logo/logo4.png"
					width="0"
					height="0"
					sizes="100vw"
					className="w-full h-auto"
					alt="Logo"
				/>
			</div>
		</section>
	);
}
