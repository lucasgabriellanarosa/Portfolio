import { useEffect, useState } from 'react'
import './App.css'
import app from "./firebase"
import { getDatabase, ref, onValue } from "firebase/database";
import { IoDocumentTextOutline, IoHomeOutline } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { CiFolderOn, CiMail } from 'react-icons/ci';

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


  console.log(data)
  return (
    <>
      <header>
        <div>
          <img src="./images/billybat.png" />
          <h1>Lucas Gabriel L.R</h1>
        </div>

        <ul>

          <li>
            <IoHomeOutline />
            <a href="#">Home</a>
          </li>

          <li>
            <GoPerson />
            <a href="#">About</a>
          </li>

          <li>
            <IoDocumentTextOutline />
            <a href="#">Experience</a>
          </li>

          <li>
            <CiFolderOn />
            <a href="#">Projects</a>
          </li>

          <li>
            <CiMail />
            <a href="#">Contacts</a>
          </li>

        </ul>

        <span>Copyright © 2025</span>

      </header>
      <main>

        <section>
          <h2>Lucas Gabriel L.R</h2>
          <h3>I am a web developer</h3>
          <img src="./images/punpun.png" />
        </section>

        <section>
          <h2>About Me</h2>
          <p>{data.about_text}</p>

          <button>Resume</button>
        </section>

        <section>
          <h2>Experience</h2>

          <div>
            <h3>Professional</h3>

            <ul>
              {data.experience > [] ?
                data.experience.map((experience, key) => (
                  <li key={key}>
                    <div>
                      <img src={experience.img} />
                      <div>
                        <p>{experience.title} At {experience.company}</p>
                        <p>{experience.start_date} - {experience.end_date}</p>
                        <p>{experience.technologies}</p>
                      </div>
                    </div>
                    <div>
                      <h4>Responsabilities</h4>
                      <ul>
                        {experience.responsabilities.map((responsability, key) => (
                          <li key={key}>{responsability}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))

                :
                <></>
              }
            </ul>

          </div>

          <div>
            <h3>Education</h3>
            <div>
              <ul>
                {data.education > [] ?
                  data.education.map((education, key) => (
                    <li key={key}>
                      <div>
                        <img src={education.img} />
                        <div>
                          <p>{education.field} At {education.school}</p>
                          <p>{education.start_date} - {education.end_date}</p>
                        </div>
                      </div>
                    </li>
                  ))

                  :
                  <></>
                }
              </ul>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
