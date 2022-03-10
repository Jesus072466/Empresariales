type GreetPersonProps = {
    name: String,
    age: number
}

export default function Person(Props: GreetPersonProps){
    return <p>Hello {Props.name}! your are {Props.age} years old </p>
}