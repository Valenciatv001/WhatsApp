import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)


const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Chat", { id: chat.id, name: chat.user.name })} style={styles.container}>
      <Image  source={{uri: chat.user.image }}
      style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.row}>
            <Text numberOfLines={1} style={styles.name}> {chat.user.name} </Text>
            <Text style={styles.subTitle}> {dayjs(chat.lastMessage.createdAt).fromNow(true)} </Text>
        </View>

        <Text numberOfLines={1} style={styles.subTitle}> {chat.lastMessage.text} </Text>
      </View>
    </Pressable>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        marginRight: 10,
        height: 70,
    },
    image: {
        width: 50,
        height: 60,
        borderRadius: 30
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "lightgray",
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
    name: {
        flex: 1,
        fontWeight: "bold", 
    },
    subTitle: {
        color: "gray",
    }
})