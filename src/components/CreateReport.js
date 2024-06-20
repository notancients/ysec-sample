import { useEffect, useState } from "react";
import axios from "axios";

function CreateReport() {
    let [fullName, setFullName] = useState("Erjoy Constantine Lao Robles");
    let [email, setEmail] = useState("elrobles1@up.edu.ph");
    let [message, setMessage] = useState("This is just a sample report message.");


    const submitReport = async(e) => {
            console.log("Submitting report.");
            e.preventDefault();

            let request_body = {
                fullName: fullName,
                email: email,
                message: message
            }
        
        try {
            const response = await axios.post('https://ysec-api-pr-44.onrender.com/report//submit-report', request_body);

            console.log(response);
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
    <>
    <form id='form' onSubmit={submitReport}>
        <button className="submit-btn" type='submit'>Upload</button>
    </form>
    </>
    )
}

export default CreateReport;