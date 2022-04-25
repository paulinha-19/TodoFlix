import React from 'react'

const FoundSearch = ({ size, word }) => {
    return (
        <div>
            {size === 1} ?
            <p>{`${size} resultado encontrado para ${word}`}</p> :
            <p>{`${size} resultados encontrados para ${word}`}</p>
        </div>
    )
}

export default FoundSearch