import React from 'react';

export default function Note({item, onDelete}) {
    const { id, content } = item;

    return (
        <div className='note'>
            <div className='note-item'>{content}</div>
            <button className='btn delete-btn' onClick={() => onDelete(id)} >X</button>
        </div>
    )
}