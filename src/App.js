import './App.css';
import { ThemeProvider } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Theme } from './Theme';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Characters from './pages/Characters';
import Review from './pages/Review';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="overview" element={<Overview />} />
          <Route path="characters" element={<Characters />} />
          <Route path="review" element={<Review />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
