import { useEffect, useState } from 'react'
import './App.css'
import app from "./firebase"
import { getDatabase, ref, onValue } from "firebase/database";

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
    <h1>Hello, world!</h1>
  )
}

export default App
