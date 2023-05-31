import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import React from 'react'
import CategoryGridTile from '../components/CategoryGridTile';


//  this function is not going to rerender even this component rerenders
function renderCategerItem({item}) {
    console.log("item is "+item)
    return <View style ={{flex :1}}><CategoryGridTile title={item.title} color={item.color} /></View>
}

const CategoriesScreen = () => {
    return <FlatList data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderCategerItem}
    numColumns={2} />
    
}

export default CategoriesScreen

const styles = StyleSheet.create({})