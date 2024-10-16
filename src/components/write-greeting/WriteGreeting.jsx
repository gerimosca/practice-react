//   Crea un componente que reciba un nombre y una hora del día, y devuelva un h2 que diga "Buenos días/tardes/noches, [nombre]" dependiendo de la hora.

const WriteGreeting = ({ name, hour }) => {
	if (!name || !hour || hour < 0 || hour > 24) {
		return <p>Los datos no son válidos.</p>;
	}

	const greeting = GetGreeting(hour);

	return (
		<h2>
			{greeting}, {name}
		</h2>
	);
};

const GetGreeting = hour => {
	if (hour > 0 && hour < 12) {
		return 'Buenos días';
	} else if (hour >= 12 && hour < 19) {
		return 'Buenas tardes';
	}
	return 'Buenas noches';
};

export default WriteGreeting;
