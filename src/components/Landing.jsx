import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/ContextProvider';
import { requestManager } from '../helpers/export.js';
import ACTIONS from '../context/actions';
import config from '../config';

import { ScrollCard,Tags,FeedCard } from '../components/export';

const { FETCH_DATA } = ACTIONS;

function Landing() {
  const {dispatch,state} = useContext(DataContext);
  const [loading,setLoading] = useState(false);
  const [query,setQuery] = useState({country:'in',category:'business'})

  const API_URL = config(query.country,query.category);

  /* search url
  https://newsapi.org/v2/everything?q=bitcoin&apiKey=6f02a21dd20f4853939d7e9029dad380
  */

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

  return (
    <main className='landing'>
      <ScrollCard query={query} />
      <Tags setQuery={setQuery} query={query} />
      <FeedCard articles={state.articles}/>
    </main>
  );
}

export default Landing;
