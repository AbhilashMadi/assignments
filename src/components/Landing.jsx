import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/ContextProvider';
import { requestManager } from '../helpers/export.js';
import ACTIONS from '../context/actions';
import config from '../config';

const { FETCH_DATA } = ACTIONS;

function Landing() {
  const {dispatch,state} = useContext(DataContext);
  const [loading,setLoading] = useState(false);
  const [query,setQuery] = useState({country:'us',category:'technology'})

  const API_URL = config(query.country,query.category);

  const fetchData = (url) => {
    setLoading(true)
    requestManager(url)
      .then((response) =>
        dispatch({ type: FETCH_DATA, payload: { articles:response.data.articles} })
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData(API_URL)
  },[API_URL]);

  return(
    <main className='landing'>
      main Landing
    </main>
  )
}

export default Landing;
