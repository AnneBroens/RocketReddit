//routing tussen pagina's
//Dit is de data die naar postcard wordt gestuurd via de props 

import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;