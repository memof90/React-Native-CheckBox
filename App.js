import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBoxExample from './src/Components/CheckBox.Component';

export default function App() {
  return (
    <View style={styles.container}>
      <CheckBoxExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
