import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { router } from 'expo-router'

export default function HomeScreen() {
  const onPressImage = () => {
    router.push('/webview')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressImage}>
        <Image
          source={require('@/assets/images/doge.jpeg')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100
  }
})
