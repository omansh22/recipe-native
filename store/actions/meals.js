export const TOGGLE_FAV = 'TOGGLE_FAV';
export const FILTER_MEAL = 'FILTER_MEAL';

export const toggleFav = (id) =>{
    return {type: TOGGLE_FAV, mealID: id }
}


export const filterMeal = applied =>{
    return{ type: FILTER_MEAL, Fil: applied}
}
