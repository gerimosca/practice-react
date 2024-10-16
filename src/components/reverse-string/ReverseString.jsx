// Crea un componente que reciba una cadena de texto, la invierta, y devuelva un h2 con el texto invertido.

const ReverseString = ({ text }) => {
	const splitedText = text.split('').reverse().join('');

	return <h2>{splitedText}</h2>;
};

export default ReverseString;
