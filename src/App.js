import {React} from 'react';
import './App.module.sass';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


const App = () => {
  return (
    <div >
      <Header />
      <Main />
      <footer></footer>
    </div>
  );
}

export default App;
