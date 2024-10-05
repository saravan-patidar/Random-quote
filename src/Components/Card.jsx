import React from 'react'

const Card = ({quote,getQuote,setQuote}) => {
    return (
        <div className=' border-4 my-7 text-center p-7 border-gray-700 rounded-sm shadow'>
            <p className='p-4 text-xl text-gray-900 font-semibold'>"{quote ? quote : 'Loading..'}"</p>
            {getQuote && <button onClick={getQuote} className='bg-red-300 hover:bg-red-500 m-2 rounded-lg px-3 py-1'>Get Quote</button>}
            {setQuote && <button onClick={setQuote} className='bg-red-300 hover:bg-red-500 m-2 rounded-lg px-3 py-1'>Save Quote</button>}
        </div>
    )
}

export default Card