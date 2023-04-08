import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import Authentication from './pages/Authentication/Authentication';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
