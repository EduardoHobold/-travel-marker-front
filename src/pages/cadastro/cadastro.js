import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

function Cadastro() {
	const navigation = new useNavigation();

	return (
		<View style={styles.container}>
			<Image source={require('../../assets/logo.png')} />

			<Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ff4d4d' }}>CRIAR CONTA</Text>

			<TextInput style={styles.input} placeholder='Nome' placeholderTextColor="#808080" />
			<TextInput style={styles.input} placeholder='E-mail' placeholderTextColor="#808080" />
			<TextInput style={styles.input} placeholder='Senha' placeholderTextColor="#808080" />

			<TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
				<Text style={styles.botaoText}>Salvar</Text>
			</TouchableOpacity>

			<View style={{ flexDirection: 'row' }}>
				<Text style={{ color: '#808080', fontSize: 16 }}>Já tem um conta cadastrada?</Text>
				<TouchableOpacity>
					<Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }} onPress={() => navigation.navigate('Login')}> Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Cadastro;
