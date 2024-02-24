import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';

function App() {
  const{onToogleButton}= useTelegram();
  useEffect( () => {
    tg.ready();
  })

  return (
    <div className="App">
        <button onClick={onToogleButton}>toogle</button>
    </div>
  );
}

export default App;
