import React, { useRef, useState } from 'react';

import {
  StyleSheet,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { 
  Text,
  Button,
  Header, 
  Icon, 
  ListItem
} from 'react-native-elements';

const HomeScreen = ({ navigation, route }) => {

  const drawer = useRef()
  const [drawerState, setDrawerState] = useState(false)
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const menuList = [
    {
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      icon: 'menu-book'
    },
    {
      title: 'Title 2',
      subtitle: 'Subtitle 2',
      icon: 'headset'
    },
    {
      title: 'Title 3',
      subtitle: 'Subtitle 3',
      icon: 'assignment'
    }
  ]

  const navigationView = (
    <View style={styles.navigationContainer}>
      {
        menuList.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Icon
              name={l.icon}
              size={25}
              color="#3c6dcc"
            />
            <ListItem.Content>
              <ListItem.Title>{l.title}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
      <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 15 }}>
        <SimpleLineIcon
          name="phone"
          size={15}
          color="#3c6dcc"
          /> (000) 000-00-0000
      </Text>
      <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 15 }}>
        <IonIcon
          name="mail-outline"
          size={15}
          color="#3c6dcc"
          /> info@example.com
      </Text>
      <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 15 }}>
        <SimpleLineIcon
          name="social-instagram"
          size={15}
          color="#3c6dcc"
          /> @example
      </Text>
      <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 15 }}>
        <SimpleLineIcon
          name="social-facebook"
          size={15}
          color="#3c6dcc"
          /> @example
      </Text>
      <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 15 }}>
        <SimpleLineIcon
          name="social-vkontakte"
          size={15}
          color="#3c6dcc"
          /> @example
      </Text>
      <Text style={{ margin: 10, fontSize: 15 }}>
      </Text>
      <Button
        title="Log out "
        type="clear"
        icon={
          <Icon
            name="exit-to-app"
            size={25}
            color="#3c6dcc"
          />
        }
        iconRight
        onPress={() =>
          navigation.navigate('Login')
        }
      />
    </View>
  );

  return (
    <>
      <Header
        leftComponent={{ 
          icon: 'menu', 
          color: '#fff', 
          onPress: () => { 
            setDrawerState(!drawerState);
            drawerState ? drawer.current.openDrawer() : drawer.current.closeDrawer();
          } 
        }}
        centerComponent={{ text: route.name, style: { color: '#fff' } }}
        rightComponent={{ icon: 'help', color: '#fff' }}
      />
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={drawer}
        drawerPosition={drawerPosition}
        renderNavigationView={() => navigationView}
      >
        <View style={styles.container}>
          <Text style={{ margin: 10, fontSize: 15 }}>
            DrawerLayoutAndroid example
            <Icon
              name='rowing' />

          </Text>
          <Button
            title="Change Drawer Position"
            onPress={() => changeDrawerPosition()}
          />

          <Text style={{ margin: 10, fontSize: 15 }}>
            Drawer on the {drawerPosition}! Swipe from the side to see!
          </Text>
        </View>
      </DrawerLayoutAndroid>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    padding: 8
  }
});


export default HomeScreen;