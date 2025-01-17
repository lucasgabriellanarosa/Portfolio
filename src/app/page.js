import Image from "next/image";
import ResumeBtn from "./components/ResumeBtn";
import SectionTitle from "./components/SectionTitle";
import SkillContainer from "./components/SkillContainer";
import ProjectHeader from "./components/ProjectHeader";
import ProjectImage from "./components/ProjectImage";

export default function Home() {
  return (
    <>
      <header className="bg-zinc-900 fixed w-full flex justify-end items-center px-4 py-2 gap-3">
        <a href="#about_section" className="text-red-900 font-Agbalumo text-lg">About</a>
        <a href="#experience_section" className="text-red-900 font-Agbalumo text-lg">Experience</a>
        <a href="#projects_section" className="text-red-900 font-Agbalumo text-lg">Projects</a>
        <ResumeBtn />
      </header>

      <div className="pt-72 pb-10 flex flex-col justify-center items-center gap-40">

        <h1 className="text-red-900 font-FasterOne text-4xl">Lucas Gabriel <br /> Web Developer</h1>

        <ul className="grid grid-cols-5 px-8 py-4 gap-2 justify-center items-center bg-emerald-600 w-full">
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
        </ul>

      </div>
      
      <div id="about_section" className="page_section">

        <SectionTitle title="About Me" />

        <section className="bg-emerald-600 flex flex-col gap-4 py-2 px-4">
          <p className="font-OpenSans text-xs">I'm a web developer looking for my first job oportunity. Both front-end and back-end are fields I'm familiar with. I've been studying web development since 2021 and I've completed some courses during this time. It all started with a Javascript brazilian course from Gustavo Guanabara with his project called Curso em Vídeo, one of the most famous Youtube channels in Brazil. Click here to see his channel. After that, I started both The Odin Project and Harvard's CS50's Web Programming with Python and Javascript. CS50W was my main study and the base of all that I know. There I really learned every technology I'm using today: CSS, Javascript and Django. But, above all that, they really taught me how to code. How to solve a problem searching for a solution by my own, getting erros and trying to fix it. Currently I'm on the "Java and Spring Boot" bootcamp from the DIO (Digital Innovation One). My main technology is React, that I learned on Youtube without courses or bootcamps.</p>

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
              <div>
                <h3 className="text-red-800 font-Agbalumo text-base">Front End Developer <span className="text-emerald-600">At Club Delivery </span> </h3>
                <h4 className="text-red-700 font-Agbalumo text-sm">Dezember 2024 - Currently</h4>
              </div>
            </div>

            <div className="bg-emerald-600 flex flex-col items-center justify-center px-4 py-2 gap-3">
              <p className="font-OpenSans text-xs">I'm a web developer looking for my first job oportunity. Both front-end and back-end are fields I'm familiar with. I've been studying web development since 2021 and I've completed some courses during this time. It all started with a Javascript brazilian course from Gustavo Guanabara with his project called Curso em Vídeo, one of the most famous Youtube channels in Brazil. Click here to see his channel. After that, I started both The Odin Project and Harvard's CS50's Web Programming with Python and Javascript. CS50W was my main study and the base of all that I know.
              </p>
              <ul className="flex gap-2">
                <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
              </ul>
            </div>

          </li>
        </ul>
      </div>

      <div id="projects_section" className="page_section">
        <SectionTitle title="Projects" />

        <ul>

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

            <ul className="flex gap-2">

              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
              <SkillContainer url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"/>

            </ul>
          </li>

        </ul>
      </div>

      <div className="bg-zinc-900 flex flex-col gap-2 px-8 py-4">

        <SectionTitle title={"Contacts"} />

        <p className="text-white font-Agbalumo cursor-pointer">
            lucas.gabriel.lr2112@gmail.com
        </p>

        <ul className="flex justify-between">

          <li className="text-white font-Agbalumo cursor-pointer">
            <a href="https://www.linkedin.com/in/lucas-rosa-452b59237/" target="_blank">LinkedIn</a>
          </li>

          <li className="text-white font-Agbalumo cursor-pointer">
            <a href="https://github.com/lucasgabriellanarosa" target="_blank">Github</a>
          </li>

          <li className="text-white font-Agbalumo cursor-pointer">
            <a href="https://www.instagram.com/lucasgabriellanarosa/" target="_blank">Instagram</a>
          </li>

        </ul>

      </div>

    </>
  );
}
