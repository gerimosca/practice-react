const BookInfo = ({ title, author, year, genre }) => {
	if (!title || !author || !year || !genre) return <p>Wrong Data</p>;

	return (
		<p>
			El libro {title}, fue escrito por {author} en el año {year}. Es un libro
			de {genre}.
		</p>
	);
};
export default BookInfo;
