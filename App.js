import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsNavi from './navigation/mealnavigator'
import Mainnav from './navigation/mealnavigator'
import {createStore , combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mealsReducer from './store/reducer/meals';


const rootReducer = combineReducers({
  meals : mealsReducer
});

const store = createStore(rootReducer);


export default function App() {
  return (
   <Provider store={store}><Mainnav /></Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
