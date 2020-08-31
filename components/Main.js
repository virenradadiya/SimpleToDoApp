import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,     
    } from 'react-native';

import Note from './Note';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            noteArray:[],
            noteText:'',            
        }
    }

    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={ ()=> this.deleteNote(key) } />
        });
        
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> Simple ToDo Application</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <KeyboardAvoidingView behavior="padding" style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({noteText})}
                        value={this.state.noteText}
                        placeholder='>> Add Note '
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                        >
                    </TextInput>
                </KeyboardAvoidingView>
                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>         
            </View>
        );
    }

    addNote() {
        if (this.state.noteText){
            var d =new Date();
            this.state.noteArray.push({
            'date': d.getDate() +
            "/" + (d.getMonth()+1) +
            "/" + d.getFullYear(),
            'note' : this.state.noteText
        });
        this.setState({ noteArray:this.state.noteArray })
        this.setState({ noteText:'' });
        }
    }

    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray })
    }

}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },

    header:{
        backgroundColor: '#2980b9',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#252525',
    },
    
    headerText:{
        color:'white',
        fontSize:18,
        padding:26,
    },

    scrollContainer:{
        flex:1,
        marginBottom:10,
    },

    footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex:0,       
    },

    textInput:{
        alignSelf:'stretch',
        color:'#fff',
        padding:20,
        backgroundColor:'#252525',
        borderTopColor: '#ededed',
        borderTopWidth:2,
    },

    addButton:{
        position:'absolute',
        zIndex: 11,
        right:20,
        bottom:90,
        backgroundColor:'#2980b9',
        height:80,
        width:80,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
    },

    addButtonText:{
        color:'#fff',
        fontSize:35,
    },
});
  