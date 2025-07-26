import translations from "../i18n/translates";
import { useLanguage } from "../i18n/LanguageProvider";

function About() {
	const { language } = useLanguage();
	const t = translations[language].about;

	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-neutral-800 text-neutral-300 px-6 py-16 font-inter">
			<h1>{t.title}</h1>
			<p>{t.desc}</p>
		</div>
	);
}
export default About;
