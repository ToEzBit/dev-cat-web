import './App.css';
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
