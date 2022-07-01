import './App.css';
import { AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

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
