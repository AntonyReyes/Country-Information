import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CardCountry = () => {

    const [country, setCountry] = useState({})

    const [color, setColor] = useState()


    const colors = ['#26252D','#6A5D4D','#763C28','#252850','#317F43',
    '#828282','#D53032','#59351F','#316650', '#282828',
'#DE4C8A','#642424','#18171C','#403A3A','#721422']

const city = ['peru','colombia','chile','Argentina','Paraguay',
    'Mexico','japan','china','United States']


const randomColor = (arr=[]) => {
    return colors[Math.trunc(Math.random()*arr.length)]
}


const randomCountry = (arr=[]) => {
    return city[Math.trunc(Math.random()*arr.length)]
}

const [pais, setPais] = useState(randomCountry(city))

    const changeColor = {
        backgroundColor : color
    }



    useEffect(() => {
        setColor(randomColor(colors))
        console.log(pais);
        const URL = `https://restcountries.com/v2/name/${pais}`
        console.log('Estoy dentro del useEffect');
        axios.get(URL)
            .then(res => setCountry(res.data[0]))
            .catch(err => console.log(err))
    }, [pais])

    console.log(country);
    return (
        <div className='container_general' style={changeColor}>
            <div className="container_button">
        <button onClick={() => setPais('peru')}>Perú</button>
        <button onClick={() => setPais('city')}>Colombia</button>
        <button onClick={() => setPais('chile')}>Chile</button>
        <button onClick={() => setPais('Argentina')}>Argentina</button>
        <button onClick={() => setPais('Paraguay')}>Paraguay</button>
        <button onClick={() => setPais('Mexico')}>Mexico</button>
        <button onClick={() => setPais('japan')}>Japón</button>
        <button onClick={() => setPais('china')}>China</button>
        <button onClick={() => setPais('United States')}>E.E.U.U</button>
      </div>
      <hr />
      <div className="container_1">
        <h1>{country?.nativeName}</h1>
        <img src={country?.flag} alt="pais" />
        <h2>{`Capital: ${country?.capital}`}</h2>
        <h2>{`Populatión: ${country?.population}`}</h2>
        <h2>{`Lenguage: ${country.languages?.[0].name}`}</h2>
      </div>
        </div>
    )
}

export default CardCountry