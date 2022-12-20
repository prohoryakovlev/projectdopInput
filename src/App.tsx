import React, {MouseEvent, useState} from 'react';
import './App.css';
import Fullinput from "./components/Fullinput";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = () => {
        console.log("aaaaaaaa")
    }

    return (
        <div className="App">
            {/*<div>*/}
            {/*  <input />*/}
            {/*  <button>+</button>*/}
            {/*</div>*/}

            <Fullinput addMessage={addMessage}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
