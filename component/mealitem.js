import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
const Menuitem = props => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={props.onSelectmenu}>
                <View>
                    <View style={{ ...styles.row, ...styles.header }}>
                    <ImageBackground
                    style={styles.img} 
                    source={{uri: props.image}}>
                        <Text style={styles.title}>{props.title}</Text>
                    </ImageBackground>
                        
                        
                    </View>
                    <View style={{ ...styles.row, ...styles.detail }}>
                        <Text>{props.duration} Min.</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}






const styles = StyleSheet.create({
    item: {
        height: 200,
        width: "90%",
        backgroundColor: "#dff9fb"
        , margin: 15,
        borderRadius: 10,
        overflow: "hidden",
        elevation: 6 
    },
    title:{
        textAlign: 'left',
        backgroundColor: '#rgba(0,0,0,0.7)',
        color: 'white',
        paddingVertical: 5,
        paddingLeft: 12
        
    }
    , row: {
        flexDirection: 'row'
    },
    header: {
        height: '90%',
        
    },
    detail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        height: '10%'

    },
    img:{
       width: "100%",
       height: "auto",
       justifyContent: 'flex-end'
    }

});

export default Menuitem;