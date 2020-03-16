import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

export default function TodoItem({ item, onClick }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick && onClick(item.key)
      }}
    >
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    // margin: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})
