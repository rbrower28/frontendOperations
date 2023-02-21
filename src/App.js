import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';


function App() {
  return (
    <>
      <main>
        <h1>Simple CRUD interface</h1>
        <Read />
        <Create />
        <Update />
        <Delete />
      </main>
    </>
  );
}

export default App;
