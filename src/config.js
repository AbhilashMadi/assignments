
const API_KEY = process.env.REACT_APP_KEY;

const config = (country,category) => `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`

export default config;