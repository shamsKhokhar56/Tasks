import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Design1 from './screens/Design1';
import Design2 from './screens/Design2';
import { Ionicons, Entypo } from '@expo/vector-icons'

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
	"[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<View style={{ flexDirection: 'column', height: 80, justifyContent: 'space-between' }}>
				<Button
					title="Screen 1"
					onPress={() => navigation.navigate('Design1')}
				/>
				<Button
					title="Screen 2"
					onPress={() => navigation.navigate('Design2')}
				/>
			</View>
		</View>
	);
}


const Stack = createStackNavigator();

function MyStack({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Design1" component={Design1} options={{ headerShown: false }} />
			<Stack.Screen name="Design2" component={Design2} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}