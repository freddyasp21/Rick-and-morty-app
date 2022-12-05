import React from 'react'

function Pagination({ prev, next, onePrevious, oneNext }) {

    const handlePrevious = () => {
        onePrevious()
    }

    const handleNext = () => {
        oneNext()
    }

    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
                {
                    prev ? <li className='page-item'>
                        <button className='page-link' onClick={handlePrevious} style={{width: "100px" }}>
                            Previous
                        </button>
                    </li> : null
                }
                {
                    next ? <li className='page-item'>
                        <button className='page-link' onClick={handleNext} style={{width: "100px" }}>
                            Next
                        </button>
                    </li> : null
                }
            </ul>
        </nav>
    )
}

export default Pagination