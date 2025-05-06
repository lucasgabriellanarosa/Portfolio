import { useEffect, useState } from 'react'
import './App.css'
import app from "./firebase"
import { getDatabase, ref, onValue } from "firebase/database";
import { Section } from './components/Section';
import { NavItem } from './components/NavItem';
import { SectionTitle } from './components/SectionTitle';
import { FiDownload } from "react-icons/fi";
import { MdOutlineEmail } from 'react-icons/md';
import { SlSocialInstagram } from 'react-icons/sl';
import { IoCallOutline } from 'react-icons/io5';

function App() {

  const [data, setData] = useState([]);

  const database = getDatabase(app);

  const collectionRef = ref(database, "portfolio");

  const fetchData = () => {
    onValue(collectionRef, (snapshot) => {
      if (snapshot.exists()) {
        const dataItem = snapshot.val();
        setData(dataItem);  // Directly set the string value
      } else {
        console.log("No data available");
        setData("No data found");
      }
    }, (error) => {
      console.error("Error fetching data: ", error);
    });
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='flex flex-row h-screen font-oldenburg pb-8'>

      <header className='hidden lg:flex md:flex-col items-center justify-between h-screen bg-gray-100 py-4 min-w-fit px-8 text-textGray'>

        <div className='flex flex-col items-center gap-2'>
          <img src="./images/billybat.png" className='w-36' />
          <h1 className='text-2xl'>Lucas Gabriel L.R</h1>
        </div>

        <ul className='flex flex-col gap-4'>

          <NavItem section={"Home"} />
          <NavItem section={"About"} />
          <NavItem section={"Experience"} />
          <NavItem section={"Projects"} />
          <NavItem section={"Contacts"} />

        </ul>

        <span className='text-xl'>Copyright © 2025</span>

      </header>

      <main className='flex flex-col items-center overflow-y-auto'>

        <Section>
          <h2 className='text-2xl md:text-5xl'>Lucas Gabriel L.R</h2>
          <h3 className='text-xl md:text-3xl'>I am a web developer</h3>
          <img className='w-4/5 max-w-[400px]' src="./images/punpun.png" />
        </Section>

        <Section>
          <SectionTitle title={"About Me"} />
          <p className='text-xs md:text-sm'>{data.about_text}</p>
          <div className="w-full flex justify-end">
            <a href="./Lucas Gabriel de Lana Rosa - Front End Developer.docx" download="Lucas Gabriel de Lana Rosa - Front End Developer.docx" className="w-40 border border-gray-400 rounded-md flex flex-row items-center justify-center gap-2 py-1 hover:cursor-pointer hover:text-white hover:bg-gray-400 md:text-xl md:py-2">
              <FiDownload />
              Resume
            </a>
          </div>
        </Section>

        <Section>
          <SectionTitle title={"Experience"} />

          <div className='w-full flex flex-col gap-4'>
            <h3 className='text-xl md:text-2xl'>Professional</h3>

            <ul className="flex flex-col gap-8 w-fit md:w-full lg:grid lg:grid-cols-2">
              {data.experience > [] ?
                data.experience.map((experience, key) => (
                  <li key={key} className='flex flex-col p-6 justify-center gap-6 border border-gray-500 rounded-xl shadow-md md:px-12 lg:justify-start'>
                    <div className='flex flex-col gap-4 lg:flex-row'>
                      <img className='w-20 h-20 self-center md:w-32 md:h-32' src={experience.img} />
                      <div className='flex flex-col gap-2'>
                        <p className='text-sm md:text-lg'>{experience.title} At {experience.company}</p>
                        <p className='text-xs md:text-base'>{experience.start_date} - {experience.end_date}</p>
                        <p className='text-xs md:text-base'>{experience.technologies}</p>
                      </div>
                    </div>

                    <div className='flex flex-col'>
                      <h4 className='text-sm md:text-lg'>Responsabilities</h4>
                      <ul className='flex flex-col list-disc pl-5'>
                        {experience.responsabilities > [] ?
                          experience.responsabilities.map((responsability, key) => (
                            <li className='text-xs md:text-base' key={key}>{responsability}</li>
                          ))
                          :
                          <></>
                        }
                      </ul>
                    </div>
                  </li>
                ))

                :

                <></>
              }
            </ul>

          </div>

          <div className='w-full flex flex-col gap-4'>
            <h3 className='text-xl'>Education</h3>
            <ul className='flex flex-col gap-4 w-full '>
              
              {data.education > [] ?
                data.education.map((education, key) => (
                  <li key={key} className='flex flex-col p-4 justify-center items-center gap-4 border border-gray-500 rounded-xl shadow-md md:flex-row lg:max-w-[750px]'>
                    <img className='w-20 h-20 md:w-28 md:h-28' src={education.img} />
                    <div>
                      <p className='text-sm md:text-lg'>{education.field} At {education.school}</p>
                      <p className='text-xs md:text-base'>{education.start_date} - {education.end_date}</p>
                    </div>
                  </li>
                ))

                :
                <></>
              }
            </ul>
          </div>

        </Section>

        <Section>
          <SectionTitle title={"Projects"} />

          <ul className='flex flex-col gap-12 md:gap-16'>
            {
              data.projects &&
              data.projects.map((project) => (
                <li className='flex flex-col gap-4 md:gap-6'>
                  <h3 className='text-base md:text-2xl'>{project.name}</h3>
                  <p className='text-xs md:text-base'>{project.technologies}</p>
                  <img src={`/images/${project.imgName}.png`} />

                  <div className='flex flex-row justify-between items-center text-sm'>
                    <a href={project.live} target='_blank' className='flex border justify-center items-center rounded-2xl px-4 py-2 md:text-lg md:px-8 hover:cursor-pointer hover:text-white hover:bg-gray-400'>Live Project</a>
                    <a href={project.repository} target='_blank' className='flex border justify-center items-center rounded-2xl px-4 py-2 md:text-lg md:px-8 hover:cursor-pointer hover:text-white hover:bg-gray-400'>Repository</a>
                  </div>

                </li>
              ))
            }
          </ul>

        </Section>

        <Section>
          <SectionTitle title={"Contacts"} />
          <ul className='flex flex-col gap-6 items-start md:w-full md:mb-12 md:gap-8'>

            <li className='flex flex-row gap-2 justify-center items-center md:gap-4'>
              <MdOutlineEmail className='text-2xl md:text-5xl' />
              <div>
                <h3 className='text-base md:text-xl'>Email:</h3>
                <p className='text-sm md:text-lg'>lucas.gabriel.lr2112@gmail.com</p>
              </div>
            </li>

            <li className='flex flex-row gap-2 justify-center items-center md:gap-4'>
              <SlSocialInstagram className='text-2xl md:text-5xl' />
              <div>
                <h3 className='text-base md:text-xl'>Instagram:</h3>
                <p className='text-sm md:text-lg'>@lucasgabriellanarosa</p>
              </div>
            </li>

            <li className='flex flex-row gap-2 justify-center items-center md:gap-4'>
              <IoCallOutline className='text-2xl md:text-5xl' />
              <div>
                <h3 className='text-base md:text-xl'>Call:</h3>
                <p className='text-sm md:text-lg'>+55 33 99821-2351</p>
              </div>
            </li>
          </ul>
        </Section>

      </main>

    </div>
  )
}

export default App
