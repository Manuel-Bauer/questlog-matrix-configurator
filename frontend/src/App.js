import React from "react";
import "./App.css";
import Matrix from "./Matrix"
import Form from "./Form"

function App() {
  const [combs, setCombs] = React.useState(null);
  const [countrySelection, setCountrySelection] = React.useState({
    country1: "australien",
    country2: "china",
    country3: "deutschland",
    country4: "griechenland",
    country5: "hawaii",
    country6: "island",
    country7: "italien",
    country8: "kanada",
    country9: "usa",
  })

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setCombs(data.message));
  }, []);

  function handleChange(event) {
    const {name, value} = event.target
    setCountrySelection(prevData => {
        return {
            ...prevData,
            [name]: value
        }
    })
}




  return (
    <div className="App" width="1000px">
      <input type="text" value={countrySelection.country1} placeholder="Country" name="country1" onChange={handleChange}/>
      <input type="text" value={countrySelection.country2} placeholder="Country" name="country2" onChange={handleChange}/>
      <input type="text" value={countrySelection.country3} placeholder="Country" name="country3" onChange={handleChange}/>
      <input type="text" value={countrySelection.country4} placeholder="Country" name="country4" onChange={handleChange}/>
      <input type="text" value={countrySelection.country5} placeholder="Country" name="country5" onChange={handleChange}/>
      <input type="text" value={countrySelection.country6} placeholder="Country" name="country6" onChange={handleChange}/>
      <input type="text" value={countrySelection.country7} placeholder="Country" name="country7" onChange={handleChange}/>
      <input type="text" value={countrySelection.country8} placeholder="Country" name="country8" onChange={handleChange}/>
      <input type="text" value={countrySelection.country9} placeholder="Country" name="country9" onChange={handleChange}/>
      <Matrix countrySelection={countrySelection} combs={combs}/>
    </div>
  );
}

export default App;