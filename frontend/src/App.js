import React from "react";
import "./App.css";
import Matrix from "./Matrix"
import Form from "./Form"

function App() {
  const [combs, setCombs] = React.useState(null);
  const [countries, SetCountries] = React.useState(null)

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
      .then((data) => {
        setCombs(data.message)
        SetCountries(data.message.map(el => el.country))
      }
      );
  }, []);


  console.log(combs)

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
      <Form countries={countries} handleChange={handleChange} countrySelection={countrySelection}/>
      <Matrix countrySelection={countrySelection} combs={combs}/>
    </div>
  );
}

export default App;