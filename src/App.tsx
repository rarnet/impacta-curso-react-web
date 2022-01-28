import { useState } from 'react';
import Title from './components/Title';
import RouterService from './services/RouterService';


const App: React.FC = () => {

  return (
    <div>
      <RouterService/>
    </div>
  )
    
}

export default App;