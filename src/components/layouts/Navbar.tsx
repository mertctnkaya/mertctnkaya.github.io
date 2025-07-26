import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { BiMenu, BiX } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import LangSwitcher from "../ui/LangSwitcher";
import { useLanguage } from "../../i18n/LanguageProvider";
import translations from "../../i18n/translates";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();
	const { language } = useLanguage();
	const t = translations[language].navbar;

	const navItems = [
		{ name: t.home, path: "/" },
		{ name: t.about, path: "/about" },
		{ name: t.projects, path: "/projects" },
		{ name: t.certificates, path: "/certificates" },
		{ name: t.contact, path: "/contact" },
	];

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	return (
		<header className="bg-neutral-900 bg-opacity-90 font-inter backdrop-blur-md shadow-md border-b border-red-800">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-neutral-200">
				{/* Home */}
				<Link to="/" className="text-xl font-bold text-red-600 tracking-wide">
					<span className="flex items-center justify-center gap-2">
						<HiHome /> main.c
					</span>
				</Link>
				{/* language ve Hamburger */}
				<div className="flex items-center gap-4">
					<LangSwitcher />

					{/* Hamburger Button (Mobile) */}
					<button className="md:hidden text-neutral-200" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
						{menuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
					</button>
				</div>

				{/* Menu - Desktop */}
				<nav className="hidden md:flex gap-6 font-medium">
					{navItems.map((item) => (
						<Link key={item.name} to={item.path} className="relative group transition">
							<span>{item.name}</span>
							<span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
						</Link>
					))}
				</nav>
			</div>

			{/* Menu - Mobil */}
			<nav
				className={clsx(
					"md:hidden overflow-hidden transition-all duration-300",
					menuOpen ? "max-h-[500px] py-4 px-6" : "max-h-0 px-6"
				)}
			>
				<div className="flex flex-col gap-4 text-neutral-200">
					{navItems.map((item) => (
						<Link key={item.name} to={item.path} className="border-b border-neutral-700 py-2">
							{item.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
