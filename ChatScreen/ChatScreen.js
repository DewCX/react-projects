import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icon'
import { Avatar } from 'react-native-elements'
import { GiftedChat } from 'react-native-gifted-chat'
import { auth, db } from '../firebase'

const ChatScreen =
  () =>
  ({ navigation }) => {
    const [message, setMessage] = useState([])
    useEffect(() => {
      setMessage([
        {
          id: 1,
          text: 'Hello',
          createdAt: new Date(),
          user: {
            id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])

    const onSend = useCallback((message = []) => {
      setMessage((previousMessage) =>
        GiftedChat.append(previousMessage, message)
      )
      const { id, createdAt, text, user } = message[0]
      db.collection('chat').add({
        id,
        createdAt,
        text,
        user,
      })
    }, [])
    useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View style={{ marginLeft: 20 }}>
            <Avatar>
              rounded source ={' '}
              {{
                uri: auth?.currentUser?.photoURL,
              }}
            </Avatar>
          </View>
        ),

        headerRight: () => (
          <TouchableOpacity
            style={{
              marginRight: 30,
            }}
            onPress={SingOut}
          >
            <AntDesign name="Logout" size={24} color="black" />
          </TouchableOpacity>
        ),
      });
    }, []);


    const SingOut = () => {
        auth.SignOut().then(() => {
            //Sign out Successful !
            navigation.replace("Login")
        }).catch((error) => {
            //Error happened
        });
    }
    return (
        <GiftedChat
        message={message}
        showAvatarForEveryMessage = {true}
        onSend = {message => onSend(message)}
        user={{
            id:auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            avatar: auth?.currentUser?.photoURL
        }}
        />
    )
  };

  export default ChatScreen;