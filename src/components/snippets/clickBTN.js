import React from 'react'
import PropTypes from 'prop-types'

const BTN = ({value}) => {
  return (
    <div className='p-6 relative'>
      <h1 className='p-6 bg-white rounded text-md text-black font-bold shadow-sm'>{{value}}</h1>
    </div>
  )
}

BTN.propTypes = {
     value:PropTypes.string.isRequired
}
export default BTN
