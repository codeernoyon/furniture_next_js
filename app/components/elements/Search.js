import React, { useState } from 'react'

function Search({className}) {
    const [change, setChange] = useState('')
   return (
    <div className=''>
        <input className={className} type="text" onChange={e => setChange(e.target.value)} placeholder='Search your product'/>
    </div>
  )
}

export default Search