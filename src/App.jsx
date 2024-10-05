import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './Components/Card';

function App() {
  const [quote, setQuote] = useState([]);
  const [showQuote, setShowQuote] = useState(false);
  const [saveQuote, setSaveQuote] = useState([]);

  useEffect(() => {
    fetchRandomQuote();
  }, [])

  const fetchRandomQuote = async () => {
    try {
      const res = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(res.data);
    } catch (err) {
      console.log('Error fetching data ', err.message);
    }
  }
  const handleSaveQuote = () => {
    if(!saveQuote.includes(...quote)){
      setSaveQuote([...saveQuote, ...quote]);
    }
  }

  return (
    <>
      <div className='  max-sm:w-full w-[700px] text-gray-800'>
        <h2 className='pb-2 text-3xl font-bold'>Random Quotes!</h2>
        <span className='bg-green-500 p-1'>By famous People</span>
        {quote.map((q,idx) => (
          <Card key={idx} quote={q} getQuote={fetchRandomQuote} setQuote={handleSaveQuote}/>
        ))}
        <p>Also Reload window</p>

        <hr className='my-4' />
        <button onClick={() => setShowQuote(!showQuote)} className='bg-sky-500 p-2 rounded-full hover:bg-sky-700'>Click show Save Quotes</button>
        {showQuote &&
          <>{saveQuote !== '' ? saveQuote.map((quote, idx) => (
            <Card key={idx} quote={quote} getQuote='' setQuote=''/>
          )) : <div className='text-center text-red-600 font-bold'>Not found</div>}
          </>
        }
      </div>
    </>
  )
}

export default App
