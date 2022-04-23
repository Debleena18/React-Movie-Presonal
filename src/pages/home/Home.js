import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import List from '../../components/lists/Lists';


const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured type='movie' />
        <List />
    </div>
  )
}

export default Home