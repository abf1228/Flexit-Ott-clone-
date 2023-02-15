import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../request';
import Row from '../Row';


function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav />
        
        <Banner />
        
        <Row title="FlexitOriginals" fetchUrl={requests.fetchFlexitOriginals} isLargeRow/> 
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}/> 
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> 
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/> 
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/> 
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrowMovies}/> 
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/> 
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/> 
    </div>
  )
}

export default HomeScreen;