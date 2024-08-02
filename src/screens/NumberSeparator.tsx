import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface NumberSeparatorProps {
  numbers: number[];
}

export function NumberSeparator({ numbers }: NumberSeparatorProps) {

  const [mostrarResultados, setmostrarResultados] = useState(false);

  // Separar los números en pares e impares
  const pares = numbers.filter(num => num % 2 === 0);
  const impares = numbers.filter(num => num % 2 !== 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO</Text>
      <Text style={styles.numbers}>Vector: {numbers.join(', ')}</Text>
      <Button
        title="Clasificar"
        onPress={() => setmostrarResultados(true)} />
      {mostrarResultados && (
        <>
          <Text style={styles.numbersp}>Pares: {pares.join(', ')}</Text>
          <Text style={styles.numbersi}>Impares: {impares.join(', ')}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  numbers: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20,
  },
  numbersp: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
  numbersi: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
})








