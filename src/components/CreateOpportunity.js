import { useEffect, useState } from "react";
import axios from "axios";

function CreateOpportunity() {
    let [allYsers, setAllYsers] = useState([]);
    let [files, setFiles] = useState([]);
    let [userId, setUserId] = useState("6663e42389c57577f3526600");
    let [title, setTitle] = useState("Studying like hell.");
    let [description, setDescription] = useState("College student");
    let [category, setCategory] = useState(["Data Analyst", "UI Design"]);
    let [salary, setSalary] = useState(123);
    let [companyName, setCompanyName] = useState("Eye-key-ya");
    let [requirements, setRequirements] = useState(["Doctorate", "Solidity"]);
    let [employmentType, setEmploymentType] = useState("Full-time");

    function handleFileChange(event) {
        if (event.target.files) {
            setFiles([...files, ...Array.from(event.target.files)]);
        }
        console.log(files);

    }

    const submitCreateOpportunity = async(e) => {
            console.log("Submitting opportunity.");
            e.preventDefault();

            const formData = new FormData();

            for(let i =0; i < files.length; i++) {
                formData.append("files", files[i]);
            } // can be swapped to forEach but doing it this way just to be safe
            category.forEach((element) => formData.append("category", element));
            formData.append("userId", userId);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("salary", salary);
            formData.append("companyName", companyName);
            formData.append("employmentType", employmentType);
            requirements.forEach((element) => formData.append("requirements", element));
        
        try {
            const response = await axios.post('http://localhost:3001/opportunities/create-opportunity', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
    <>
    <form id='form' onSubmit={submitCreateOpportunity}>
        <div className="input-group">
            <input id='files' type="file" multiple onChange={handleFileChange}/>
        </div>
        <button className="submit-btn" type='submit'>Upload</button>
    </form>
    </>
    )
}

export default CreateOpportunity;