import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ListLocations() {

	const navigation = new useNavigation();

	const [selectedId, setSelectedId] = useState(null);

	const data = [
		{ idLocalization: '1', name: 'Parque temático', addres: 'Rua São João, Francisco Beltrão - SP', zipCode: '9845-895' },
		{ idLocalization: '2', name: 'Cachoeira legal', addres: 'Rua Japão, Santo André - SP', zipCode: '85601-120' },
		{ idLocalization: '3', name: 'Lugar para fotos', addres: 'Rua das Graças, São Paulo - SP', zipCode: '85601-456' },
		{ idLocalization: '4', name: 'Ver estrelas', addres: 'Avenida Duque de Caxias, Lapa - RJ', zipCode: '85601-145' },
		{ idLocalization: '5', name: 'Gruta', addres: 'Rua Fermino Meredick, Francisco Beltrão - PR', zipCode: '85601-452' }
	]

	useEffect(() => {
		console.log('entrou na lista para adicionar um local novo')
	}, [])


	const Item = ({ item, onPress, style }) => (

		<TouchableOpacity onPress={onPress,
			() => navigation.navigate('Home', { zipCode: item.zipCode })}
			style={{ height: 90, backgroundColor: '#040a33', margin: 10, justifyContent: 'center', borderRadius: 10 }}>
			<View style={{ alignItems: 'center' }}>
				<Text style={{ color: 'white', fontSize: 20 }}> {item.name} </Text>
			</View>
			<View style={{ marginLeft: 10 }}>
				<Text style={{ color: 'white', fontSize: 16 }}> {item.addres} </Text>
				<Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}> Cep: {item.zipCode} </Text>
			</View>
		</TouchableOpacity>
	);

	const renderItem = ({ item }) => {

		return (
			<Item
				item={item}
				onPress={() => setSelectedId(item.idLocalization)}
				style={{ backgroundColor: '#fff' }}
			/>
		);
	};

	return (
		<SafeAreaView style={{ backgroundColor: '#454b75', height: '100%' }}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.idLocalization}
				extraData={selectedId}
			/>
		</SafeAreaView>

	)

}