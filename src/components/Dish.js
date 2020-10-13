import React from 'react'

export const Dish = ({dish}) => {
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{dish.dishesName}</h5>
                <p className="card-text">{dish.description}</p>
                <h5 className="card-title">{dish.price}</h5>
                <a href="#" className="btn btn-primary">Remove</a>
            </div>
        </div>
    )
}

