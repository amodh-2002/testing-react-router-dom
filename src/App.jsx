import { Link, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  return (
    <div>
      <h1>Home Page!! changes from ubuntu </h1>
      <h2>From feature branch !!! and testing jenkins webhook from ch</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Page!!</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Page!!</h1>
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
