import React from 'react'

function Key({ keyVal, specialKey }) {
  return (
    <div className='key' id={specialKey && "big"}>{keyVal}</div>
  )
}

export default Key