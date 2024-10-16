// Crea un componente que reciba una cadena de texto, cuente el número de palabras que contiene, y devuelva un h2 con el texto "En la frase ... hay X palabras."

const CountWords = ({ children }) => {
	if (typeof children !== 'string' || !children) {
		return <p>Error data</p>;
	}

	const counterWords = children.split(' ').length;

	return (
		<h2>
			En la frase &quot;{children}&quot; hay {counterWords} palabras.
		</h2>
	);
};

export default CountWords;
