import React from 'react'

const PokemonThumnail = ({id, name, image, type}) => {

    const style = `thumb-container ${type}`
    return (
        <div className={style}>
            <div className="number">
                <small>#{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-whapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumnail