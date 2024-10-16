// Crea un componente que reciba un array de números, encuentre el valor máximo, y devuelva un h2 con el texto "El número más alto de la lista [...] es [X].

const FindMaximum = ({ numbers }) => {
	const maxNumber = Math.max(...numbers);

	return (
		<h2>
			El número más alto de la lista {numbers.join(', ')} es {maxNumber}.
		</h2>
	);
};

export default FindMaximum;
