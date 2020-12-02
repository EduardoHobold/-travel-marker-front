import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Login from '../pages/Login/login'
import Cadastro from '../pages/cadastro/cadastro'
import Home from '../pages/Mapa/mapa'
import ListLocations from '../pages/ListLocations/listLocations'

const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();


function Routes() {
    const auth = true

	return (
		<NavigationContainer>
			{auth ? <TabNavigatorMain /> : <LoginStack />}
		</NavigationContainer>
	);
}

function LoginStack() {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
			<Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
			<Stack.Screen name="Home" component={TabNavigatorMain} />
		</Stack.Navigator>
	);
}

function TabNavigatorMain() {
	return (
		<TabTop.Navigator>
			<TabTop.Screen name="Home" component={Home} />
			<TabTop.Screen name="ListLocations" component={ListLocations} />
		</TabTop.Navigator>
	);
}

export default Routes;