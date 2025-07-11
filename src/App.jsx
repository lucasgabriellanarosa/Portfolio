import { useEffect, useState } from 'react'
import './App.css'
import app from "./firebase"
import { getDatabase, ref, onValue } from "firebase/database";
import { MdOutlineEmail } from 'react-icons/md';
import { SlSocialInstagram } from 'react-icons/sl';
import { IoCallOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    fetchData()
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: delay,
      }
    }
  });

  return (
    <div
    >

      <header
        className={`hidden fixed z-50 px-6 py-2 shadow-md transition-all duration-500 md:flex flex-row justify-between items-center ${isScrolled
          ? "w-full left-0 translate-x-0 rounded-none bg-teal-950 top-0"
          : "w-4/5 left-1/2 -translate-x-1/2 rounded-lg bg-teal-950/80 top-5"
          }`}
      >
        <img src="/images/logo.png" className='h-20' />

        <nav className="flex gap-4 justify-center text-lg text-blue-100">
          <a href="#" className="hover:text-teal-300">
            About
          </a>
          <a href="#" className="hover:text-teal-300">
            Skills
          </a>
          <a href="#" className="hover:text-teal-300">
            Projects
          </a>
          <a href="#" className="hover:text-teal-300">
            Contact
          </a>
          <a href="#" className="hover:text-teal-300">
            Resume
          </a>
        </nav>
      </header>

      <section
        className='relative bg-linear-to-b from-cyan-600 to-teal-950 min-h-svh flex flex-col justify-center items-center'

      >

        <motion.img src="/images/logo.png" className='w-2/4 md:max-w-[250px] lg:mb-24'
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        />

        <svg
          className='absolute bottom-0'
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e0f2fe" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,186.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </section>

      <section
        className='bg-sky-100 p-4 flex flex-col md:px-8 lg:items-center'
      >

        <motion.div
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col gap-4 lg:max-w-[1000px] lg:gap-6'>

          <h2
            className='font-graduate text-lg font-bold md:text-xl lg:text-2xl'
          >About</h2>

          <p
            className='text-sm md:text-base'
          >{data.about_text}</p>

          <div className="relative inline-block self-end">
            <span className="absolute inset-0 translate-x-1 translate-y-1 bg-teal-800 rounded-md z-0 transition-transform duration-300 ease-in-out md:translate-2"></span>
            <a
              href="./Lucas Gabriel de Lana Rosa - Desenvolvedor Front End.docx" download="Lucas Gabriel de Lana Rosa - Desenvolvedor Front End.docx"
              className="relative inline-flex items-center justify-center px-6 py-2 bg-sky-100 text-teal-900 border border-teal-900 rounded-md z-10 hover:translate-x-0 hover:translate-y-0 transition-transform duration-300 ease-in-out md:text-lg hover:bg-teal-600 hover:text-sky-100"
            >
              Get my resume
            </a>
          </div>

        </motion.div>

      </section>

      <section
        className='bg-linear-to-b from-cyan-600 to-teal-900'>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e0f2fe" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,186.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

        <div className='px-4 py-8 text-white md:px-8 lg:py-16 lg:flex lg:justify-center'>

          <motion.div className='flex flex-col gap-4 lg:gap-6 lg:w-[1000px]'

            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}>

            <h2
              className='font-graduate text-lg font-bold md:text-xl lg:text-2xl'
            >Skills</h2>

            <div
              className='flex flex-col gap-2 lg:gap-4'
            >
              <h3
                className='font-graduate text-base md:text-lg'
              >Frontend</h3>

              <ul
                className='flex flex-wrap gap-2 lg:gap-4'
              >
                {
                  data.skills &&
                  data.skills.frontend.map((skill, key) => (
                    <li
                      key={key}
                      className='bg-blue-50 text-black font-bold uppercase font-graduate text-xs px-2 py-1 rounded-sm md:text-base md:px-3'
                    >
                      {skill.name}
                    </li>
                  ))
                }
              </ul>

            </div>

            <div
              className='flex flex-col gap-2 lg:gap-4'
            >
              <h3
                className='font-graduate text-base md:text-lg'
              >Styling & Design</h3>

              <ul
                className='flex flex-wrap gap-2 lg:gap-4'
              >
                {
                  data.skills &&
                  data.skills.styling.map((skill, key) => (
                    <li
                      key={key}
                      className='bg-blue-50 text-black font-bold uppercase font-graduate text-xs px-2 py-1 rounded-sm md:text-base md:px-3'
                    >
                      {skill.name}
                    </li>
                  ))
                }
              </ul>

            </div>

            <div
              className='flex flex-col gap-2 lg:gap-4'
            >
              <h3
                className='font-graduate text-base md:text-lg'
              >Back End</h3>

              <ul
                className='flex flex-wrap gap-2 lg:gap-4'
              >
                {
                  data.skills &&
                  data.skills.backend.map((skill, key) => (
                    <li
                      key={key}
                      className='bg-blue-50 text-black font-bold uppercase font-graduate text-xs px-2 py-1 rounded-sm md:text-base md:px-3'
                    >
                      {skill.name}
                    </li>
                  ))
                }
              </ul>

            </div>

            <div
              className='flex flex-col gap-2 lg:gap-4'
            >
              <h3
                className='font-graduate text-base md:text-lg'
              >Others</h3>

              <ul
                className='flex flex-wrap gap-2 lg:gap-4'
              >
                {
                  data.skills &&
                  data.skills.others.map((skill, key) => (
                    <li
                      key={key}
                      className='bg-blue-50 text-black font-bold uppercase font-graduate text-xs px-2 py-1 rounded-sm md:text-base md:px-3'
                    >
                      {skill.name}
                    </li>
                  ))
                }
              </ul>

            </div>

          </motion.div>

        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#042f2e" fill-opacity="1" d="M0,192L0,192L110.8,192L110.8,96L221.5,96L221.5,192L332.3,192L332.3,128L443.1,128L443.1,256L553.8,256L553.8,64L664.6,64L664.6,192L775.4,192L775.4,224L886.2,224L886.2,0L996.9,0L996.9,96L1107.7,96L1107.7,192L1218.5,192L1218.5,96L1329.2,96L1329.2,64L1440,64L1440,320L1329.2,320L1329.2,320L1218.5,320L1218.5,320L1107.7,320L1107.7,320L996.9,320L996.9,320L886.2,320L886.2,320L775.4,320L775.4,320L664.6,320L664.6,320L553.8,320L553.8,320L443.1,320L443.1,320L332.3,320L332.3,320L221.5,320L221.5,320L110.8,320L110.8,320L0,320L0,320Z"></path></svg>

      </section>

      <section
        className='bg-linear-to-b from-teal-950 to-cyan-600 p-4 font-graduate flex flex-col gap-8 md:px-8 lg:gap-12'
      >

        <motion.div className='flex flex-col gap-4 lg:self-center lg:max-w-[800px] lg:gap-6'
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >

          <h2 className='font-graduate text-lg font-bold text-white md:text-xl lg:text-2xl'>Experiences</h2>

          <h3 className='font-graduate text-base text-white md:text-lg lg:text-xl'>Professional</h3>

          <ul className='flex flex-col gap-4 lg:gap-8'>
            {
              data.experience &&
              data.experience.slice().reverse().map((experience, key) => (
                <li key={key} className='flex flex-col py-2 px-4 justify-center gap-4 border border-white text-white rounded-xl shadow-md md:px-8 md:py-4 md:max-w-[600px] lg:justify-start lg:max-w-full'>
                  <div className='flex flex-col gap-2 lg:flex-row'>
                    <img className='w-20 h-20 self-center md:w-24 md:h-24' src={experience.img} />
                    <div className='flex flex-col gap-2'>
                      <p className='text-sm md:text-base'>{experience.title} At {experience.company}</p>
                      <p className='text-xs md:text-base'>{experience.start_date} - {experience.end_date}</p>
                      <p className='text-xs'>{experience.technologies}</p>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <h4 className='text-sm md:text-base'>Responsabilities</h4>
                    <ul className='flex flex-col list-disc pl-5 gap-1'>
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
            }
          </ul>

          <h3 className='font-graduate text-base text-white md:text-lg'>Education</h3>

          <ul className='flex flex-col gap-4 lg:gap-8'>
            {
              data.education &&
              data.education.map((education, key) => (
                <li key={key} className='flex flex-col py-2 px-4 justify-center gap-2 border border-white text-white rounded-xl shadow-md md:px-8 md:flex-row md:items-center md:max-w-[600px] md:gap-6 lg:justify-start lg:max-w-full'>
                  <img className='w-20 h-20 self-center md:w-24 md:h-24' src={education.img} />
                  <div className='flex flex-col gap-1'>
                    <p className='text-sm md:text-lg'>{education.field} At {education.school}</p>
                    <p className='text-xs md:text-base'>{education.start_date} - {education.end_date}</p>
                    <p className='text-xs md:text-base'>{education.technologies}</p>
                  </div>
                </li>
              ))
            }
          </ul>

        </motion.div>

        <motion.div className="flex flex-col gap-4 text-white lg:max-w-[800px] lg:self-center"
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >

          <h2 className='font-graduate text-lg font-bold md:text-xl lg:text-2xl'>Projects</h2>

          <ul className='flex flex-col gap-12 md:gap-16'>
            {
              data.projects &&
              data.projects.map((project) => (
                <li className='flex flex-col gap-2 md:gap-4'>
                  <h3 className='text-base md:text-lg'>{project.name}</h3>
                  <p className='text-xs md:text-base'>{project.technologies}</p>
                  <img src={`/images/${project.imgName}.png`} />

                  <div className='flex flex-row justify-between items-center text-sm'>
                    <a href={project.live} target='_blank' className='flex border justify-center items-center rounded-2xl px-4 py-2 md:text-lg md:px-8 hover:cursor-pointer hover:bg-teal-500'>Live Project</a>
                    <a href={project.repository} target='_blank' className='flex border justify-center items-center rounded-2xl px-4 py-2 md:text-lg md:px-8 hover:cursor-pointer hover:bg-teal-500'>Repository</a>
                  </div>

                </li>
              ))
            }
          </ul>

        </motion.div>

        <motion.ul className='flex font-sans flex-col gap-4 text-white items-start md:w-full md:mb-12 md:gap-8 pb-8 lg:self-center lg:max-w-[800px]'
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >

          <h2 className='text-lg font-bold font-graduate md:text-xl lg:text-2xl'>Contacts</h2>

          <li className='flex flex-row gap-2 justify-center items-center md:gap-4'>
            <MdOutlineEmail className='text-3xl md:text-4xl' />
            <div>
              <h3 className='text-base md:text-xl'>Email:</h3>
              <p className='text-sm md:text-lg'>lucas.gabriel.lr2112@gmail.com</p>
            </div>
          </li>

          <li className='flex flex-row gap-2 justify-center items-center md:gap-4'>
            <SlSocialInstagram className='text-3xl md:text-4xl' />
            <div>
              <h3 className='text-base md:text-xl'>Instagram:</h3>
              <p className='text-sm md:text-lg'>@lucasgabriellanarosa</p>
            </div>
          </li>

          <li className='flex flex-row gap-2 justify-center items-center md:gap-4'>
            <IoCallOutline className='text-3xl md:text-4xl' />
            <div>
              <h3 className='text-base md:text-xl'>Call:</h3>
              <p className='text-sm md:text-lg'>+55 33 99821-2351</p>
            </div>
          </li>

        </motion.ul>

      </section>

    </div>
  )
}

export default App
