import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageProvider";
import translations from "../i18n/translates";

const Home = () => {
	const { language } = useLanguage();
	const t = translations[language].home;
	return (
		<section className="bg-linear-to-tr from-black via-red-950 to-red-600 min-h-screen font-inter flex flex-col justify-center items-center px-6 py-16 font-medium bg-neutral-800 text-neutral-300">
			<img
				src="/public/dexter.png"
				alt="blood splash"
				className="absolute top-10 left-[10%] w-[800px] h-[600px] opacity-30 blur-md pointer-events-none select-none object-cover"
			/>
			<div className="max-w-3xl w-full flex flex-col items-start gap-6 text-left">
				<h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
					{t.title} <span className="text-red-600 text-shadow-black text-shadow-lg">Mertcan Çetinkaya</span>
				</h1>
				<p className="text-lg sm:text-xl text-neutral-400">
					{t.desc}
					{/* Software & CNC Enthusiast. Passionate about creating elegant technical solutions with C, JS, and React. Currently
					studying at <span className="text-white font-medium">42 Kocaeli</span> and blending my knowledge of software with
					<span className="text-white font-medium"> CNC Lathe/Torna</span> programming and operating. */}
				</p>
				<div className="flex flex-wrap gap-4 mt-4">
					<a
						href="/cv.pdf"
						download
						className="inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-md bg-red-700 text-white hover:bg-red-950 transition"
					>
						<FiDownload size={18} /> {t.downloadCv}
					</a>
					<a
						href="https://github.com/mertctnkaya/mertce"
						target="_blank"
						className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-md  hover:bg-red-700 hover:border-red-900 transition"
					>
						<BsGithub size={18} /> {t.github}
					</a>
					<a
						href="https://linkedin.com/in/mertcan-çetinkaya-80b850235"
						target="_blank"
						className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-md hover:bg-red-700 hover:border-red-900 transition"
					>
						<BsLinkedin size={18} /> {t.linkedin}
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
