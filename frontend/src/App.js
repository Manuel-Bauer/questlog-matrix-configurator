import React from 'react';
import './App.css';
import Matrix from './Matrix';
import Form from './Form';
import Axios from 'axios';
import logoYellow from './logo--yellow.jpg';

function App() {
  // Holds each countries polygon paths
  const [combs, setCombs] = React.useState(null);
  // Holds selectable countries
  const [countries, SetCountries] = React.useState(null);

  // Holds current country selection
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

  // Holds if feedback after saving should be shown
  const [showFeedback, setShowFeedback] = React.useState(false);

  // Fetche data from api and sets Combs and Countries state when app starts
  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setCombs(data.message);
        SetCountries(data.message.map((el) => el.country));
      });
  }, []);

  //
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
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  }

  return (
    <div className='App' width='1000px'>
      <header className='header'>
        <img className='logo' src={logoYellow} alt='Logo' />
        <h1 className='heading--1'>matrix-configurator</h1>
      </header>
      <Form
        countries={countries}
        handleChange={handleChange}
        countrySelection={countrySelection}
      />
      <button className='button--select' onClick={(e) => saveSVG(e)}>
        Save
      </button>
      <div className={showFeedback ? `feedback` : 'feedback hidden'}>
        SVG Saved
      </div>
      ;
      <Matrix
        className='matrix'
        countrySelection={countrySelection}
        combs={combs}
      />
    </div>
  );
}

export default App;
