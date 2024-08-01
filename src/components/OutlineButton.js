import React from 'react'

const OutlineButton = ({title,functionality}) => {
  return (
    <button className='px-3 py-2 text-black rounded-md border border-black' onClick={functionality}>
      {title}
    </button>
  )
}

export default OutlineButton