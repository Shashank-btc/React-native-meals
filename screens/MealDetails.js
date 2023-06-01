import { Image, StyleSheet, Text, View ,FlatList } from 'react-native'
import { useEffect } from 'react'

const MealDetails = ({route,navigation}) => {

    const val = route.params;
    const title = route.params.title
    // console.log("image url is "+route.params.imageUrl)

    useEffect(() =>{
    navigation.setOptions({
        title : title
       })
    })
  return (
    <View>
      <View style={styles.container}>
      <Image source={{uri: val.imageUrl}} style ={styles.imageStyle}/>
      <Text style={styles.textTitle}>ingredients</Text>
      <FlatList
      data={val.ingredients}
      renderItem={({item}) => {
        // console.log("tem is "+item.item.ingredients)
        return <Text style={styles.text}>
            {item}
        </Text>
      }}
      />
      <Text style={styles.textTitle}>steps</Text>
      <FlatList
      data={val.steps}
      renderItem={({item}) => {
        // console.log("tem is "+item.item.ingredients)
        return <Text style={styles.text}>
            {item}
        </Text>
      }}
      />
      </View>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    imageStyle:{
        height :200,
        width :"100%"
    },
    textTitle :{
        color : 'white',
        backgroundColor : "red",
        textAlign : 'center',
        fontSize : 20
    },
    container:{
        padding :16,
    },
    text:{
        textAlign :'center',
        padding :1,
    }
})