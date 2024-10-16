// Crea un componente que reciba dos números, una base y un exponente, y devuelva un h2 con el texto "[x] elevado a [y] es [n].".

const CalculatePower = ({ base, exponente }) => {
	if (
		!exponente ||
		!base ||
		typeof exponente !== 'number' ||
		typeof base !== 'number'
	)
		return <p>Error en alguno de los datos.</p>;

	const result = Math.pow(base, exponente);

	return (
		<h2>
			{base} elevado a {exponente} es {result}
		</h2>
	);
};

export default CalculatePower;
