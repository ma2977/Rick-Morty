import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Loader from "./components/loader/loader";
import Location from "./components/location"
import { getLocationById } from "./services/getLocationById";
import { getRandomNumber } from "./utils/getRandomNumber";
import ResidentList from "./components/ResidentList/ResidentList";
import SearchForm from "./components/searchForm/searchForm";


function App() {
const [location, setLocation] = useState(null);

const handleOeMeEstoyEnviando = async(dataId) => {
let locationInfo;

if(!dataId) {
  const randomId = getRandomNumber(1,126);
  locationInfo = await getLocationById(randomId);
} else {
  locationInfo = await getLocationById(dataId);
}

setLocation(locationInfo);

};

useEffect(() => {
  const loadLocation = async() => {
    const randomId = getRandomNumber(1,126)
    const locationInfo = await getLocationById(randomId);
    setLocation(locationInfo);
    };

  loadLocation(); 
  }, []);
  
  return (
    <>
      <center>
      <h1>Rick and Morty</h1>
      <br></br>
      <h3>Look for a dimension</h3>
      
      <SearchForm oeMeEstoyEnviando= {handleOeMeEstoyEnviando} />
      
      {location ? <Location location={location} /> : <Loader />}
    
   <h2>Residents</h2>
  <br></br>
    { location ? (
    <ResidentList residents = {location.residents} /> 
    ) : (
    
      <p>Loading residents...</p>
    
    )}
    </center>
    </>
  ); 
}

export default App
