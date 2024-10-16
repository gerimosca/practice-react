//   Crea un componente que reciba una fecha de nacimiento y calcule la edad en años, devolviendo un h2 con el texto "Si naciste el día dd/mm/aaaa tienes X años.

const CalculateAge = ({ born }) => {
	if (!born) {
		return <p>Error data.</p>;
	}
};

export default CalculateAge;
