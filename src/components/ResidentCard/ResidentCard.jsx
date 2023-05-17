import PropTypes  from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { getCharacterByUrl } from "../../services/getCharacterbyUrl";

const ResidentCard = ({ url }) => {
    const [resident, setResident] = useState (null)
   useEffect(( ) => {
    const loadResident = async () => {
        const residentData = await getCharacterByUrl (url);
     setResident(residentData);
    };
    loadResident();
   }, [url]);
   
    return (
        <>
{ !resident ? (
<p>Loading Character</p>
) : (
<article>
<div className="residentCard">
   <div>
       <img src={resident.image} alt={resident.name} />
   </div>
   <h2>{resident.name}</h2>
    <ul>
   <li>
       <b>Specie: </b>
       {resident.species}
   </li>
   <li>
       <b>Origin: </b>
       {resident.origin.name}
   </li>
   <li>
       <b>Status: </b>
       {resident.status}
   </li>
   <li>
       <b>Appearances: </b>
       {resident.episode.length}
   </li>
    </ul>
       </div>
       </article>
)}
        </>

    );
};

ResidentCard.propTypes = {
    url: PropTypes.string.isRequired
}
 export default ResidentCard