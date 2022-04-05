const CatCard: React.FC<CatCardProps> = (props) => {
	console.log(
		'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
		props
	);

	return (
		<div className='card'>
			<h3 className='card__text card__header'>{props.name}</h3>
			<p className='card__text'>{props.species}</p>
			<p className='card__text'>{props.favFoods}</p>
			<p className='card__text'>{props.birthYear}</p>
		</div>
	);
};

interface CatCardProps{
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
 }

export default CatCard;