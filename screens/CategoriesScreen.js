import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import React from 'react'
import CategoryGridTile from '../components/CategoryGridTile';


//  this function is not going to rerender even this component rerenders
function renderCategerItem({item}) {
    function perssHandler() {

    }
    console.log("item is "+item)
    return <View style ={{flex :1}}><CategoryGridTile 
    title={item.title} 
    color={item.color} 
    onPress={perssHandler}/></View>
}

const CategoriesScreen = ({navigation}) => {
    function renderCategerItem({item}) {
        function perssHandler() {
            navigation.navigate("MealsOverView",
            {
            categoryId : item.id,
        
            });
        }
    
        return <View style ={{flex :1}}><CategoryGridTile 
        title={item.title} 
        color={item.color} 
        onPress={perssHandler}/></View>
    }
    return <FlatList data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderCategerItem}
    numColumns={2} />
    
}

export default CategoriesScreen

const styles = StyleSheet.create({})