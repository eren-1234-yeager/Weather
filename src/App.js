import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import WeatherProvider from './contexts/WeatherProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <WeatherProvider>
        <BrowserRouter>
          <Navbar title="Weather" />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </WeatherProvider>
    </>
  );
}

export default App;
