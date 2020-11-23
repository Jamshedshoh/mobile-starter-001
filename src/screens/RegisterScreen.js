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

const RegisterScreen = ({ navigation }) => (
  <>
    <View
      style={styles.register}
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
      <Input
        placeholder='Repeat Password'
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
        title="Register"
        style={styles.registerButton}
        onPress={() =>
          navigation.navigate('Login')
        }
      />
      <Divider style={{ backgroundColor: 'transparent', paddingVertical: 10 }} />
      <Button
        title="Back to log in"
        type="outline"
        style={styles.registerButton}
        onPress={() =>
          navigation.navigate('Login')
        }
      />
    </View>
  </>
);

const styles = StyleSheet.create({
  register: {
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

export default RegisterScreen;