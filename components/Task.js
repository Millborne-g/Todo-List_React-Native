import React from 'react'
import { View, Text, StyleSheet } from 'react-native'; 

const Task = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.leftContainer}>
            <View style={styles.box}></View>
            <Text style={styles.itemText}>This is my {props.text}</Text>
        </View>

        <View style={styles.circle}></View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 53,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        elevation: 5
    },

    leftContainer: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },

    box: {
        height: 24,
        width: 24,
        borderRadius: 5,
        backgroundColor: 'rgba(85, 188, 246, 0.4)'
    },

    itemText: {
        marginLeft: 15,
        fontSize: 14,
        maxHeight: '80%',
        fontWeight: '400px',
    },

    circle: {
        borderWidth: 2,
        borderColor: '#55BCF6',
        borderRadius: 5,
        width: 12,
        height: 12,
        marginRight: 15,
    }

})

export default Task