// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from '../Screens/Splash/index';
import SignIn from '../Screens/Auth/SignIn/index';
import Signup from '../Screens/Auth/Signup/index';
import ForgotPassword from '../Screens/Auth/ForgotPassword/forgotPassword';
import VerifyEmail from '../Screens/Auth/ForgotPassword/verifyEmail';
import ResetPassword from '../Screens/Auth/ForgotPassword/resetPassword';
import Home from '../Screens/Home/index';
import DrawerScreen from '../Screens/Drawer/index';
import Setting from '../Screens/Settings/index';
import Profile from '../Screens/Profile/index';
import EditProfile from '../Screens/EditProfile/index';
import PrivacyPolicy from '../Screens/PrivacyPolicy/index';
import TermsAndCondition from '../Screens/TermsAndCondition/index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={prop => <DrawerScreen {...prop} />}
    drawerPosition={"left"}
    screenOptions={{ drawerStyle: { width: '80%', }, }}
  >
    <Drawer.Screen options={{ headerShown: false, swipeEnabled: false, }} name="Home" component={Home} />
    <Drawer.Screen options={{ headerShown: false, swipeEnabled: false, }} name="Setting" component={Setting} />
    <Drawer.Screen options={{ headerShown: false, swipeEnabled: false, }} name="Profile" component={Profile} />
    <Drawer.Screen options={{ headerShown: false, swipeEnabled: false, }} name="EditProfile" component={EditProfile} />
    <Drawer.Screen options={{ headerShown: false, swipeEnabled: false, }} name="PrivacyPolicy" component={PrivacyPolicy} />
    <Drawer.Screen options={{ headerShown: false, swipeEnabled: false, }} name="TermsAndCondition" component={TermsAndCondition} />
  </Drawer.Navigator>
)

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} component={Splash} name="Splash" />
        <Stack.Screen options={{ headerShown: false }} component={SignIn} name="SignIn" />
        <Stack.Screen options={{ headerShown: false }} component={Signup} name="Signup" />
        <Stack.Screen options={{ headerShown: false }} component={ForgotPassword} name="ForgotPassword" />
        <Stack.Screen options={{ headerShown: false }} component={VerifyEmail} name="VerifyEmail" />
        <Stack.Screen options={{ headerShown: false }} component={ResetPassword} name="ResetPassword" />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MainDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;