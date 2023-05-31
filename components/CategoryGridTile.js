import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'

function CategoryGridTile({ title, color,onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable 
      android_ripple={{ color: "#ccc" }} 
      style={({ pressed }) =>
        [styles.buttonStyle, pressed ? 
        styles.buttomPressed : null]}
        onPress={onPress}
        >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? "hidden" : "visible"
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttomPressed: {
    opacity: 0.5
  }
})