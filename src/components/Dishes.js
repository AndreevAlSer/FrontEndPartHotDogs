import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../../src/actions/fetch_dishes'
import {Dish} from './Dish'
import {Loader} from './Loader'

const Dishes = () => {

    const flexStyle = {
        display: "flex",
    
        justifyContent: "space-between",
      };

    // позволяет диспатчить акшны в стор
    const dispatch = useDispatch()
    const dishes = useSelector(state => state.dishes.fetchedDishes)
    const loading = useSelector(state => state.app.loading)

    useEffect(() => (dispatch(fetchDishes())), [])

    if(loading) {
        return <Loader/>
    }
    return (
        <div style={flexStyle}>
            { dishes.map(dish => <Dish dish={dish} key={dish.id}></Dish>) }
        </div>
    )
    
}

export default Dishes




//   return (
//     <ul class="list-group" style={ulStyle}>
//       <li class="list-group-item" style={liStyle}>
//         {company.id} {company.name} {company.earn} {company.parentid}{" "}
//         {company.totalsum}
//       </li>

//       {nestedCompanies}
//     </ul>
//   );
// }

