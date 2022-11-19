import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import Record from './Components/Record/Record';
import Body from './Components/Body/Body';
import records from './data.json';

import { createContext } from 'react';

//study the arrow function
//always check if json from backend contains data --> record && record.map()
//study the "Lists and Keys" in React Docs

export const DataContext = createContext();

function App() {
  return (
    <DataContext.Provider value = {records}>
      <Header />
      <Filter />
      <Body/>
      <footer style = {{width: "fit-content", margin: "25px auto"}}>
            Challenge by  <a href="https://www.frontendmentor.io/" target='_blank'>Frontend Mentor</a>. Coded by Your <a href="https://github.com/mr-kingshuk" target='_blank'>Kingshuk Ghosh</a>.
      </footer>
    </DataContext.Provider>
  );
}

export default App;