import React, {MouseEvent, useState} from 'react';
import './App.css';
import Fullinput from "./components/Fullinput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])

    }

    let [title, setTitle] = useState('')
    console.log(title)

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')

    }
    return (
        <div className="App">
            {/*<div>*/}
            {/*  <input />*/}
            {/*  <button>+</button>*/}
            {/*</div>*/}
            {/*<Fullinput addMessage={addMessage}/>*/}


            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>


            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
