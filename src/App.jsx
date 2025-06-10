import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Card from '/src/components/Card.jsx';
import CardForm from './components/CardForm.jsx';
import Example from './components/Example.jsx';

/*function handleClick() {
  alert('cliccato.');
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target[0].value);
}*/

function handleForm(state, action) {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return {
        name: '',
        email: '',
      };
    default:
      return state;
  }
}

function App() {
  /*  const [count, setCount] = useState(0);*/
  /*  const [user, setUser] = useState({ name: 'Tommaso', age: 32 });*/

  /*  const upgradeUserName = () => {
    const updatedUser = { ...user, name: 'Kleo' };
    setUser(updatedUser);
  };
  console.log(user.name);*/

  const [dati, setDati] = useState([]);
  const [defaultForm, dispatchFormState] = useReducer(handleForm, {
    name: '',
    email: '',
  });

  const handleFieldChange = (field, value) => {
    dispatchFormState({ type: 'CHANGE_FIELD', field, value });
  };

  const resetForm = (e) => {
    e.preventDefault();
    dispatchFormState({ type: 'RESET_FORM' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(defaultForm);
  };

  useEffect(() => {
    fetch('/src/assets/dati.json')
      .then((res) => res.json())
      .then((json) => {
        setDati(json);
      })
      .catch((err) => console.log(err));
  }, []);

  const addCard = (card) => {
    setDati([...dati, card]);
  };

  return (
    <>
      <Example></Example>
      <CardForm addCard={addCard} id={dati.length}></CardForm>
      <div className="grid grid-cols-4 gap-5">
        {dati.map((city) => (
          <Card
            key={city.id}
            name={city.name}
            description={city.description}
            imgURL={city.imgURL}
            isVisited={city.isVisited}
          ></Card>
        ))}
      </div>
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={defaultForm.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type={'email'}
            name="email"
            id="email"
            value={defaultForm.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
        </div>
        <button onClick={(e) => resetForm(e)}>Reset</button>
        <button onClick={(e) => handleSubmit(e)}>Invia</button>
      </form>
      {/*      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
               <button onClick={handleClick}>Alert</button>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button>Invia</button>
        </form>
        <button onClick={upgradeUserName}>Update User</button>
      </div>*/}
    </>
  );
}

export default App;
