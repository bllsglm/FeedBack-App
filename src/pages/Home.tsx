import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import AboutIconLink from '../components/AboutIconLink';

const Home = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <AboutIconLink/>
    </>
  )
}

export default Home