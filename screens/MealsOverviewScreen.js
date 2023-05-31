import { FlatList, StyleSheet, Text, View } from 'react-native'

import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'





const MealsOverviewScreen = ({ route }) => {
   const catId = route.params.categoryId 

   const displayMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >= 0
   } )

   function renderMealItem({item}) {
    return(
        <MealItem title={item.title}/>
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