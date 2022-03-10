import { useEffect, useState, ChangeEvent, MouseEvent } from 'react';

import Person from '../Models/Person';
import GreetPerson from './GreetPerson'
import axios from 'axios';

export default function PersonList () {
    
    const [people, setPeople] = useState<Person[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);

    async function loadPeople() {
        const response = await axios.get('http://localhost:3001/people');
        setPeople(
          response.data.map((p: Person) => new Person(p.id, p.name, p.age))
        );
        setLoaded(true);
    }

    async function Handle (event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        await DeletePerson(id);
    }

    async function DeletePerson(id: string){
        await axios.delete('http://localhost:3001/people/'+ id, {
            headers: {
                'Content-Type': 'Access-Control-Allow-Origin'
            }
        });
    }

    useEffect(() => {
        if (!loaded) {
         loadPeople();
      }
    }, [people, loaded]);

    const renderPeople = () => people.map(p => (
        <div>
        <GreetPerson 
            key={p.id} 
            name={p.name} 
            age={p.age}
        />
        <button itemID={p.id} onClick={Handle} value={p.id} >Borrar</button>
        </div>
    ));

    return (
        <div>
          {renderPeople()}
        </div>
    );
}