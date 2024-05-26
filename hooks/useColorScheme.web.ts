// NOTE: The default React Native styling doesn't support server rendering.
// Server rendered styles should not change between the first render of the HTML
// and the first render on the client. Typically, web developers will use CSS media queries
// to render different styles on the client and server, these aren't directly supported in React Native
import type { ColorSchemeName } from 'react-native'

export function useColorScheme(): ColorSchemeName {
  return 'light'
}
