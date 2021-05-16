import '../styles/App.css';
import Header from './Header';
import Game from './Game';
import { GameContextProvider } from './GameContext';
function App() {
  return (
    <GameContextProvider>
      <div className='App'>
        <Header />
        <Game />
      </div>
    </GameContextProvider>
  );
}

export default App;
