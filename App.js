import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import { AddTodo } from './components/AddTodo'

const generateData = (length = 10) => {
  return Array.from(Array(length), (_, i) => {
    return {
      name: Math.random()
        .toString(32)
        .slice(6),
      key: i + ''
    }
  })
}

const data = generateData(20)

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: 'buy coffee',
      key: '1'
    },
    {
      text: 'create an app',
      key: '2'
    },
    {
      text: 'play on the switch',
      key: '3'
    }
  ])

  const pressHandler = key => {
    setTodos(prev => prev.filter(item => item.key !== key))
  }

  const submitHandler = text => {
    if (text.length < 3) {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {
          text: 'UnderStood',
          onPress() {
            console.log('alert closed')
          }
        }
      ])
      return
    }
    setTodos(prev => [...prev, { text, key: prev.length + '' }])
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo onClick={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} onClick={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
})
