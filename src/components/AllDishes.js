import React from 'react'
import { useSelector } from 'react-redux'
import Dishes from './Dishes'

const AllDishes = () => {

    const auth = useSelector(state => state.auth)

    return (
        <div className="row mt-4">
        <div className="col-md-6 mx-auto">
          {auth.isAuthenticated}
          <Dishes/>
        </div>
      </div>
    )
}

export default AllDishes