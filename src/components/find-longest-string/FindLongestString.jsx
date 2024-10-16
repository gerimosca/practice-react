// Crea un componente que reciba un array de cadenas de texto de diferente longitud, encuentre la cadena más larga, y devuelva un h2 con el texto "De las palabras [...] [x] es la más larga".

const FindLongestString = ({ phrases }) => {
	const longerPhrase = getLongerPhrase(phrases);

	return (
		<h2>
			De las frases &lsquo;{phrases.join(', ')}&lsquo;. La mas larga es &lsquo;
			{longerPhrase}&lsquo;.
		</h2>
	);
};

const getLongerPhrase = phrases => {
	let longerPhrase = '';

	for (const phrase of phrases) {
		if (phrase.length > longerPhrase.length) {
			longerPhrase = phrase;
		}
	}
	return longerPhrase;
};

export default FindLongestString;
