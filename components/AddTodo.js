import React, { useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native'

export function AddTodo({ onClick }) {
  const [text, setText] = useState('')

  const onChange = value => {
    setText(value)
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={onChange}
      />
      <Button
        title="add todo"
        value={text}
        onPress={() => {
          onClick(text)
        }}
        color="coral"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})
