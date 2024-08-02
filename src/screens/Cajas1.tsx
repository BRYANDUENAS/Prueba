
import React from 'react';
import { View, StyleSheet } from 'react-native';

export function Cajas1() {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  caja1: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    borderWidth:10
  },
  caja2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderWidth:10
  },
  caja3: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderWidth:10
  },
});

