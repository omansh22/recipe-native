import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { MEALS } from '../data/original'
import Mealicom from './mealitems';
import {useSelector} from 'react-redux';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../component/headerbut'

const Favour = props => {
    const favs = useSelector(state=> state.meals.favemeal);
    
        //const fid = favs.filter(meal => meal.id=== 'm1' || meal.id === 'm4' );
        if (favs.length === 0 || !favs) {
            return (
              <View style={styles.content}>
                <Text>No favorite meals found. Start adding some!</Text>
              </View>
            );
          }
        return(  
        <Mealicom mealdis={favs} navigation={props.navigation}/>
    );
};

export default Favour;
const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

Favour.navigationOptions = (navigationData) =>{
    return{
        headerStyle:{
            backgroundColor: '#74b9ff'
        },
        headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu"
            iconName="ios-menu"
            onPress={()=>{ navigationData.navigation.toggleDrawer()}} />
        </HeaderButtons>)
      
    }
}

