//import liraries
import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import CheckBox from '../checkBox/checkBoxButton';
// create a component
const CheckBoxExample = () => {

    const [checkBox, setCheckBox] = useState(false);

    useEffect(() => {
            
    }, [checkBox])

    const data = [
        {
            id: '1',
            text: 'Desing Wiframes',
            color: 'blue',
        },
        {
            id: '2',
            text: 'Desing Mockups',
            color: 'red',
        },
        {
            id: '3',
            text: 'Desing Logo',
            color: 'green',
        },

    ]

    return (
        <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 30, marginTop: 30}}>CheckBox React Native</Text>
            <FlatList 
                style={{marginTop: 40}}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <CheckBox 
                        size={40}
                        text= {item.text}
                        color={item.color}
                        selected={checkBox}
                        onPress={() => setCheckBox(!checkBox)}
                    />
                )}
            />
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
});

//make this component available to the app
export default CheckBoxExample;
