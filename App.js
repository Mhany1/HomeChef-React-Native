import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider, Title } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Home from "./src/screens/Home.js";
import {Maincontainer} from "./src/screens/Maincontainer";
import {ProductsList} from "./src/screens/ProductsList.js";
import {ProductDetails} from "./src/screens/ProductDetails.js";
import {CartIcon} from "./src/components/CartIcon.js";
import { Cart } from "./src/screens/Cart.js";
import  thank  from "./src/screens/thank.js";
import  Checkout  from "./src/screens/Checkout.js";
import { CartProvider } from "./CartContext.js";
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'

const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
      // <Maincontainer/>



  //   <NavigationContainer>
  //   <Tab.Navigator>
  //     <Tab.Screen name="Home" component={Home} options={{title:"home",tabBarButton}}/>
  //   </Tab.Navigator>
  // </NavigationContainer>
    
    
    <Provider theme={theme}>
      <NavigationContainer>
      <CartProvider> 
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: true,
            title:'Home Chef'
          }}
        >
           {/* <Stack.Screen
              name="ProductsList"
              component={ProductsList}
              options={({ navigation }) => ({
                title: "ProductsList",
                headerTitleStyle: styles.headerTitle,
              })}
            /> */}

            <Stack.Screen
              name="Home"
              component={Home}
              options={({ navigation }) => ({
                title: "Home",
                headerTitleStyle: styles.headerTitle,
              })}
            /> 
              <Stack.Screen
              name="ProductsList"
              component={ProductsList}
              options={({ navigation }) => ({
                title: "Menu",
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />

            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={({ navigation }) => ({
                title: "Recipe Details",
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />

            <Stack.Screen
              name="Cart"
              component={Cart}
              options={({ navigation }) => ({
                title: "cart",
                headerTitleStyle: styles.headerTitle,
                headerRight: () => <CartIcon navigation={navigation} />,
              })}
            />

            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={({ navigation }) => ({
                title: "Checkout",
                headerTitleStyle: styles.headerTitle,
                
              })}
            />

            <Stack.Screen
              name="Thank"
              component={thank}
              options={({ navigation }) => ({
                title: "Home Chef",
                headerTitleStyle: styles.headerTitle,
                
              })}
            />

      {/* <Stack.Screen
              name="Home"
              component={Home}
              options={({ navigation }) => ({
                title: "Home",
                headerTitleStyle: styles.headerTitle,
              })}
            /> */}

        
          <Stack.Screen name="StartScreen" component={StartScreen} /> 
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
        </CartProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});
