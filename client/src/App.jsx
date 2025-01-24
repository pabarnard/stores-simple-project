import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewStoreForm from './components/NewStoreForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <NewStoreForm />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
