import BookInfo from './components/book-info/BookInfo';
import CalculateAge from './components/calculate-age/CalculateAge';
import CalculateAverage from './components/calculate-average/CalculateAverage';
import CalculatePower from './components/calculate-power/CalculatePower';
import ConvertMinutesToHours from './components/convert-minutes-to-hours/ConvertMinutesToHours';
import CountWords from './components/count-words/CountWords';
import DisplayPersonInfo from './components/display-person-info/DisplayPersonInfo';
import FindLongestString from './components/find-longest-string/FindLongestString';
import FindMaximum from './components/find-maximum/FindMaximum';
import IsEvenOrOdd from './components/is-even-or-odd/IsEvenOrOdd';
import ReverseString from './components/reverse-string/ReverseString';
import UppercaseText from './components/uppercase-text/UppercaseText';
import User from './components/user/User';
import WriteGreeting from './components/write-greeting/writeGreeting';

const personInfo = {
	name: 'Gerardo',
	age: '34',
	job: 'Unemployed'
};

const App = () => {
	return (
		<>
			<User name='Gerardo' surname='Mosca' />
			<BookInfo
				title='Hábitos atómicos'
				author='James Clear'
				year={2020}
				genre='Autoconocimiento'
			/>
			<ConvertMinutesToHours minutes={140} />
			<ReverseString text='Hola' />
			<IsEvenOrOdd number={42} />
			<UppercaseText phrase='felicidad'></UppercaseText>
			<WriteGreeting name='Juan' hour={21} />
			<CalculatePower base={2} exponente={6} />
			<CountWords>Hoy es catorce de octubre</CountWords>
			<CalculateAge born={10 / 10 / 1990} />
			<FindMaximum numbers={[30, 20, 50, 40]} />
			<CalculateAverage numbers={[10, 20, 60]} />
			<FindLongestString
				phrases={['fiesta y algarabia', 'felicidad', 'juan']}
			/>
			<DisplayPersonInfo {...personInfo} />
		</>
	);
};

export default App;
