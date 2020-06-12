import React, { useState,useEffect,useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import HeaderButton from '../component/headerbut';
import { HeaderButtons, Item, } from 'react-navigation-header-buttons';
import {useDispatch} from 'react-redux';
import {filterMeal} from '../store/actions/meals'


const Filt = (props) => {
    return (<View style={styles.fil}>
        <Text style={styles.tex}>{props.label}</Text>
        <View><Switch value={props.state}
            onValueChange={props.onc}
            thumbColor={'#74b9ff'}
            trackColor={{ true: '#74b9ff' }} /></View>
    </View>

    )
}



const Filter = props => {
    const [isglu, setglu] = useState(false);
    const [isve, setve] = useState(false);
    const [isvege, setvege] = useState(false);
    const [islac, setlac] = useState(false);
    const {navigation}= props;

    const dispatch = useDispatch(); 


    const saveFilters= useCallback(() =>{
        const appliedfilter={
            glutenfree: isglu,
            vegan: isve,
            vegeteri: isvege,
            lactosefree: islac
        };
        
        dispatch(filterMeal(appliedfilter));

    },[isglu,islac,isve,isvege,dispatch]);
    
    
    useEffect(()=>{
        navigation.setParams({save: saveFilters});
    },[saveFilters]);



    return (
        <View >
            <Text style={styles.title}>Available Filters/Restriction</Text>
            <Filt label={'Gluten Free'} state={isglu} onc={(chn) => setglu(chn)} />
            <Filt label={'Vegan'} state={isve} onc={(chn) => setve(chn)} />
            <Filt label={'Vegeterian'} state={isvege} onc={(chn) => setvege(chn)} />
            <Filt label={'Lactose Free'} state={islac} onc={(chn) => setlac(chn)} />
        </View>
    );
};

export default Filter;
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
        padding: 15
    },
    fil: {
        flexDirection: 'row',
        justifyContent: "space-around"
        , margin: 10

    }
    , tex: {
        justifyContent: 'center',
        fontSize: 25
    }
})

Filter.navigationOptions = navd => {
    return {
        headerTitle: 'Filter',
        headerStyle: {
            backgroundColor: '#74b9ff'
        },
        headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="save"
                iconName="ios-save"
                onPress={ navd.navigation.getParam('save') }/>
        </HeaderButtons>)
    }
}

