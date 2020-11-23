import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Button,
  Input,
  Icon,
  Avatar,
  Divider
} from 'react-native-elements';

const LoginScreen = ({ navigation }) => (
  <>
    <View
      style={styles.login}
    >
      <Avatar
        rounded
        icon={{ name: 'menu-book' }}
        size='xlarge'
        avatarStyle={styles.avatar}
        containerStyle={styles.avatarContainer}
      />
      <Divider style={{ backgroundColor: 'transparent', paddingVertical: 10 }} />
      <Input
        placeholder='Email or Username'
        leftIcon={
          <Icon
            name='mail'
            size={24}
            color='black'
          />
        }
      />
      <Divider style={{ backgroundColor: 'transparent', paddingVertical: 10 }} />
      <Input
        placeholder='Password'
        leftIcon={
          <Icon
            name='lock'
            size={24}
            color='black'
          />
        }
      />
      <Divider style={{ backgroundColor: 'transparent', paddingVertical: 10 }} />
      <Button
        title="Log in"
        style={styles.loginButton}
        onPress={() =>
          navigation.navigate('Home')
        }
      />
      <Divider style={{ backgroundColor: 'transparent', paddingVertical: 10 }} />
      <Button
        title="Register"
        type="outline"
        style={styles.registerButton}
        onPress={() =>
          navigation.navigate('Register')
        }
      />
    </View>
  </>
);

const styles = StyleSheet.create({
  login: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  avatarContainer: {
    alignSelf: 'center'
  },
  avatar: {
    // backgroundColor: '#3c6dcc',
    // opacity: 1
  }
});

export default LoginScreen;