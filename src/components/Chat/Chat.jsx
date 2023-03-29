import { useState } from "react"

const Chat = () => {
    const [value, setValue] = useState('')
    const [showValue, setShowValue] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!value) {
          alert("Press enter an answer.");
          return;
        }

        const newAnswer = {
          id: Math.floor(Math.random() * 1000),
          value: value
        }
    
        setShowValue((prevAnswer) => [...prevAnswer, newAnswer]);
        setValue("");
    }
    
    return (
        <>
            <ul>
                {showValue.map(answer => 
                    <li key={answer.id}>{answer.value}</li>
                )}
            </ul>

            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='numbers'
                    id='numbers-input'
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default Chat