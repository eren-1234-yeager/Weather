import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import WeatherProvider from './contexts/WeatherProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Forecast from './components/Forecast';

function App() {

  return (
    <>
      <WeatherProvider days={3}>
        <BrowserRouter>
          <Navbar title="Weather" />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/forecast/:city' element={<Forecast/>} />
          </Routes>
        </BrowserRouter>
      </WeatherProvider>
    </>
  );
}

export default App;
