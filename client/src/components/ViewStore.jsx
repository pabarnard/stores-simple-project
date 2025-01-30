import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewStore = () => {
    const { id } = useParams(); // Grab path variables from route name
    const navigate = useNavigate();
    const [store, setStore] = useState({});

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/stores/"+id, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5000' // Needed so back end can grab data
            }
        })
        .then(res => {
            // console.log(res);
            setStore(res.data["this_store"]);
        })
        .catch(err => {
            console.log(err)
        })
    }, []) // Run first time

    return (
        <>
            <p><button onClick={() => navigate("/")}>Back to all stores</button></p>
            
            {!store.id ? <p>No store found</p> : <p>Store id: { store.id }</p>}
            {!store.id ? "" : <p>Name: { store.name }</p>}
            {!store.id ? "" : <p>Employee count: { store.employee_count }</p>}
            {!store.id ? "" : <p>Description: { store.description }</p>}
        </>
    )
};

export default ViewStore;