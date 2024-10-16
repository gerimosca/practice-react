// Crea un componente que reciba un número, determine si es par o impar, y devuelva un h2 con el texto "El número [x] es par/impar".

const IsEvenOrOdd = ({ number }) => {
	if (typeof number !== 'number') return <h2>El parámetro no es un número.</h2>;

	if (number % 2 === 0) return <h2>El número {number} es par.</h2>;

	if (number % 2 !== 0) return <h2>El número {number} es impar.</h2>;
};

export default IsEvenOrOdd;
