const ConvertMinutesToHours = ({ minutes }) => {
	const totalMinutes = convertMinutes(minutes);

	return (
		<h2>
			{minutes} minutos son {totalMinutes}
		</h2>
	);
};

const convertMinutes = minutes => {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	return `
	${hours} ${hours === 1 ? 'hora' : 'horas'} y 
	${remainingMinutes} ${remainingMinutes === 1 ? 'minuto' : 'minutos'}
	`;
};

export default ConvertMinutesToHours;
