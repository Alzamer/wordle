import './App.css';

import Header from './Components/Header/';
import Game from './Components/Game/';

import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Game/>
      </Provider>
    </div>
  );
}

export default App;
