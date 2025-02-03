import './App.css'
import NewStoreForm from './components/NewStoreForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllStores from './components/AllStores'
import ViewStore from './components/ViewStore';
import UpdateStoreForm from './components/UpdateStoreForm';
function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <AllStores />} />
                    <Route path="/stores/:id" element={ <ViewStore />} />
                    <Route path="/stores/:id/edit" element={ <UpdateStoreForm />} />
                    <Route path="/stores/new" element={ <NewStoreForm />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
