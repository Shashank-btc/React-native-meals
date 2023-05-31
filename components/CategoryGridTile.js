import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function CategoryGridTile({title, color})  {
  return (
    <View style = {styles.gridItem}>
      <Pressable style ={styles.buttonStyle}>
        <View style ={styles.innerContainer}>
            <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({ 
    gridItem:{
        flex :1,
        margin :16,
        height :150,
        borderRadius: 8,
         elevation :4,
    },
    innerContainer:{
        flex :1,
        padding :16,
        justifyContent :"center",
        alignItems : "center"
    },
    buttonStyle:{
        flex :1,
    },
    title :{
        fontWeight : "bold"
        
    }
})