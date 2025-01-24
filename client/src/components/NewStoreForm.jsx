import { useState } from "react";
import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

const NewStoreForm = () => {
    const [formInputs, setFormInputs] = useState({
        "name": "",
        "employee_count": "",
        "description": ""
    })
    const [formErrors, setFormErrors] = useState({})

    const updateFormData = (e) => {
        setFormInputs({...formInputs, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log("Button clicked");
        axios.post("http://localhost:5000/api/v1/stores/new", formInputs, {
            headers: {
                'Content-Type': 'multipart/form-data', // To allow for flexibility in case we pass in files and other stuff down the road
                'Access-Control-Allow-Origin': 'http://localhost:5000' // Needed so back end can grab data
            }
        })
            .then(res => {
                setFormInputs({
                    "name": "",
                    "employee_count": "",
                    "description": ""
                });
                setFormErrors({});
                // Navigate to new route soon!
            })
            .catch(err => {
                // console.log(err);
                // console.log(err.response);
                // console.log(err.response.data);
                setFormErrors(err.response.data); // Grab error messages and save them in state
            })
    }

    return (
        <>
            <h1>Enter a new store:</h1>
            <form id="store-form" encType="multipart/form-data" onSubmit={handleFormSubmit}>
                <div>
                    {formErrors.name ? formErrors.name.map((msg) => <p>{msg}</p>) : ''}
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={formInputs.name} onChange={e => updateFormData(e)} />
                </div>
                <div>
                    {formErrors.employee_count ? formErrors.employee_count.map((msg) => <p>{msg}</p>) : ''}
                    <label htmlFor="employee_count">Employee count: </label>
                    <input type="number" name="employee_count" id="employee_count" value={formInputs.employee_count} onChange={e => updateFormData(e)} />
                </div>
                <div>
                    {formErrors.description ? formErrors.description.map((msg) => <p>{msg}</p>) : ''}
                    <label htmlFor="description">Description: </label>
                    <textarea name="description" id="description" value={formInputs.description} onChange={e => updateFormData(e)} />
                </div>
                <input type="submit" value="Add store" />
            </form>
            
        </>
    )
}

export default NewStoreForm;