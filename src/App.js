import logo from './logo.svg';
import './App.css';
import Students from './components/student';
import Children from './components/children';
import ArrayPassing from './components/arraySample';

function App() {
  const items=
  [
    {id:1 , name: "item 1"},
    {id:2 , name: "item 3"},
    {id:3 , name: "item 2"},
  ]
  return (
    <div className="App">
      {/* <Students  name="amreth" age={19} IsMarried={true}/>
      <Students  name="aravind" age={29} IsMarried={false}/>
      <Students  name="ajay"/>

      <Children >
        <p>This is sample 1</p>
        <p>This is sample 2</p>
        <p>This is sample 3</p>
      </Children> */} 

      <ArrayPassing items={items}/>


    </div>
  );
}

export default App;
