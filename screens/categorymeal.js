import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { MEALS } from '../data/original'
import {CATEGORIES} from '../data/original'
import { HeaderTitle } from 'react-navigation-stack';
import { FlatList } from 'react-native-gesture-handler';
import Menuitem from '../component/mealitem'
import Mealicom from './mealitems';
import {useSelector} from 'react-redux';


const CategoryMeal = props => {
    const avameals = useSelector( state => state.meals.filtermeal)



   const cate_id = props.navigation.getParam('cate_id');
   const mealdis = avameals.filter(meal=> meal.categoryIds.indexOf(cate_id) >= 0);

   if(mealdis.length ===0){
       return(<View>
           <Text  style={styles.tex}>No meal found Please check Filters.</Text>
       </View>)
   }
  

    return(<Mealicom mealdis={mealdis} navigation={props.navigation}/>
        
    );
};

CategoryMeal.navigationOptions= navigationData => {
    const cate_id = navigationData.navigation.getParam('cate_id');
    const sel = CATEGORIES.find(cat=> cat.id === cate_id);
    return{
        headerTitle : sel.title,
        headerStyle:{
        backgroundColor: '#74b9ff',
        }
        ,headerTintColor: "white"
    }
   
}



export default CategoryMeal;
const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
    }
    ,tex:{
       textAlign: 'center',
        padding: 10,
        fontWeight: "bold",
        fontSize: 20,
        

    }
})