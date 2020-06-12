import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Category from '../screens/category';
import CategoryMeal from '../screens/categorymeal';
import Favour from '../screens/favourite';
import MealDetail from "../screens/mealdetail";
import { Ionicons } from '@expo/vector-icons';
import Filter from '../screens/filter';



const Favu = createStackNavigator({
    Favourite: Favour
    ,CategoryMeal: CategoryMeal
})

const MealsNavi = createStackNavigator({
    Categories: Category,
    Categorymeal: CategoryMeal,
    Details : MealDetail

}, {
    defaultNavigationOptions: {
        
         headerStyle: {
            backgroundColor: "#74b9ff"
        }
        , headerTintColor: "white"

    }
});

const FilterNav = createStackNavigator({
    Filtering : Filter
})

const Bottab = createBottomTabNavigator({
    Meals: {
        screen: MealsNavi, navigationOptions: {
            tabBarIcon: (info) => {
                return (<Ionicons name='ios-restaurant' size={25} color={info.tintColor} />)
            }
        }
    },
    Favourite: {
        screen: Favu, navigationOptions: {
            tabBarIcon: (info) => {
                return (<Ionicons name="ios-star" size={25} color={info.tintColor} />)
            }

        }
    },
    Filters : {
        screen: FilterNav, navigationOptions:{
            tabBarIcon: (info)=> {
                return(<Ionicons name="ios-list" size={25} color={info.tintColor} />)
            }
        }

    }
}, {
    tabBarOptions: {
        activeBackgroundColor: "#ced6e0",
        activeTintColor: '#ffa502',
        labelStyle: {
            fontSize: 20,
            fontWeight: "bold",
            justifyContent: "center"
        },
        style: {

        }
    }

})




const Mainnav = createDrawerNavigator({
    MealsFav : Bottab,
    Filters : FilterNav

})

export default createAppContainer(Mainnav);
