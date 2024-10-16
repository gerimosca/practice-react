// Crea un componente que reciba un array de números, calcule la media, y devuelva un h2 con el texto "La media de los números [x],[y], [z] es [n].

const CalculateAverage = ({ numbers }) => {
	const areAllNumbers = validateNumbers(numbers);

	if (!areAllNumbers) {
		return <p>No todos los valores son números</p>;
	}

	const average = GetAverage(numbers);

	return (
		<h2>
			La media de los números {numbers.join(', ')} es {average}.
		</h2>
	);
};

const validateNumbers = numbers => {
	return numbers.every(number => typeof number === 'number');
};

const GetAverage = numbers => {
	const average = numbers.reduce((a, b) => {
		return a + b;
	});
	return average / numbers.length;
};

export default CalculateAverage;
