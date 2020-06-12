import React, {useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/original'
import { HeaderButtons, Item, } from 'react-navigation-header-buttons'
import HeaderButton from '../component/headerbut';
import {Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFav} from '../store/actions/meals'


const MealDetail = props => {
    const avameal= useSelector(state=> state.meals.meal)
    const mealid = props.navigation.getParam("mealid");
    const sel = avameal.find(meal => meal.id === mealid);

    const isfav = useSelector(state => state.meals.favemeal.some(meal => meal.id === mealid));


    

   
    
    const dispatch = useDispatch();
    

    const togglefavhandler = useCallback(() =>{
      dispatch(toggleFav(mealid));

    }, [dispatch, mealid]);

    useEffect(()=>{
        props.navigation.setParams({ toggle : togglefavhandler });
    },[togglefavhandler]);

    useEffect(()=>{
        props.navigation.setParams({checkfav: isfav });
    },[isfav]);

    return (<ScrollView>
        <Image source={{ uri: sel.imageUrl }} style={styles.img} />
        <View style={styles.def}>
            <Text>{sel.duration} Min.</Text>
            <Text>{sel.complexity.toUpperCase()}</Text>
            <Text>{sel.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}> <Ionicons name="ion-ios-list-outline" />Ingredients</Text>
        {sel.ingredients.map((ig, index) => <Text style={styles.step}>{index + 1}.  {ig}</Text>)
        }
        <Text style={styles.title}><Ionicons name="ion-menu" />Steps</Text>
        <View >{sel.steps.map((ig, index) => <Text style={styles.step}>{index + 1}. {ig}</Text>)}</View>

        <View >

        </View>
    </ScrollView>
    );
};

MealDetail.navigationOptions = navigationData => {
    //const cate_id = navigationData.navigation.getParam('mealid');
    //const sel = MEALS.find(cat => cat.id === cate_id);
   
   const mealtit = navigationData.navigation.getParam('mealtitle');
   const togf = navigationData.navigation.getParam('toggle');
   const checkfav = navigationData.navigation.getParam('checkfav');
    


    return {
        headerTitle: mealtit,
        headerStyle: {
            backgroundColor: '#74b9ff',
        }
        , headerTintColor: "white",
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favourite"
                iconName={checkfav ?"ios-star": "ios-star-outline"}
                onPress={togf} />
        </HeaderButtons>
    }

}

export default MealDetail;
const styles = StyleSheet.create({
    screen: {



    },
    def: {
        flexDirection: 'row',
        justifyContent: "space-around",
        padding: 15,
        backgroundColor: '#F9DDA4'
    }
    , img: {
        width: '100%',
        height: 200
    }
    ,
    title: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold"
    },
    step: {
        margin: 6,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: '#DAE0E2'
    }
})
