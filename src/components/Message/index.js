import { StyleSheet, Text, View } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

const index = ({ message }) => {

    const isMyMessage = () => {
        return  message.user.id === "u1"
    }

  return (
    <View style={[styles.container, {
        backgroundColor: isMyMessage() ? "#DCFBC5" : "white",
        alignSelf: isMyMessage() ? "flex-end" : "flex-start",
    }]}>
      <Text>{ message.text }</Text>
      <Text style={styles.time}>{ dayjs(message.createdAt).fromNow() }</Text>
    </View> 
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: "80%",

        shadowColor: "#000",
        textShadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.38,
        shadowRadius: 1.00,

        elevation: 1,
    },
    time: {
        color: "gray",
        alignSelf: "flex-end"
    }
})