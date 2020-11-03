import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles'

function Login() {
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/logo.png')} />

			<TextInput style={styles.input} placeholder='Login' placeholderTextColor="#000" />

			<TextInput style={styles.input} placeholder='Senha' placeholderTextColor="#000" />

			<TouchableOpacity style={styles.botao}>
				<Text style={styles.botaoText}>Salvar</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.botao}>
				<Text style={styles.botaoText}>Cadastre-se</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
