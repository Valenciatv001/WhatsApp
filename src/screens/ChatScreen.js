import { StyleSheet, ImageBackground, FlatList, KeyboardAvoidingView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import Message from "../components/Message/"

import bg from '../../assets/images/BG.png'
import message from "../../assets/data/messages.json"
import InputBox from '../components/inputBox'

const ChatScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name })
    }, [route.params.name])
    

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}>
    <ImageBackground source={bg} style={styles.bg}>
        <FlatList 
            data={message}
            renderItem={({ item }) => <Message message={item}/>}
            style={styles.list}
            inverted
        /> 
        <InputBox />
    </ImageBackground>
    </KeyboardAvoidingView>
  
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    }
})