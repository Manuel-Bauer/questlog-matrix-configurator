import React from "react"

// We pass form the countries we have saved in pictures

function Form(props) {

  function createSelections(countries){
    if(countries) {
      return countries.map(country => {
        return <option value={country}>{country}</option>
   })
    }
    
  }

  return (
     <form className="form">
       <select className="select select--1" id="country1" value={props.countrySelection.country1} onChange={props.handleChange} name="country1">
       <option value="">-- Country 1 --</option>
       {createSelections(props.countries)}
       </select>
       
       <select className="select select--2" id="country2" value={props.countrySelection.country2} onChange={props.handleChange} name="country2">
       <option value="">-- Country 2 --</option>
       {createSelections(props.countries)}
       </select>
       
       <select className="select select--3" id="country3" value={props.countrySelection.country3} onChange={props.handleChange} name="country3">
       <option value="">-- Country 3 --</option>
       {createSelections(props.countries)}
       </select>
       
       <select className="select select--4" id="country4" value={props.countrySelection.country4} onChange={props.handleChange} name="country4">
       <option value="">-- Country 4 --</option>
       {createSelections(props.countries)}
       </select>
       
       <select className="select select--5" id="country5" value={props.countrySelection.country5} onChange={props.handleChange} name="country5">
       <option value="">-- Country 5 --</option>
       {createSelections(props.countries)}
       </select>
      
       <select className="select select--6" id="country6" value={props.countrySelection.country6} onChange={props.handleChange} name="country6">
       <option value="">-- Country 6 --</option>
       {createSelections(props.countries)}
       </select>
       
       <select className="select select--7" id="country7" value={props.countrySelection.country7} onChange={props.handleChange} name="country7">
       <option value="">-- Country 7 --</option>
       {createSelections(props.countries)}
       </select>
       
       <select className="select select--8" id="country8" value={props.countrySelection.country8} onChange={props.handleChange} name="country8">
       <option value="">-- Country 8 --</option>
       {createSelections(props.countries)}
       </select>
       
       <select className="select select--9" id="country9" value={props.countrySelection.country9} onChange={props.handleChange} name="country9">
       <option value="">-- Country 9 --</option>
       {createSelections(props.countries)}
       </select>
     </form>
  )
}


export default Form