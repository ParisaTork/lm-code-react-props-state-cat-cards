import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import CatCard from './components/cat_card'
import { v4 as uuidv4 } from 'uuid';
import catData from './data/cat-data';
import Dog from './data/dog';
import dogData from './data/dog-data';
import DogCard from './components/dog_card';

function App() {

	const [ cats, setCats ] = useState<Array<Cat>>(catData);

  console.log("Our pretties 😻: ", cats);

  const catCount = cats.length;

  const [ dogs, setDogs ] = useState<Array<Dog>>(dogData);

  const dogCount = dogs.length;

  console.log(cats);

  return (
    <>
      <Navbar />
      <Header catCount={catCount}/>

      <main>
        <div className="cards__wrapper">
			{cats.map((cat, index) => (
							<CatCard
							key={cat.id}
							name={cat.name}
							species={cat.species}
							favFoods={[cat.favFoods.join(", ")]}
							birthYear={cat.birthYear}
							catIndex={index}
						  />
						))}

			{/* {dogs.map((dog, index) => (
				<DogCard
				key={dog.id}
				name={dog.name}
				species={dog.species}
				favFoods={dog.favFoods}
				birthYear={dog.birthYear}
				dogIndex={index}
				/>
			))}			 */}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
