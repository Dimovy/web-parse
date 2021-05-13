import logo from './logo.svg';
import './App.css';
const axios = require('axios');
const cheerio = require('cheerio');

function App() {

  const url = 'https://gfs.gov.ru/poisk/?q=%D0%A0%D0%96%D0%94&s=+'
  

  axios.get(url)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  return (

    <div>
      <span>Answer</span>
    </div>
  );
}

export default App;
