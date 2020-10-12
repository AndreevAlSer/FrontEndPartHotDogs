import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../../src/actions/fetch_dishes'
import {Dish} from './Dish'
import {Loader} from './Loader'

const Dishes = () => {

    // позволяет диспатчить акшны в стор
    const dispatch = useDispatch()
    const dishes = Object.values(useSelector(state => state.dishes.fetchedDishes))
    const loading = useSelector(state => state.app.loading)

    useEffect(() => dispatch(fetchDishes()), [])

    if(loading) {
        return <Loader/>
    }

    return dishes.map(dish => Object.values(dish).map(dish2 => <Dish dish={dish2} key={dish2.id}></Dish>))
}

export default Dishes

