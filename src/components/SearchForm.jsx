import { useState } from "react";
const SearchForm = ({ oeMeEstoyEnviando }) => {
   const [searchLocation, setSearchLocation] = useState("");
   const [errorSearchLocation, setErrorSearchLocation] = useState (""); 
 
   const handleChange = (e) => {
    const newValue =e.target.value;

    if (newValue && isNaN(Number(newValue))) {
        setErrorSearchLocation("Id must be a number");
      } else if(newValue && Number(newValue) < 1) {
        setErrorSearchLocation("Id must be at least 1")
      }else if (newValue && Number(newValue) >126) {
        setErrorSearchLocation("Id must be less than 126");
      }else{
        setErrorSearchLocation("");
      }
      
        setSearchLocation(e.target.value);
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
      
        if(errorSearchLocation) return;
     
        oeMeEstoyEnviando(searchLocation);
    };
 
   return ( 
    
    <form onSubmit={handleSubmit}>
        <input type ="text"  value={searchLocation} onChange={handleChange} />
      <p style={{ color: "red"}} role="alert">
        {errorSearchLocation}
      </p>
      
      <button type="submit">Search</button></form>
  );
};

export default SearchForm;





