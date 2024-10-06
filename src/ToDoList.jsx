import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  taskContainer: {
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  task: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  completedTask: {
    backgroundColor: '#d1f7d6',
    borderColor: '#98c893',
  },
  taskText: {
    fontSize: 20,
    color: '#333',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#777',
  },
});

function ToDoList() {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.taskContainer, styles.completedTask]}>
          <Text style={[styles.taskText, styles.completedTaskText]}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.taskContainer}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.taskContainer, styles.completedTask]}>
          <Text style={[styles.taskText, styles.completedTaskText]}>Walk dog</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

export default ToDoList;
