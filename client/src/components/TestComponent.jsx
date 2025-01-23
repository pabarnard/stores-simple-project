// import { useState } from "react";
import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

const TestComponent = () => {
    const contactBackEnd = e => {
        e.preventDefault();
        console.log("Button clicked");
        axios.get("http://localhost:5000") // It's possible we might need to add headers: {'Access-Control-Allow-Origin': 'http://localhost:5000'}
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.headers);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <h1>Testing....</h1>
            <p>This is only a test!</p>
            <button onClick={e => contactBackEnd(e)}>Talk to back end</button>
        </>
    )
}

export default TestComponent;