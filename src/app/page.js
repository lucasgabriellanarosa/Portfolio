import Image from "next/image";
import ResumeBtn from "./components/ResumeBtn";
import SectionTitle from "./components/SectionTitle";
import SkillContainer from "./components/SkillContainer";
import ProjectHeader from "./components/ProjectHeader";
import ProjectImage from "./components/ProjectImage";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <header className="bg-zinc-900 fixed w-full flex justify-end items-center px-4 py-2 gap-3">
        <a href="#about_section" className="text-red-900 font-Agbalumo text-lg md:text-xl">About</a>
        <a href="#experience_section" className="text-red-900 font-Agbalumo text-lg md:text-xl">Experience</a>
        <a href="#projects_section" className="text-red-900 font-Agbalumo text-lg md:text-xl">Projects</a>
        <ResumeBtn />
      </header>

      <div className="pt-72 pb-10 flex flex-col justify-center items-center gap-40">

        <h1 className="text-red-900 font-FasterOne text-4xl md:text-6xl">Lucas Gabriel <br /> Web Developer</h1>

        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(48px,_1fr))] gap-y-4 px-8 py-4 justify-center items-center bg-emerald-600 w-full">
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-plain.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
          <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
        </ul>

      </div>

      <div id="about_section" className="page_section">

        <SectionTitle title="About Me" />

        <section className="bg-emerald-600 flex flex-col gap-4 py-2 px-4 rounded-lg">
          <p className="font-OpenSans text-xs">I am a web developer passionate about creating efficient and functional solutions. I worked as a volunteer front end developer at Clube Delivery, where I gained professional experience with Javascript.

            Currently I am studying a bachelor's degree in Software Engineering at UNINTER and actively looking for a new job opportunity! Furthermore, I have been studying Typescript and reinforcing my Git knowledge by the platform W3Schools.

            My journey in programming began with Professor Gustavo Guanabara’s courses on Curso em Vídeo, where I built a strong foundation in HTML, CSS, and JavaScript. I further deepened my web development knowledge through The Odin Project platform, exploring more concepts and improving my skills with JavaScript and CSS. Later, I completed CS50's Web Programming with Python and JavaScript by Harvard University, where I learned Python, Django, and Bootstrap while reinforcing back-end and API concepts. I added React and Next to my skill set through free content on YouTube. More recently I've concluded another course from the Harvard University, the CS50's Introduction to Databases with SQL, that gave me experience with SQLite, MySQL and PostgreSQL!

            In addition to programming, I am studying French and have completed an advanced English course at Fernando Idiomas, enhancing my communication skills for international projects.</p>

          <div className="flex justify-end">
            <ResumeBtn />
          </div>

        </section>

      </div>

      <div id="experience_section" className="page_section">

        <SectionTitle title="Experience" />

        <ul>

          <li className="flex flex-col gap-4">

            <div className="flex gap-2 justify-center items-center">
              <Image
                src="/images/experience/clubedelivery.jpg"
                alt="ClubeDelivery Logo"
                width={50}
                height={50}
              />
              <div className="w-full">
                <h3 className="text-red-800 font-Agbalumo text-base">Vonluteer Front End Developer <span className="text-emerald-600">At Club Delivery </span> </h3>
                <h4 className="text-red-700 font-Agbalumo text-sm">Dezember 2024 - February 2025</h4>
              </div>
            </div>

            <div className="bg-emerald-600 flex flex-col items-center justify-center px-4 py-2 gap-3 rounded-lg">
              <p className="font-OpenSans">
                <h5>Responsabilities</h5>
                <ul className="text-sm list-disc px-4">
                  <li>Creating wireframes and designing website web pages in Figma;</li>
                  <li>Reporting bugs and problems in the company main web page;</li>
                  <li>Implementing features;</li>
                </ul>
              </p>
              <ul className="flex gap-2">
                <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
              </ul>
            </div>

          </li>
        </ul>
      </div>

      <div id="projects_section" className="page_section">
        <SectionTitle title="Projects" />

        <ul className="flex flex-col gap-8">

          <li className="flex flex-col gap-4">

            <ProjectHeader
              title={"FakeStore"}
              live={"https://www.youtube.com/watch?v=G41aHjim8BY"}
              rep={"https://github.com/lucasgabriellanarosa/FakeStore"}
            />

            <ProjectImage
              src="/images/projects/fakestore.png"
              alt="Fakestore Project"
            />

            <ul className="flex gap-2 bg-slate-500 justify-center items-center py-1">

              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />
            </ul>
          </li>

          <li className="flex flex-col gap-4">

            <ProjectHeader
              title={"Anime App"}
              live={"https://www.youtube.com/watch?v=1SHbxfKcEhM"}
              rep={"https://github.com/lucasgabriellanarosa/CS50W-FinalProject"}
            />

            <ProjectImage
              src="/images/projects/animeapp.png"
              alt="AnimeApp Project"
            />

            <ul className="flex gap-2 bg-slate-500 justify-center items-center py-1">

              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />

            </ul>
          </li>


          <li className="flex flex-col gap-4">

            <ProjectHeader
              title={"Weather Now"}
              live={"https://weather-now-psi.vercel.app/"}
              rep={"https://github.com/lucasgabriellanarosa/WeatherNow"}
            />

            <ProjectImage
              src="/images/projects/weathernow.png"
              alt="WeatherNow Project"
            />

            <ul className="flex gap-2 bg-slate-500 justify-center items-center py-1">

              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />

            </ul>
          </li>


        </ul>
      </div>

      <div className="bg-zinc-900 flex flex-col gap-2 px-8 py-4">

        <SectionTitle title={"Contacts"} />

        <p className="text-white text-sm font-OpenSans cursor-pointer">
          lucas.gabriel.lr2112@gmail.com
        </p>

        <ul className="flex gap-2">

          <li className="text-white font-OpenSans cursor-pointer text-lg">
            <a href="https://www.linkedin.com/in/lucas-rosa-452b59237/" target="_blank"><IoLogoLinkedin /></a>
          </li>

          <li className="text-white font-OpenSans cursor-pointer text-lg">
            <a href="https://github.com/lucasgabriellanarosa" target="_blank"><FaGithub /></a>
          </li>

          <li className="text-white font-OpenSans cursor-pointer text-lg">
            <a href="https://www.instagram.com/lucasgabriellanarosa/" target="_blank"><RiInstagramFill /></a>
          </li>

        </ul>

      </div>

    </>
  );
}
