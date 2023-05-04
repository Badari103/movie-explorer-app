import './App.css';
import { Route, Routes } from 'react-router-dom';
import PopularMovies from './containers/popularMovies';
import MovieDetails from './containers/movieDetails';
import Layout from './components/layout';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getGeneres } from './redux/genre';


function App() {
  // const dispatch= useDispatch();
  // useEffect(()=>{
  //   dispatch(getGeneres());
  // },[dispatch]);
  return (
    <div>
      <Layout>
      <Routes>
        <Route path='/' element={<PopularMovies />} ></Route>
        <Route path='/movie/:id' element={<MovieDetails />} ></Route>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
