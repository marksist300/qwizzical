import { useState } from 'react';
// pages and components
import Welcome from '../src/pages/Welcome';
import Quiz from './pages/Quiz';
import Footer from './components/Footer';
import blueBlob from './assets/blueBlob.svg';
import purpleBlob from './assets/purpleBlob.svg';

function App() {
  //setting states
  const [startGame, setStartGame] = useState(false)
  return (
        <div className='main'>
              {!startGame ? 
              <Welcome 
                startGame={startGame}
                setStartGame={setStartGame}
              /> :
              <Quiz/>}
              <img className='blueBlob' src={blueBlob} alt="floating blob of blue colour" />
              <img className='purpleBlob' src={purpleBlob} alt="floating blob of purple colour" />
          <Footer/>
        </div>
  )
}

export default App
