import React from "react"
import {nanoid} from "nanoid"

function Matrix (props) {

  function createPolygons(country) {
    // Filter for country in props.combs
      if(props.combs && country) {
        const combs = props.combs
        const points = combs.filter(el => el.country === country)[0].points
        // Map array and create polygon for each point
        return points.map((poly, index) => {
          return <g><polygon key={nanoid()} className="st0" points={poly}/></g>
        })
      }
  }

  function createCountries(selection) {
    
    const countryArray = Object.entries(selection).map(el => el[1])

    return countryArray.map((el, index) => {
      return <g className={`country${index+1}`}>{createPolygons(el)}</g>
    })}
    

  return (
<svg id="Layer_1" style={{"enableBackground":"new 0 0 2126 1360.6"}} version="1.1" viewBox="0 0 2126 1360.6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
<g>
	<g>
		<path className="st0" d="M58.9,395.8l0-324c0-26,21.1-47.1,47.1-47.1l555,0c26,0,47.1,21.1,47.1,47.1l0,324c0,26-21.1,47.1-47.1,47.1
			l-555,0C79.9,442.9,58.9,421.8,58.9,395.8z"/>
	</g>
	<g>
		<path className="st0" d="M58.9,842.3l0-324c0-26,21.1-47.1,47.1-47.1l555,0c26,0,47.1,21.1,47.1,47.1l0,324c0,26-21.1,47.1-47.1,47.1
			l-555,0C79.9,889.4,58.9,868.3,58.9,842.3z"/>
	</g>
	<g>
		<path className="st0" d="M58.9,1288.8l0-324c0-26,21.1-47.1,47.1-47.1l555,0c26,0,47.1,21.1,47.1,47.1l0,324c0,26-21.1,47.1-47.1,47.1
			l-555,0C79.9,1335.9,58.9,1314.8,58.9,1288.8z"/>
	</g>
</g>
<g>
	<g>
		<path className="st0" d="M738.4,395.8l0-324c0-26,21.1-47.1,47.1-47.1l555,0c26,0,47.1,21.1,47.1,47.1l0,324c0,26-21.1,47.1-47.1,47.1
			l-555,0C759.5,442.9,738.4,421.8,738.4,395.8z"/>
	</g>
	<g>
		<path className="st0" d="M738.4,842.3l0-324c0-26,21.1-47.1,47.1-47.1l555,0c26,0,47.1,21.1,47.1,47.1l0,324c0,26-21.1,47.1-47.1,47.1
			l-555,0C759.5,889.4,738.4,868.3,738.4,842.3z"/>
	</g>
	<g>
		<path className="st0" d="M738.4,1288.8l0-324c0-26,21.1-47.1,47.1-47.1l555,0c26,0,47.1,21.1,47.1,47.1l0,324
			c0,26-21.1,47.1-47.1,47.1l-555,0C759.5,1335.9,738.4,1314.8,738.4,1288.8z"/>
	</g>
</g>
<g>
	<path className="st0" d="M1418,395.8l0-324c0-26,21.1-47.1,47.1-47.1l555,0c26,0,47.1,21.1,47.1,47.1l0,324c0,26-21.1,47.1-47.1,47.1
		l-555,0C1439.1,442.9,1418,421.8,1418,395.8z"/>
</g>
<g>
	<path className="st0" d="M1418,842.3l0-324c0-26,21.1-47.1,47.1-47.1l555,0c26,0,47.1,21.1,47.1,47.1l0,324c0,26-21.1,47.1-47.1,47.1
		l-555,0C1439.1,889.4,1418,868.3,1418,842.3z"/>
</g>
<g>
	<path className="st0" d="M1418,1288.8l0-324c0-26,21.1-47.1,47.1-47.1l555,0c26,0,47.1,21.1,47.1,47.1l0,324c0,26-21.1,47.1-47.1,47.1
		l-555,0C1439.1,1335.9,1418,1314.8,1418,1288.8z"/>
</g>
<rect x="382.7" y="-382.7" transform="matrix(1.909081e-06 1 -1 1.909081e-06 1743.3051 -382.6785)" className="st1" width="1360.6" height="2126"/>
{createCountries(props.countrySelection)}
</svg>
  )
}

export default Matrix
