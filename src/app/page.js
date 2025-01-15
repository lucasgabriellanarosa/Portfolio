import ResumeBtn from "./components/ResumeBtn";
import SectionTitle from "./components/SectionTitle";

export default function Home() {
  return (
    <>
      <header className="bg-zinc-900 fixed w-full flex justify-end items-center px-4 py-2 gap-3">
        <a href="#about_section" className="text-red-900 font-Agbalumo text-lg">About</a>
        <a href="#experience_section" className="text-red-900 font-Agbalumo text-lg">Experience</a>
        <a href="#projects_section" className="text-red-900 font-Agbalumo text-lg">Projects</a>
        <ResumeBtn />
      </header>

      <div>

        <h1 className="text-red-900 font-FasterOne">Lucas Gabriel <br /> Web Developer</h1>

        <ul>
          <li>
            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          </li>
          <li>
            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          </li>
          <li>
            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          </li>
        </ul>

      </div>

      <div id="about_section">

        <SectionTitle title="About Me" />

        <section>
          <p className="font-OpenSans">I'm a web developer looking for my first job oportunity. Both front-end and back-end are fields I'm familiar with. I've been studying web development since 2021 and I've completed some courses during this time. It all started with a Javascript brazilian course from Gustavo Guanabara with his project called Curso em Vídeo, one of the most famous Youtube channels in Brazil. Click here to see his channel. After that, I started both The Odin Project and Harvard's CS50's Web Programming with Python and Javascript. CS50W was my main study and the base of all that I know. There I really learned every technology I'm using today: CSS, Javascript and Django. But, above all that, they really taught me how to code. How to solve a problem searching for a solution by my own, getting erros and trying to fix it. Currently I'm on the "Java and Spring Boot" bootcamp from the DIO (Digital Innovation One). My main technology is React, that I learned on Youtube without courses or bootcamps.</p>

          <ResumeBtn />
          </section>

      </div>

      <div id="experience_section">

        <SectionTitle title="Experience" />

        <ul>
          <li>

            <div>
              <img src="#" />
              <h3 className="text-red-900 font-Agbalumo">Front End Developer <span className="text-emerald-600">At Club Delivery </span> </h3>
              <h4 className="text-red-900 font-Agbalumo">Dezember 2024 - Currently</h4>
            </div>

            <div>
              <p className="font-OpenSans">I'm a web developer looking for my first job oportunity. Both front-end and back-end are fields I'm familiar with. I've been studying web development since 2021 and I've completed some courses during this time. It all started with a Javascript brazilian course from Gustavo Guanabara with his project called Curso em Vídeo, one of the most famous Youtube channels in Brazil. Click here to see his channel. After that, I started both The Odin Project and Harvard's CS50's Web Programming with Python and Javascript. CS50W was my main study and the base of all that I know.
              </p>
              <ul>
                <li>
                  <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </li>
                <li>
                  <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </li>
                <li>
                  <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                </li>
              </ul>
            </div>

          </li>
        </ul>
      </div>

      <div id="projects_section">
        <SectionTitle title="Projects" />

        <ul>

          <li>
            <div>
              <h3 className="text-red-900 font-Agbalumo">Anime DB</h3>
              <button>Live Project</button>
              <button>Repository</button>
            </div>

            <img src="#" />

            <ul>

              <li>
                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              </li>
              <li>
                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              </li>
              <li>
                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </li>

            </ul>
          </li>

          <li>
            <div>
              <h3 className="text-red-900 font-Agbalumo">Anime DB</h3>
              <button>Live Project</button>
              <button>Repository</button>
            </div>

            <img src="#" />

            <ul>
              
              <li>
                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              </li>
              <li>
                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              </li>
              <li>
                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </li>

            </ul>
          </li>

        </ul>
      </div>

      <div >

        <SectionTitle title={"Contacts"} />

        <ul>

          <li className="text-white font-Agbalumo">
            @lucasgabriellanarosa
          </li>

          <li className="text-white font-Agbalumo">
            @lucasgabriellanarosa
          </li>

          <li className="text-white font-Agbalumo">
            @lucasgabriellanarosa
          </li>

          <li className="text-white font-Agbalumo">
            @lucasgabriellanarosa
          </li>

        </ul>

      </div>

    </>
  );
}
