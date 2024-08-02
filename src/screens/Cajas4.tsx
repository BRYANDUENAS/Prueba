
import React from 'react';
import { View, StyleSheet } from 'react-native';

export function Cajas4() {
  return (
    <View style={styles.container}>
          <View style={styles.caja1} />
          <View style={styles.caja2} />
          <View style={styles.caja3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  caja1: {
    backgroundColor: 'yellow',
    borderWidth:10,
    flex:1
  },
  caja2: {
    backgroundColor: 'blue',
    borderWidth:10,
    flex:2
  },
  caja3: {
    backgroundColor: 'red',
    borderWidth:10,
    flex:3
  },
});