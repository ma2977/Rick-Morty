import PropTypes from "prop-types";
import { useState } from "react";
import ResidentCard from "../ResidentCard/ResidentCard";
import { usePagination } from "../../hooks/usePagination";

const ResidentList = ({ residents = [] }) => {
  const [quantityPagination,setQuantityPagination] = useState (5);
  const {currentPage : numberPage, listSlice : residentsSlice, pages, changePageTo} = usePagination(
    residents, quantityPagination);

return (
        <>
       
            <button onClick={() => changePageTo(numberPage -1)}>Back</button>
            {/* {getPageButtons()} */ }
            {pages.map((i) => (
                <button key={i} onClick={() => changePageTo(i)}style={{ color : numberPage ===i ? "red" : undefined }}>
                    {i}
                </button>
            ))}


            <button onClick={() => changePageTo(numberPage +1)}>Next</button>
        
<br></br>
<select name ="quantity_per_pages" value={quantityPagination} onChange={(e) =>
setQuantityPagination(Number(e.target.value))}>
<option>5</option>
<option>10</option>
<option value="15">Fifteen</option>
<option value="20">Twenty</option>

</select>

        { !residentsSlice.length && <p>No hay residentes en esta ubicacion</p> }
        { Boolean (residentsSlice.length) && (
        <ul>
           { residentsSlice.map((residentUrl) => (
            <li key={residentUrl}>
           <ResidentCard url={residentUrl} />
           </li>
          ))}
        </ul>
        )}
     

        </>
    );
};

ResidentList.propTypes = {
 residents: PropTypes.array,
};

export default ResidentList;