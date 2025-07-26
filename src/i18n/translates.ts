// src/i18n/translate.ts

const translations = {
	en: {
		navbar: {
			home: "Home",
			about: "About",
			projects: "Projects",
			certificates: "Certificates",
			contact: "Contact"
		},
		home: {
			title: "Hi, I'm",
			desc: "Software & CNC Enthusiast. Passionate about creating elegant technical solutions with C, JS, and React. Currently studying at 42 Kocaeli and blending his knowledge of software developing with CNC Lathe programming and operating.",
			downloadCv: "Download CV",
			github: "GitHub",
			linkedin: "LinkedIn"
		},
		about: {
			title: "About Me",
			desc: "I am studying software at 42 Kocaeli. I develop projects using C, JS, and React. I also have experience in CNC Lathe programming and operation. I am continuously improving this site."
		}
	},
	tr: {
		navbar: {
			home: "Ana Sayfa",
			about: "Hakkımda",
			projects: "Projeler",
			certificates: "Sertifika",
			contact: "İletişim"
		},
		home: {
			title: "Merhaba, ben",
			desc: "Yazılım ve CNC meraklısı. C, JS ve React ile teknik çözümler üreten ve geliştiren bir öğrenci. Şu anda 42 Kocaeli'de okuyor ve yazılım bilgisini CNC Torna programlama ve operatörlüğüyle birleştiriyor.",
			downloadCv: "CV'yi indir",
			github: "GitHub",
			linkedin: "LinkedIn"
		},
		about: {
			title: "Hakkımda",
			desc: "42 Kocaeli'de yazılım eğitimi alıyorum. C, JS ve React ile projeler geliştiriyorum. CNC Torna programlama ve işletme konularında da deneyimim var. Siteyi geliştirmeye devam ediyorum."
		}
	},
} as const;

export type Language = "en" | "tr";
export default translations;
