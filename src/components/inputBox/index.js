import { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'


const InputBox = () => {
    const [newMessage, setNewMessage] = useState("")

    const onSend = () => { 
        console.warn(newMessage);

        setNewMessage("")
      };
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
         <AntDesign  name='plus' size={21} color="royalblue"/>

        <TextInput 
        value={newMessage} 
        onChangeText={setNewMessage} 
        style={styles.input} 
        placeholder='Type your message....'/>

        <MaterialIcons onPress={onSend} style={styles.send}     name='send' size={17} color="white"/>
    </SafeAreaView>       
 
  )
}

export default InputBox

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "whitesmoke",
      padding: 5,
      alignItems: "center",
    },
    input: {
      fontSize: 18,
  
      flex: 1,
      backgroundColor: "white",
      padding: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
  
      borderRadius: 50,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "lightgray",
    },
    send: {
      backgroundColor: "royalblue",
      padding: 7,
      borderRadius: 15,
      overflow: "hidden",
    },
  });