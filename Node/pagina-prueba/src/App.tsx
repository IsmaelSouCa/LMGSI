import './App.css'

import Producto from './components/Producto'

function App() {

  return (
    <>
    <Producto title='Marica' description='en la playa...' price={5}/>
    <Producto title='Sexo' description='es gratis' price={5.69}/>
    </>
  )
}

export default App