import React from "react";
import "./App.css";
import Matrix from "./Matrix"

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App" width="1000px">
      <Matrix/>
    </div>
  );
}

export default App;