export default function Home() {
  return (
    <>
      <header className="bg-zinc-900">
        <a href="#" className="text-red-900">About</a>
        <a href="#" className="text-red-900">Experience</a>
        <a href="#" className="text-red-900">Projects</a>
        <button>Resume</button>
      </header>

      <div>

        <h1 className="text-red-900">Lucas Gabriel <br /> Web Developer</h1>

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

      <div>

        <h2 className="text-red-900">About Me</h2>
        <section>
          <p>I'm a web developer looking for my first job oportunity. Both front-end and back-end are fields I'm familiar with. I've been studying web development since 2021 and I've completed some courses during this time. It all started with a Javascript brazilian course from Gustavo Guanabara with his project called Curso em Vídeo, one of the most famous Youtube channels in Brazil. Click here to see his channel. After that, I started both The Odin Project and Harvard's CS50's Web Programming with Python and Javascript. CS50W was my main study and the base of all that I know. There I really learned every technology I'm using today: CSS, Javascript and Django. But, above all that, they really taught me how to code. How to solve a problem searching for a solution by my own, getting erros and trying to fix it. Currently I'm on the "Java and Spring Boot" bootcamp from the DIO (Digital Innovation One). My main technology is React, that I learned on Youtube without courses or bootcamps.</p>

          <button>Resume</button>
        </section>

      </div>

      <div>
        <h2 className="text-red-900">Experience</h2>

        <ul>
          <li>

            <div>
              <img src="#" />
              <h3 className="text-red-900">Front End Developer <span className="text-emerald-600">At Club Delivery </span> </h3>
              <h4 className="text-red-900">Dezember 2024 - Currently</h4>
            </div>

            <div>
              <p>I'm a web developer looking for my first job oportunity. Both front-end and back-end are fields I'm familiar with. I've been studying web development since 2021 and I've completed some courses during this time. It all started with a Javascript brazilian course from Gustavo Guanabara with his project called Curso em Vídeo, one of the most famous Youtube channels in Brazil. Click here to see his channel. After that, I started both The Odin Project and Harvard's CS50's Web Programming with Python and Javascript. CS50W was my main study and the base of all that I know.
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

      <div>
        <h2 className="text-red-900">Projects</h2>

        <ul>

          <li>
            <div>
              <h3 className="text-red-900">Anime DB</h3>
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
              <h3 className="text-red-900">Anime DB</h3>
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
        <h2 className="text-red-900">Contacts</h2>

        <ul>

          <li className="text-white">
            @lucasgabriellanarosa
          </li>

          <li className="text-white">
            @lucasgabriellanarosa
          </li>

          <li className="text-white">
            @lucasgabriellanarosa
          </li>

          <li className="text-white">
            @lucasgabriellanarosa
          </li>

        </ul>

      </div>

    </>
  );
}
