// Crea un componente que reciba una cadena de texto, la convierta a mayúsculas, y devuelva un h2 con el texto en mayúsculas.

const UppercaseText = ({ phrase }) => {
	if (typeof phrase !== 'string') return <h2>El parámetro no es un string.</h2>;

	const uppercase = phrase.toUpperCase();

	return <h2>{uppercase}</h2>;
};

export default UppercaseText;
