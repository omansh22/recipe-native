import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';

const Catgrid = props =>{
    return(
        

<TouchableOpacity style={styles.grid} onPress={props.onSelect}  >
            <View style={{...styles.container , ...{backgroundColor: props.color, borderRadius:10}}} >
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </View>
            </TouchableOpacity> 
    )
}

export default Catgrid;

const styles= StyleSheet.create({
    
    grid:{
        flex:1,
        margin: 15,
        height: 150,
        justifyContent: "center",
    },
    container:{
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 10,
        elevation: 6


    }

    ,text:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22 
    }

})