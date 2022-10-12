import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tasks = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
                <View style={styles.circular}></View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 20,
        height: 20,
        opacity: 0.4,
        borderRadius: 50,
        backgroundColor: '#fdbb2d',
        opacity: 8.4,
        marginRight: 7,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor:  '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
        marginStart: 5,
    },
});



export default Tasks;