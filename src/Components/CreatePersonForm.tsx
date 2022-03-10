import { ChangeEvent, MouseEvent, useState } from "react";
import Person from "../Models/Person";
import axios from "axios";

export default function CreatePersonForm() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    function handleIdChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForId = event.target.value;
        setId(newValueForId);
    }

    function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForName = event.target.value;
        setName(newValueForName);
    }

    function handleAgeChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForAge = event.target.value;
        setAge(parseInt(newValueForAge));
    }

    async function handleSave(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const personToCreate = new Person(id, name, age);

        console.log('persona creada: ', personToCreate)

        await CreatePerson(personToCreate);

        ClearForm();

        window.alert('Person Created!');

        window.location.reload();

    }

    async function CreatePerson(personToCreate: Person){
        await axios.post('http://localhost:3001/people', personToCreate, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async function handleUpdate(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const personToUpdate = new Person(id, name, age);

        console.log('persona actualizada: ', personToUpdate)

        await UpdatePerson(personToUpdate);

        ClearForm();

        window.alert('Person Updated!');

        window.location.reload();

    }

    async function UpdatePerson(personToUpdate: Person){
        await axios.put('http://localhost:3001/people', personToUpdate, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async function handleDelete(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        console.log('persona eliminada: ', id)

        await DeletePerson(id);

        ClearForm();

        window.alert('Person Deleted!');

        window.location.reload();

    }

    async function DeletePerson(id: string){
        await axios.delete('http://localhost:3001/people/'+ id, {
            headers: {
                'Content-Type': 'Access-Control-Allow-Origin'
            }
        });
    }

    function ClearForm(){
        setId('');
        setName('');
        setAge(0);
    }

    return (
        <form >
            <p>Create a new person</p>
            <input type="text" placeholder="ID" value={id} onChange={handleIdChange} />
            <br />
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            <br />
            <input type="number" placeholder="Age" value={age} onChange={handleAgeChange} />
            <br />
            <br />
            <button className="Boton" onClick={handleSave} >Save</button>
            <button className="Boton" onClick={handleUpdate} >Update</button>
            <button className="Boton" onClick={handleDelete} >Delete</button>
            <br />
        </form>
    );
}