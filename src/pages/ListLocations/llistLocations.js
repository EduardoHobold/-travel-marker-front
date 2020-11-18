import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

export default function ListLocations() {

    const [selectedId, setSelectedId] = useState(null);

    const data = [
        {idLocalization: '1', name: 'Parque temático', addres: '', zipCode: '9845-895'},
        {idLocalization: '2', name: 'Cachoeira legal', addres: '', zipCode: '85601-120'},
        {idLocalization: '3', name: 'Lugar para fotos', addres: '', zipCode: '85601-456'},
        {idLocalization: '4', name: 'Ver estrelas', addres: '', zipCode: '85601-145'},
        {idLocalization: '5', name: 'Gruta', addres: '', zipCode: '85601-452'}
    ]

    useEffect(() => {
        console.log('entrou na lista para adicionar um local novo')
    }, [])

    
	const Item = ({ item, onPress, style }) => (
		<TouchableOpacity onPress={onPress,
			() => navigationUse.navigate('Home', { zipCode: item.zipCode })}>
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
        <SafeAreaView>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.idLocalization}
                extraData={selectedId}
            />
        </SafeAreaView>

    )

}