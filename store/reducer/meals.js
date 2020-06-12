import {MEALS} from '../../data/original';
import {TOGGLE_FAV} from '../actions/meals';
import {FILTER_MEAL} from '../actions/meals'

const initialState={
    meal: MEALS ,
    filtermeal: MEALS ,
    favemeal: [] ,
};


const mealsReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_FAV:
           const existing= state.favemeal.findIndex(meal => meal.id === action.mealID);
           if(existing>=0){
               const updated= [...state.favemeal];
               updated.splice(existing,1);
               return({...state, favemeal: updated})
           }
           else {
               const id= state.meal.find(mea=> mea.id === action.mealID)
               return({...state, favemeal: state.favemeal.concat(id)})
           }

           case FILTER_MEAL:
               const applied = action.Fil;
               const filteredmeal = state.meal.filter(meal=>{
                if(applied.glutenfree && !meal.isGlutenFree){
                    return false;
                }
                if(applied.vegan && !meal.isVegan){
                    return false;
                }
                if(applied.vegeteri && !meal.isVegetarian){
                    return false;
                }
                if(applied.lactosefree && !meal.isLactoseFree){
                    return false;
                }
                return true;
                
               });
               
               
               return ({...state, filtermeal: filteredmeal});
               



       default: return state;
    }
    
}

export default mealsReducer;