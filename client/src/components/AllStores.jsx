import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AllStores = () => {
    const [storeList, setStoreList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:5000/api/v1/stores",
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5000' // Needed so back end can grab data
            }
        })
        .then(res => {
            // console.log(res);
            setStoreList(res.data["all_stores"]);
        })
        .catch(err => {
            console.log(err);
        })
    }, []) // Run first time this component loads
    
    const deleteStore = id => {
        axios({
            method: "DELETE",
            url: "http://localhost:5000/api/v1/stores/"+id,
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5000' // Needed so back end can grab data
            }
        })
        .then(() => {
            setStoreList(storeList.filter(store => { // Remove deleted store from state
                return store.id !== id;
            }))
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <h1>All stores</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of employees</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {storeList.map((curStore,ind) => {
                        return (
                            <tr key={ind}>
                                <td>{curStore.name}</td>
                                <td>{curStore.employee_count}</td>
                                <td><Link to={"/stores/"+curStore.id+""}>View</Link> <Link to={"/stores/"+curStore.id+"/edit"}>Edit</Link> <button onClick={e => deleteStore(curStore.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={() => navigate("/stores/new")}>Add a store</button>
        </>
    )
};

export default AllStores;