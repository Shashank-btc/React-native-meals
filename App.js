import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import  CategoriesScreen  from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <StatusBar style ='light'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle :{ backgroundColor :'black'},
        headerTintColor : "white",
        contentStyle :{backgroundColor : "black"}
      }}>
        <Stack.Screen name ="MealsCatageries" 
        component={CategoriesScreen} 
        options={{
          title: "All Categeries",}}/>
     <Stack.Screen name='MealsOverView' component={MealsOverviewScreen}
    //  options={({route, navigation}) =>{
    //   const categoryId = route.params.categoryId
    //   return{
    //     title : categoryId
    //   }
    //  }}
     />
      </Stack.Navigator>
      {/* <CategoriesScreen/> */}
      </NavigationContainer>
      </>
  )
}

export default App

const styles = StyleSheet.create({})