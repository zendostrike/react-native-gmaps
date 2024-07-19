import { StyleSheet, View } from 'react-native';
import { GMapsView } from 'react-native-gmaps';

import { exampleData } from './exampleData';

export default function App() {
  const handleMarkerTouch = (event: any) => {
    console.log(`${event.nativeEvent.message} touched.`);
  };

  return (
    <View style={styles.container}>
      <GMapsView
        style={styles.map}
        markers={exampleData}
        onMarkerClick={handleMarkerTouch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
