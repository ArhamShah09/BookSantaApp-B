import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, 
    Image, Modal, ScrollView, KeyboardAvoidingView, FlatList, SnapshotViewIOS 
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class SettingScreen extends React.Component {
    constructor() {
        super();
        this.state={
            firstName : '',
            lastName : '',
            contact : '',
            address : '',
            emailId : '',
            docId : ''
        }
    }
    
    render() {
        return(
            <View style = {styles.container}>

                <View style = {styles.formContainer}>

                <TextInput
                                style = {styles.formTextInput}
                                placeholder = "First Name"
                                maxLength = {15}
                                onChangeText ={(text)=>{
                                    this.setState({
                                        firstName : text
                                    });
                                }}
                            />

                            <TextInput
                                style = {styles.formTextInput}
                                placeholder = "Last Name"
                                maxLength = {15}
                                onChangeText ={(text)=>{
                                    this.setState({
                                        lastName : text
                                    });
                                }}
                            />

                            <TextInput
                                style = {styles.formTextInput}
                                placeholder = "Contact"
                                maxLength = {11}
                                keyboardType = 'numeric'
                                onChangeText ={(text)=>{
                                    this.setState({
                                        contact : text
                                    });
                                }}
                            />

                            <TextInput
                                style = {styles.formTextInput}
                                placeholder = "Address"
                                multiline = {true}
                                onChangeText ={(text)=>{
                                    this.setState({
                                        address : text
                                    });
                                }}
                            />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
    },
    buttonText:{
      fontSize:25,
      fontWeight:"bold",
      color:"#fff"
    }
});