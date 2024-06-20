import { useEffect, useState } from "react";
import axios from "axios";

function GetAllOpportunities() {
    let [opportunities, setOpportunities] = useState([]);

    const fetchAllOpportunity = async() => {
        try {
            console.log("Fetching all opportunities.");
            let response = await axios.get("http://localhost:3000/opportunities/get-all-opportunities");
            console.log(response);
            setOpportunities(response.data.data);
            console.log(opportunities);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchAllOpportunity();
    }, [])

    return(
    <>
    </>
    )
}

export default GetAllOpportunities;