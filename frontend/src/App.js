import React from "react";
import "./App.css";
import Matrix from "./Matrix"

function App() {
  const [combs, setCombs] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setCombs(data));
  }, []);

  const countries = ["australien", "china", "deutschland", "griechenland", "hawaii", "island", "italien", "kanada", "usa"]

  return (
    <div className="App" width="1000px">
      <Matrix countries={countries} combs={combs}/>
    </div>
  );
}

export default App;