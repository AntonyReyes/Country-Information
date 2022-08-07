
import './App.css'
import CardCountry from './assets/components/CardCountry'

function App() {

 

  return (
    <div className="App">
      <header>
        <h1>Information country</h1>
      </header>
      
      <main>
      <CardCountry/>
      <CardCountry/>
      <CardCountry/>
      <CardCountry/>
      </main>

      <footer>
        <br />
        <h3>Derechos de autor copyrigth@UNC.edu.pe</h3>
        <br />
        <hr />
        <br />
        <h3>Antony Reyes Figueroa</h3>
        <br />
      </footer>

    </div>
  )
}

export default App
