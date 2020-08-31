import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,     
    } from 'react-native';

export default class Note extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                <Text style={styles.noteText1}>{this.props.val.date}</Text>
                
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>Delete</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor:'#ededed',
    },

    noteText:{
        paddingLeft:20,
        borderLeftWidth: 10,
        borderLeftColor:'#E91E63',
    },
    noteText1:{
        paddingLeft:20,
        borderLeftWidth: 10,
        borderLeftColor:'#E91E63',
        fontSize:10,
        paddingTop:5,
    },
    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        paddingHorizontal:20,
        borderRadius:30,
        borderColor:'white',
        top: 10,
        bottom:10,
        right:10,
        borderWidth:2,
    },
    noteDeleteText:{
        color:'white',
    },
});