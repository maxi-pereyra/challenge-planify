
import './App.css'
import SelectionTime from './views/selection_time';
import ConfirmationReserva from './views/reservation_confirmation';
import NavigationBar from './views/navigationBar';
import Reservas from './views/reservas';
import MisTurnos from './views/misTurnos';
import { Routes , Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Reservas/>}/>
        <Route path='/mis-turnos' element={<MisTurnos/>}/>
        <Route path='/reserva/time' element={<SelectionTime/>}/>
        <Route path='/reserva/confirmaReserva' element={<ConfirmationReserva/>}/>
      </Routes>
      <NavigationBar></NavigationBar>
    </>
  )
}

export default App
