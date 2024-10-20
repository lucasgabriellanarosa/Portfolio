import Image from "next/image";
import styles from "./page.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";


export default function Home() {
  return (
    <div className={styles.main_container}>

      <div className={styles.main_section}>
        <h1>Lucas Gabriel <br />Web Developer</h1>
      </div>

      <div className={styles.about_section} id="about">
        <h2>About Me</h2>
        <p>I'm a web developer looking for my first job oportunity. Both front-end and back-end are fields I'm familiar with. I've been studying web development since 2021 and I've completed some courses during this time. It all started with a Javascript brazilian course from Gustavo Guanabara with his project called Curso em Vídeo, one of the most famous Youtube channels in Brazil. Click here to see his channel. After that, I started both The Odin Project and Harvard's CS50's Web Programming with Python and Javascript. CS50W was my main study and the base of all that I know. There I really learned every technology I'm using today: CSS, Javascript and Django. But, above all that, they really taught me how to code. How to solve a problem searching for a solution by my own, getting erros and trying to fix it. Currently I'm on the "Java and Spring Boot" bootcamp from the DIO (Digital Innovation One). My main technology is React, that I learned on Youtube without courses or bootcamps.</p>
        <a href="/Lucas Gabriel de Lana Rosa.pdf" download="Lucas Gabriel de Lana Rosa - Front End.pdf" className={styles.download_button}><FiDownload /> Resume</a>
      </div>

      <div className={styles.skills_section} id="skills">
        <h2>Skills</h2>
        <ul className={styles.skills_container}>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
          </li>

          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          </li>

        </ul>
      </div>

      <div className={styles.projects_section} id="projects">
        <h2>Projects</h2>

        <ul className={styles.projects_list}>

          <li className={styles.project_container}>

            <header>
              <h3>Manga Reader</h3>
              <div className={styles.project_buttons}>
                <a href="https://lucasgabriellanarosa.github.io/MangaPneu/" target="_blank">Live Project</a>
                <a href="https://github.com/lucasgabriellanarosa/MangaPneu" target="_blank">Repository</a>
              </div>
            </header>

            <div className={styles.project_details}>
              <Image
                src="/images/projects/mangaReader.png"
                width={300}
                height={180}
                layout="responsive"
                alt="Background"
                className={styles.project_img}
              />

              <ul className={styles.project_skillsContainer}>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                </li>
              </ul>
            </div>

          </li>

          <li className={styles.project_container}>

            <header>
              <h3>Anime DataBase</h3>
              <div className={styles.project_buttons}>
                <a href="https://www.youtube.com/watch?v=1SHbxfKcEhM" target="_blank">Live Project</a>
                <a href="https://github.com/lucasgabriellanarosa/CS50W-FinalProject" target="_blank">Repository</a>
              </div>
            </header>

            <div className={styles.project_details}>
              <Image
                src="/images/projects/animeDB.png"
                width={300}
                height={180}
                layout="responsive"
                alt="Background"
                className={styles.project_img}
              />

              <ul className={styles.project_skillsContainer}>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                </li>
              </ul>
            </div>

          </li>

          <li className={styles.project_container}>

            <header>
              <h3>Network</h3>
              <div className={styles.project_buttons}>
                <a href="https://www.youtube.com/watch?v=DyQXtx3TLVk&t" target="_blank">Live Project</a>
                <a href="https://github.com/lucasgabriellanarosa/CS50W-Project4" target="_blank">Repository</a>
              </div>
            </header>

            <div className={styles.project_details}>
              <Image
                src="/images/projects/network.png"
                width={300}
                height={180}
                layout="responsive"
                alt="Background"
                className={styles.project_img}
              />

              <ul className={styles.project_skillsContainer}>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                </li>
              </ul>
            </div>

          </li>

          <li className={styles.project_container}>

            <header>
              <h3>Ecommerce</h3>
              <div className={styles.project_buttons}>
                <a href="https://www.youtube.com/watch?v=k23tNIKMBNY" target="_blank">Live Project</a>
                <a href="https://github.com/lucasgabriellanarosa/CS50W-Project2" target="_blank">Repository</a>
              </div>
            </header>

            <div className={styles.project_details}>
              <Image
                src="/images/projects/ecommerce.png"
                width={300}
                height={180}
                layout="responsive"
                alt="Background"
                className={styles.project_img}
              />

              <ul className={styles.project_skillsContainer}>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                </li>
                <li>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                </li>
              </ul>
            </div>

          </li>

        </ul>
      </div>

      <div className={styles.contacts_section} id="contacts">
        <ul>

          <li>
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/lucas-rosa-452b59237/" target="_blank">/lucasgabriellanarosa</a>
          </li>

          <li>
            <FaGithub />
            <a href="https://github.com/lucasgabriellanarosa" target="_blank">/lucasgabriellanarosa</a>
          </li>

          <li>
            <FaInstagramSquare />
            <a href="https://www.instagram.com/" target="_blank">/lucasgabriellanarosa</a>
          </li>

        </ul>
      </div>

    </div>
  );
}
