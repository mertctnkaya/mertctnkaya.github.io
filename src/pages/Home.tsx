// import { Button } from "@/components/ui/button";
import { DownloadIcon, Github, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <section className="bg-gradient-to-tr from-black via-red-950 to-red-600 min-h-screen font-inter flex flex-col justify-center items-center px-6 py-16 font-medium bg-neutral-800 text-neutral-300">
      <div className="max-w-3xl w-full flex flex-col items-start gap-6 text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
          Hi, I'm <span className="text-red-600 shadow-inherit text-shadow-xl ">Mertcan Çetinkaya</span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400">
          Software & CNC Enthusiast. Passionate about creating elegant technical
          solutions with C, JS, and React. Currently studying at{" "}
          <strong>42 Kocaeli</strong> and blending my knowledge of software with
          CNC automation.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-md bg-red-600 text-white hover:bg-red-950 transition"
          >
            <DownloadIcon size={18} /> Download CV
          </a>
          <a
            href="https://github.com/mertctnkaya/mertce"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-md  hover:bg-red-700 hover:border-red-900 transition"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/mertcan-çetinkaya-80b850235"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-md hover:bg-red-700 hover:border-red-900 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
