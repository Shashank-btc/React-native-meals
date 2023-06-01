import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'





const MealsOverviewScreen = ({ route, navigation }) => {
   const catId = route.params.categoryId 

   const displayMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >= 0
   })

   useEffect(() =>{
    const categoryTitle = 
    CATEGORIES.find((categoryId)=> categoryId.id === catId).title
    navigation.setOptions({
     title : categoryTitle
    })
   },[catId,navigation])

   function renderMealItem({item}) {

    console.log("item.complexcity "+item.complexcity)
    const mealsItemPeops ={
        title: item.title,
        imageUrl: item.imageUrl,
        complexcity: item.complexity,
        affordadility: item.affordability,
        duration : item.duration,
    }

    return(
        <MealItem title={item.title} 
        // imageUrl={item.imageUrl}
        // complexcity={item.complexcity}
        // affordadility={item.affordadility}
        // duration={item.duration}
        {...mealsItemPeops}
        />
    )
   }

  return (
    <View style={styles.contaainer}>
        <FlatList data={displayMeals}
        keyExtractor={(item)=>item.id}
        renderItem={renderMealItem}
        />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    contaainer :{
        flex :1,
        padding :16,
    }
})