import React from 'react'

const ErrorDisplay = ({errorMsg}) => {
  return (
    <div className='error-body'>
        <div>
        Error in fetching the data :(
        </div>
        <div>
            {errorMsg}
        </div>
    </div>
  )
}

export default ErrorDisplay