import './App.css';
import { AnimatePresence } from 'framer-motion';
import Router from './router/Router';
import CreateProducts from '../src/components/modal/CreateProducts';
import SpecialRequirement from './components/modal/SpecialRequirement';
import Submit from './components/modal/Submit';

import ChatRoom from './pages/ChatRoom';
// import ModalSR from './components/modal/ModalSR';

function App() {
  return (
    <>
      {/* <AnimatePresence> */}
      {/* <Router /> */}
      {/* </AnimatePresence> */}
      <CreateProducts />
      {/* <SpecialRequirement /> */}
      {/* <Submit /> */}
    </>
  );
}

export default App;
