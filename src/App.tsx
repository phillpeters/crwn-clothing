import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/SignIn/SignIn';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
