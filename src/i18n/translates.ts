// src/i18n/translate.ts

const translations = {
	en: {
		navbar: {
			home: "Home",
			about: "About",
			projects: "Projects",
			certificates: "Certificates",
			contact: "Contact",
		},
		home: {
			title: "Hi, I'm",
			desc:
				"Software & CNC Enthusiast. Passionate about creating elegant technical solutions with C, JS, and React. Currently studying at 42 Kocaeli and aims to blending his knowledge of software developing with CNC Lathe programming and operating.",
			downloadCv: "Download CV",
			github: "GitHub",
			linkedin: "LinkedIn",
		},
		about: {
			title: {
				about: "About Me",
				skills: "Skills",
				exp: "Experience",
				edu: "Education",
			},
			desc: `I'm a programming student at 42 Kocaeli and Atatürk University. I have hands-on experience in C, C#, JavaScript, React, Node.js, and aiming for extra job experience in CNC Lathe Programming and Operating. I completed an IT internship at Autoliv, where I provided technical support and learned about corporate workflows. I am passionate about combining software development with manufacturing technologies.`,
			skills: [
				"JavaScript & TypeScript, C#, C, MongoDB, SQL",
				"React.js, Node.js, HTML, CSS, TailwindCSS",
				"English (B2-C1 EFSET cert.)",
				"Graphic Design (AE, PS, LR basics)",
				"CNC Lathe Programming and Operator Student",
			],
			experience: [
				{
					title: "IT - Maintenance Trainee",
					company: "Autoliv Cankor GOSB, Gebze, Kocaeli",
					period: "Sep 2023 – Jun 2024",
					desc:
						"Provided on-field and remote technical support, gained practical experience with corporate workflows and occupational safety.",
				},
			],
			education: [
				{
					school: "Atatürk University",
					program: "Computer Programming (Online 2 Years)",
					period: "2024 – Ongoing - 2026 Estimated",
				},
				{
					school: "42 Kocaeli",
					program: "Programming",
					period: "2025 – Ongoing - 2026 Estimated",
				},
			],
		},
		projects: {
			title: "My Projects",
			desc: "(Details coming soon)",
			list: [
				{
					title: "Personal Portfolio",
					desc: "Modern React portfolio built with TypeScript and Tailwind CSS.",
					tech: ["React.js", "TypeScript", "TailwindCSS"],
				},
			],
		},
		certificates: {
			title: "Certificates & Courses",
			desc: "My educational achievements, courses and professional certifications.",
			list: [
				{
					title: "CNC Lathe/Torna Adaptation and Programming",
					issuer: "YETGİM, Pendik, Istanbul",
					year: "2025",
				},
				{
					title: "English (B2-C1) EFSET Certificate",
					issuer: "EFSET",
					year: "2024",
				},
			],
		},
		contact: {
			title: "Contact",
			desc: "Feel free to reach out for collaboration or questions. Or just say hello!",
			info: {
				email: "m3rt7132@gmail.com",
				location: "Kocaeli / Istanbul, Turkey",
				linkedin: "https://linkedin.com/in/mertcan-çetinkaya-80b850235",
				github: "https://github.com/mertctnkaya",
			},
		},
	},
	tr: {
		navbar: {
			home: "Ana Sayfa",
			about: "Hakkımda",
			projects: "Projeler",
			certificates: "Sertifikalar",
			contact: "İletişim",
		},
		home: {
			title: "Merhaba, ben",
			desc:
				"42 Kocaeli'de okuyan, C, C#, JavaScript, React ve Node.js konusunda uzmanlaşan bir yazılım geliştirme öğrencisidir. Autoliv'de staj yaparak IT desteği ve kurumsal işleyiş deneyimi kazanmıştır. Gelecekte yazılım/web geliştirme ile CNC programlamayı birleştirmeyi hedeflemektedir.",
			downloadCv: "CV'yi indir",
			github: "GitHub",
			linkedin: "LinkedIn",
		},
		about: {
			title: {
				about: "Hakkımda",
				skills: "Beceriler",
				exp: "Deneyimler",
				edu: "Eğitim",
			},
			desc: `42 Kocaeli ve Atatürk Üniversitesi'nde programlama öğrencisiyim. C, C#, JavaScript, React, Node.js konularında deneyimim var. Autoliv'de IT stajı yaptım, teknik destek sağladım ve kurumsal işleyişi öğrendim. Yazılım geliştirme ile CNC torna teknolojilerini birleştirmeyi amaçlıyorum.`,
			skills: [
				"JavaScript & TypeScript, C#, C, C++, MongoDB, SQL",
				"React.js, Node.js, Next.js, TailwindCSS",
				"İngilizce (B2-C1 EFSET sert.)",
				"Grafik Tasarım (AE, PS, LR temel)",
				"CNC Torna Programlama ve Operatör Öğrencisi",
			],
			experience: [
				{
					title: "IT - Bakım Stajyeri",
					company: "Autoliv Cankor GOSB, Gebze, Kocaeli",
					period: "Eyl 2023 – Haz 2024",
					desc:
						"Saha ve uzaktan teknik destek sağladım, kurumsal işleyiş ve iş güvenliği konusunda pratik deneyim kazandım.",
				},
			],
			education: [
				{
					school: "Atatürk Üniversitesi",
					program: "Bilgisayar Programcılığı (Online 2 Yıl)",
					period: "2024 – Devam Ediyor - 2026 Tahmini",
				},
				{
					school: "42 Kocaeli",
					program: "Programlama",
					period: "2025 – Devam Ediyor - 2026 Tahmini",
				},
			],
		},
		projects: {
			title: "Projelerim",
			desc: "Yazılım ve CNC ile ilgili projelerimden seçmeler. (Detaylar yakında)",
			list: [
				{
					title: "Kişisel Portfolyo",
					desc: "React.ts ve Tailwind CSS ile hazırlanmış modern portfolyo.",
					tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
					link: "https://github.com/mertctnkaya/mertctnkaya.github.io/",
				},
			],
		},
		certificates: {
			title: "Sertifikalar",
			desc: "Eğitim başarılarım ve profesyonel sertifikalarım.",
			list: [
				{
					title: "CNC Torna Adaptasyon ve Programlama",
					issuer: "YETGİM, Pendik, İstanbul",
					year: "2025",
				},
				{
					title: "İngilizce (B2-C1) EFSET Sertifikası",
					issuer: "EFSET",
					year: "2024",
				},
			],
		},
		contact: {
			title: "İletişim",
			desc: "İşbirliği veya sorularınız için bana ulaşabilirsiniz. İsterseniz sohbet etmek için bile ulaşabilirsiniz!",
			info: {
				email: "m3rt7132@gmail.com",
				location: "Kocaeli/Gebze / İstanbul, Türkiye",
				linkedin: "https://linkedin.com/in/mertcan-çetinkaya-80b850235",
				github: "https://github.com/mertctnkaya",
			},
		},
	},
} as const;

export type Language = "en" | "tr";
export default translations;
