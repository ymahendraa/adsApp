import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import CardCourse from "../components/cardCourse";

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={{color:'#000'}}>Hello,</Text>
            <Text style={styles.nameText}>Juana Antonieta</Text>
            <TouchableOpacity style={styles.notifButton}>
                <Icon name="notifications-outline" size={30} color={'#000'}/>
            </TouchableOpacity>
            <View style={styles.textInput}>
                <TextInput 
                    placeholder="Search course"
                    style={{
                        width:'90%'
                    }}
                />
                <Icon name="search-outline" size={30} color={'#000'}/>
            </View>
            <View style={styles.categoryText}>
                <Text style={{color:'#000'}}>Category: </Text>
                <TouchableOpacity style={styles.category}>
                    <Text style={{color:'#fff'}}>#CSS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Text style={{color:'#fff'}}>#UX</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Text style={{color:'#fff'}}>#Swift</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Text style={{color:'#fff'}}>#UI</Text>
                </TouchableOpacity>
            </View>
                <CardCourse/> 
                {/* <CardCourse/> */}
            
        </View> 
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:'5%',
    },
    nameText:{
        color:'#000',
        fontSize:35,
        fontWeight:'bold'
    },
    notifButton:{
        width:40,
        height:40,
        borderColor:'grey',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        position:'absolute',
        right:'5%',
        top:'5%'
    },
    textInput:{
        borderColor:'grey',
        borderRadius:8,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        marginTop:'5%'
    },
    categoryText:{
        marginTop:'5%',
        flexDirection:'row',
        alignItems:'center',
    },
    category:{
        backgroundColor:'#65AAEA',
        borderRadius:10,
        paddingHorizontal:8,
        marginLeft:'5%'
    }
    
})

export default HomeScreen;