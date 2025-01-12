import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import ForecastPage from './Pages/ForecastPage/ForecastPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/forecast:city" element={<ForecastPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
