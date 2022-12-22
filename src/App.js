import {React} from 'react';
import './App.module.sass';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


const App = () => {
  return (
    <div >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
