import { useEffect, useState } from "react";
import axios from "axios";

function DeleteOpportunity() {
    let [opportunities, setOpportunities] = useState([]);
    let [toDeleteOpportunityId, setToDeleteOpportunityId] = useState("667291f5da89f34a0cd48cac");

    const callDeleteOpportunity = async() => {
        try {
            console.log("Deleting an opportunity.");
            let response = await axios.delete(`http://localhost:3001/opportunities/delete-opportunity/${toDeleteOpportunityId}`);
            console.log(response);
            setToDeleteOpportunityId(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        callDeleteOpportunity();
    }, [])

    return(
    <>
    </>
    )
}

export default DeleteOpportunity;