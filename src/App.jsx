import { useState } from 'react';
import CatList from './components/CatList';

const DATA = [
{
  id :1,
  name:'Ubik',
  caretaker:'Maria',
  color: 'grey',
  personality: 'wild child',
  petCount: 0
},
{
  id: 2,
  name:'Pepper',
  caretaker:'Mark',
  color: 'black',
  personality: 'Spicy',
  petCount: 0
},
{
  id: 3,
  name:'Binx',
  caretaker:'Susan',
  color: 'tuxedo',
  personality: 'feral',
  petCount: 0
},
{
  id: 4,
  name:'Luna',
  caretaker:'Jake',
  color: 'white',
  personality: 'cuddly',
  petCount: 0
},
];
function App() {

  const [catData, setCatData] = useState(DATA);
  const [totalPetCount, setTotalPrtCount] = useState(0);
  
  const handlePetCat = (id) => {
    setCatData(catData => catData.map(cat => {
      if (cat.id === id){
        return {...cat, petCount: cat.petCount + 1 };
      }else {
        return cat;
      }
    }));
  };
  // };
  const calculateTotalPetCount = (catData) => {
    let total = 0;
    for (const cat of catData){
      total += cat.petCount;
    }
    return total;
  };
  const totalPets = calculateTotalPetCount(catData);
  return (
    <>
      <main>
        <h1> The Cat Corral</h1>
        <h2>Total Number of Pets Across All Cats: {totalPets}</h2>
        <CatList catData={catData} onPetCat={handlePetCat}/>
      </main>
       
    </>
  );
  }

export default App;
