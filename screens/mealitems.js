import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import Menuitem from '../component/mealitem'

const Mealicom = props => {

    const renderit= itemdata =>{
        return(
            <View>
                <Menuitem title={itemdata.item.title} 
                duration={itemdata.item.duration}
                complexity={itemdata.item.complexity}
                affordability={itemdata.item.affordability}
                image={itemdata.item.imageUrl}
                onSelectmenu={()=>{props.navigation.navigate({routeName:'Details', params: { mealid : itemdata.item.id,
                mealtitle: itemdata.item.title
                }})}} />
            </View>
        )
    }


    return(
        <View style={styles.screen}>
            <FlatList 
            data={props.mealdis}
            keyExtractor={(item,index)=> item.id}
            renderItem={renderit}
            style={{width: '100%'}}


            />
        </View>
    )

}

export default Mealicom;

const styles= StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
    }
})