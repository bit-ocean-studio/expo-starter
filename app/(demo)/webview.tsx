import { WebView } from 'react-native-webview'
import { StyleSheet } from 'react-native'

const URL = 'https://brucesong.xyz'

export default function WebViewScreen() {
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      pullToRefreshEnabled
      source={{
        uri: URL
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
