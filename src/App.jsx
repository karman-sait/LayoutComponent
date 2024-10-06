import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '96%',
    maxWidth: 400,
    marginVertical: 20,
    padding: 15,
  }
});

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ToDoList />
        <ToDoForm />
      </View>
    </SafeAreaView>
  );
}

export default App;
