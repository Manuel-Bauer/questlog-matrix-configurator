import React from 'react';
import './App.css';
import Matrix from './Matrix';
import Form from './Form';
import Axios from 'axios';
import logoBlack from './logo--black.jpg';
import logoYellow from './logo--yellow.jpg';

function App() {
  const [combs, setCombs] = React.useState(null);
  const [countries, SetCountries] = React.useState(null);

  const [countrySelection, setCountrySelection] = React.useState({
    country1: '',
    country2: '',
    country3: '',
    country4: '',
    country5: '',
    country6: '',
    country7: '',
    country8: '',
    country9: '',
  });

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setCombs(data.message);
        SetCountries(data.message.map((el) => el.country));
      });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setCountrySelection((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function saveSVG(e) {
    e.preventDefault();
    Axios.post('http://localhost:3001/data', {
      element: document.getElementById('Layer_1').outerHTML,
    });
  }

  return (
    <div className='App' width='1000px'>
      <header className='header'>
        <img className='logo' src={logoYellow} alt='Logo' />
        <h1 className='heading--1'>Polygon-Configurator-Y4500</h1>
      </header>
      <Form
        countries={countries}
        handleChange={handleChange}
        countrySelection={countrySelection}
      />
      <button className='button--select' onClick={(e) => saveSVG(e)}>
        Save
      </button>
      <Matrix countrySelection={countrySelection} combs={combs} />
    </div>
  );
}

export default App;
