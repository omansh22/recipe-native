import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/original';
import Catgrid from '../component/categorygrid';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../component/headerbut';



const Category = props => {

    const rendergriditem = (itemdata) => {
        return (

            <Catgrid title={itemdata.item.title}
                onSelect={() => props.navigation.navigate({ routeName: "Categorymeal", params: { cate_id: itemdata.item.id } })}
                color={itemdata.item.color}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList data={CATEGORIES}
                numColumns={2}
                renderItem={rendergriditem}

            />
        </View>

    );
};

Category.navigationOptions = (navdata) =>{
    return{
    headerTitle: "Meal Categories",
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
            title="open"
            iconName="ios-menu"
            onPress={()=> {navdata.navigation.toggleDrawer();}}
        />
        </HeaderButtons>
    )
    , headerStyle: {
        backgroundColor: "#74b9ff",

    }
    , headerTintColor: "white"
}
}

export default Category;
const styles = StyleSheet.create({

    grid: {
        flex: 1,
        margin: 15,
        height: 150,
    }

})

