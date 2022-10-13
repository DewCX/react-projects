import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { auth } from '../firebase'
//Auth gelecek

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [imageURL, setImageURL] = useState('')
  const register = () => {
    auth
      .createUserWithEmailandPassword(email, password)
      .then((UserCredentials) => {
        //Sign in
        var user = UserCredentials.user
        user
          .updateProfile({
            displayName: name,
            photoURL: imageURL ? imageURL : 'https://example.com',
          })
          .then(function () {
            //update succesfully
          })
          .catch(function (error) {
            //An error happened
          })
        NavigationPreloadManager.popToTop()
      })
      .catch((error) => {
        var errorMessage = error.message
        alert(errorMessage)
      })
  }
  return (
    <View style={StyleSheet.container}>
      <Input
        placeholder="Enter your name"
        label="Name"
        letfIcon={{ type: 'material', name: 'badge' }}
        value={{ name }}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="Enter your email"
        label="Email"
        letfIcon={{ type: 'material', name: 'email' }}
        value={{ email }}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="password"
        letfIcon={{ type: 'material', name: 'lock' }}
        value={{ password }}
        onChangeText={(text) => setName(text)}
        secureTextEntry
      />
      <Input
        placeholder="Upload your image URL"
        label="Profile picture"
        letfIcon={{ type: 'material', name: 'face' }}
        value={{ imageURL }}
        onChangeText={(text) => setImageURL(text)}
      />
      <Button title="register" onPress={register} style={styles.button} />
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
})
