import React from 'react'
import PropTypes from 'prop-types'

const BTN = ({value}) => {
  return (
    <div className='p-6 relative'>
      <button className='p-6 bg-white rounded text-md text-black font-bold shadow-sm' value={value}></button>
    </div>
  )
}

BTN.propTypes = {
     value:PropTypes.string.isRequired
}
export default BTN
