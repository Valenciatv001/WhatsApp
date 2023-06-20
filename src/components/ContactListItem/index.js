import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)


const ContactListItem = ({ user }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={''} style={styles.container}>
      <Image  source={{uri: user.image }}
      style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}> { user.name } 
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}> {user.status} 
        </Text>

      </View>
    </Pressable>
  )
}

export default ContactListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        marginRight: 10,
        height: 70,
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 60,
        borderRadius: 30
    }, 
    name: {
        fontWeight: "bold", 
    },
    content: {
      
    },
    subTitle: {
      color: "gray"
    }
})