import React from 'react'
import { useSelector } from 'react-redux'
import Dishes from './Dishes'

const AllDishes = () => {

    const auth = useSelector(state => state.auth)

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {auth.isAuthenticated}
            <Dishes/>
          </div>
        </div>
      </div>
    )
}

export default AllDishes