import React from 'react'
import './ButtonChat.css'

const ButtonChat = () => {
  return (
    <div><div className='btn-container'>
    <div className='new-chat-btn'>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-6 h-6 plus'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
            />
        </svg>
        <p className='new-chat-txt'>New chat</p>
    </div>
    <div className='close-side'>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z'
            />
        </svg>
    </div>
    </div>
    </div>
  )
}

export default ButtonChat