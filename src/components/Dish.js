import React from 'react'

export const Dish = ({dish}) => {
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{dish.dishesName}</h5>
                <h5 className="card-title">{dish.price}</h5>
                <h5 className="card-title">{dish.description}</h5>
            </div>
        </div>
    )
}