import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import  CategoriesScreen  from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <StatusBar style ='dark'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="MealsCatageries" component={CategoriesScreen}/>
     <Stack.Screen name='MealsOverView' component={MealsOverviewScreen}/>
      </Stack.Navigator>
      {/* <CategoriesScreen/> */}
      </NavigationContainer>
      </>
  )
}

export default App

const styles = StyleSheet.create({})