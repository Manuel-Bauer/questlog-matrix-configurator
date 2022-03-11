import React from 'react';

// We pass form the countries we have saved in pictures

function Form(props) {
  function createSelections(countries) {
    if (countries) {
      return countries.map((country) => {
        return <option className="option" value={country}>{country}</option>;
      });
    }
  }

  return (
    <form className='form'>
      <div className='custom-select select--1'>
        <select
          id='country1'
          value={props.countrySelection.country1}
          onChange={props.handleChange}
          name='country1'
        >
          <option className='option' value=''>
            -- Country 1 --
          </option>
          {createSelections(props.countries)}
        </select>
        <span class='arrow'></span>
      </div>

      <div className='custom-select select--2'>
        <select
          id='country2'
          value={props.countrySelection.country2}
          onChange={props.handleChange}
          name='country2'
        >
          <option className='option' value=''>
            -- Country 2 --
          </option>
          {createSelections(props.countries)}
        </select>
        <span class='arrow'></span>
      </div>

      <div className='custom-select select--3'>
        <select
          id='country3'
          value={props.countrySelection.country3}
          onChange={props.handleChange}
          name='country3'
        >
          <option className='option' value=''>
            -- Country 3 --
          </option>
          {createSelections(props.countries)}
        </select>
        <span class='arrow'></span>
      </div>

      <div className='custom-select select--4'>
        <select
          id='country4'
          value={props.countrySelection.country4}
          onChange={props.handleChange}
          name='country4'
        >
          <option className='option' value=''>
            -- Country 4 --
          </option>
          {createSelections(props.countries)}
        </select>
        <span class='arrow'></span>
      </div>

      <div className='custom-select select--5'>
        <select
          id='country5'
          value={props.countrySelection.country5}
          onChange={props.handleChange}
          name='country5'
        >
          <option className='option' value=''>
            -- Country 5 --
          </option>
          {createSelections(props.countries)}
        </select>
        <span class='arrow'></span>
      </div>

      <div className='custom-select select--6'>
        <select
          id='country6'
          value={props.countrySelection.country6}
          onChange={props.handleChange}
          name='country6'
        >
          <option className='option' value=''>
            -- Country 6 --
          </option>
          {createSelections(props.countries)}
        </select>
        <span class='arrow'></span>
      </div>

      <div className='custom-select select--7'>
        <select
          id='country7'
          value={props.countrySelection.country7}
          onChange={props.handleChange}
          name='country7'
        >
          <option className='option' value=''>
            -- Country 7 --
          </option>
          {createSelections(props.countries)}
        </select>
        <span class='arrow'></span>
      </div>

      <div className='custom-select select--8'>
        <select
          id='country8'
          value={props.countrySelection.country8}
          onChange={props.handleChange}
          name='country8'
        >
          <option className='option' value=''>
            -- Country 8 --
          </option>
          {createSelections(props.countries)}
        </select>
        <span class='arrow'></span>
      </div>

      <div className='custom-select select--9'>
        <select
          id='country9'
          value={props.countrySelection.country9}
          onChange={props.handleChange}
          name='country9'
        >
          <option className='option' value=''>
            -- Country 9 --
          </option>
          {createSelections(props.countries)}
        </select>
        <span class='arrow'></span>
      </div>
    </form>
  );
}

export default Form;
