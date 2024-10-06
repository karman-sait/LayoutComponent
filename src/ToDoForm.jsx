import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,

  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d1f7d6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#000',
    fontSize: 20,
  },
});

function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a New Task..."
        placeholderTextColor="#888"
      />
      <Button title="Add" color="#4CAF50" fontSize="20" />
    </View>
  );
}

export default ToDoForm;
