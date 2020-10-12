import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../../src/actions/fetch_dishes'
import {Dish} from './Dish'
import {Loader} from './Loader'

const Dishes = () => {

    // позволяет диспатчить акшны в стор
    const dispatch = useDispatch()
    const dishes = useSelector(state => state.dishes.fetchedDishes)
    const loading = useSelector(state => state.app.loading)

    useEffect(() => (dispatch(fetchDishes())), [])

    if(loading) {
        return <Loader/>
    }
    return dishes.map(dish => <Dish dish={dish} key={dish.id}></Dish>)
}

export default Dishes

