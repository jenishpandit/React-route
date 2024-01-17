import { useSearchParams } from "react-router-dom";

function Filter() {
     
    const[searchParams,setSearchParams]= useSearchParams();
    const age =searchParams.get('age');
    const city =searchParams.get('city');
   

    return (
      <div >
        <h1>Search Params</h1>
         
         <h2>search Age is:{age}</h2>
         <h2>search Age is:{city}</h2>
        
      </div>
    );
  }
  
  export default Filter;