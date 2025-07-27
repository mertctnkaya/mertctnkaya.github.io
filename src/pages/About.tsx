import { useLanguage } from "../i18n/LanguageProvider";
import translations from "../i18n/translates";

const About = () => {
	const { language } = useLanguage();
	const t = translations[language].about;

	return (
		<section className="bg-gradient-to-tr from-black via-red-950 to-red-600 min-h-screen font-inter flex flex-col justify-center items-center px-6 py-16 font-medium text-neutral-300 w-full overflow-hidden relative">
			<div className="max-w-4xl w-full flex flex-col items-center gap-8 text-center relative z-10">
				<div className="text-center mb-8">
					<h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-4">{t.title.about}</h1>
					<p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">{t.desc}</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">

					<div className="bg-neutral-900 bg-opacity-50 backdrop-blur-sm border border-red-800 rounded-lg p-6 hover:bg-opacity-70 transition-all">
						<h3 className="text-xl font-bold text-white mb-2">{t.title.skills}</h3>
						<ul className="text-left text-neutral-300 space-y-1">
							{t.skills.map((skill: string, i: number) => (
									<li key={i} className="pl-2 list-disc list-inside">
										{skill}
									</li>
								))}
						</ul>
					</div>

					<div className="bg-neutral-900 bg-opacity-50 backdrop-blur-sm border border-red-800 rounded-lg p-6 hover:bg-opacity-70 transition-all">
						<h3 className="text-xl font-bold text-white mb-2">{t.title.exp}</h3>
						{t.experience.map((exp: any, i: number) => (
								<div key={i} className="mb-3 text-left">
									<div className="font-semibold text-red-400">{exp.title}</div>
									<div className="text-neutral-300">{exp.company}</div>
									<div className="text-neutral-400 text-sm">{exp.period}</div>
									<div className="text-neutral-400 text-xs mt-1">{exp.desc}</div>
								</div>
							))}
					</div>

					<div className="bg-neutral-900 bg-opacity-50 backdrop-blur-sm border border-red-800 rounded-lg p-6 hover:bg-opacity-70 transition-all col-span-1 md:col-span-2">
						<h3 className="text-xl font-bold text-white mb-2">{t.title.edu}</h3>
						<div className="flex flex-col md:flex-row gap-4">
							{t.education.map((edu: any, i: number) => (
									<div key={i} className="flex-1 text-left bg-neutral-800 bg-opacity-60 rounded p-4 border border-red-900">
										<div className="font-semibold text-red-400">{edu.school}</div>
										<div className="text-neutral-300">{edu.program}</div>
										<div className="text-neutral-400 text-sm">{edu.period}</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
