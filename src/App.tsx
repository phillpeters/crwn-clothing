import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
