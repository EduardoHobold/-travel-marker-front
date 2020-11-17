import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Login from '../pages/Login/login'
import Cadastro from '../pages/Cadastro/cadastro'

const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();


function Routes() {
    const auth = true

	return (
		<NavigationContainer>
			{auth ? <DrawerNavigator /> : <LoginStack />}
		</NavigationContainer>
	);
}

function LoginStack() {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
			<Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
}

function TabNavigatorMain() {
	return (
		<TabTop.Navigator>
			<TabTop.Screen name="[name]" component={Login} />
			<TabTop.Screen name="[name]" component={Login} />
		</TabTop.Navigator>
	);
}

export default Routes;