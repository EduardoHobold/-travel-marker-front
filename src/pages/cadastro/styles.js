import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 12,
		backgroundColor: '#fff'
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: '#ff4d4d',
		borderRadius: 10,
		width: '80%',
		marginBottom: 10,
		paddingLeft: 10,
		fontSize: 16
	},
	botao: {
		marginTop: 10,
		height: 50,
		width: '80%',
		borderRadius: 10,
		textAlign: 'center',
		backgroundColor: '#ff4d4d',
		alignItems: 'center',
		justifyContent: 'center'
	},
	botaoText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white'
	}
})


export default styles;