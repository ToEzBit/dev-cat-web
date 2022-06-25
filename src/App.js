import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { AnimatePresence } from 'framer-motion';
import Router from './router/Router';
function App() {
  return (
    <>
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </>
  );
}

export default App;
