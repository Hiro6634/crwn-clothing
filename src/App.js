import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

const ShopPage = () => (
  <h1>I'm Shop Page</h1>
);

const  App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}>
        <Route path='shop' element={<ShopPage/>}/>
    </Route>
    </Routes>
    );
}

export default App;
