import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

function Login() {
	const navigation = new useNavigation();
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/logo.png')} />

			<TextInput style={styles.input} placeholder='Login' placeholderTextColor="#000" />

			<TextInput style={styles.input} placeholder='Senha' placeholderTextColor="#000" />

			<TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
				<Text style={styles.botaoText}>Acessar</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cadastro')}>
				<Text style={styles.botaoText}>Cadastre-se</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
