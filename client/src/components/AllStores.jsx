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
                                <td><Link to={"/stores/"+curStore.id+""}>View</Link></td>
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