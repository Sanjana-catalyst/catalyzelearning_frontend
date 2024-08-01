import React from 'react'

const FilledButton = ({title,functionality}) => {
  return (
    <button className='bg-black px-3 py-2 text-white rounded-md' onClick={functionality}>
      {title}
    </button>
  )
}

export default FilledButton