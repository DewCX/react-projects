import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
// I will import firebase later .. !!

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  /// Auth and error func field
}

useEffect(() => {
  const unsubscribe = auth.onAuthStateChange(function (user) {
    if (user) {
      navigation.replace('chat')
    } else {
      navigation.canGoBack() && navigation.popToTop() // No user is signed in
    }
  })
  return unsubscribe
}, [])

return (
  <View style={StyleSheet.container}>
    <Input
      placeholder="Enter your email"
      label="Email"
      leftIcon={{ type: 'material', name: 'email' }}
      value={email}
      onChangeText={(text) => setEmail(text)}
    />
    <Input
      placeholder="Enter your password"
      label="Password"
      leftIcon={{ type: 'material', name: 'lock' }}
      value={email}
      onChangeText={(text) => setPassword(text)}
      secureTextEntry // For password safety
    />
    <Button title="sign in" OnPress={sign} style={styles.button} />
    <Button
      title="register"
      OnPress={() => navigation.navigate('Register')}
      style={styles.button}
    />
  </View>
)
export default LoginScreen
const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex:1,
    alignItems: 'center',
    padding: 10,
  }
})

