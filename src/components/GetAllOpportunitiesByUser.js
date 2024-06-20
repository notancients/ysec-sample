import { useEffect, useState } from "react";
import axios from "axios";

function GetOpportunitiesByUserId() {
    let [opportunities, setOpportunities] = useState([]);
    let [userId, setUserId] = useState("6663e42389c57577f3526600");

    const fetchAllOpportunityByUserId = async() => {
        try {
            console.log("Fetching all opportunities.");
            let response = await axios.get(`http://localhost:3000/opportunities/get-opportunities-by-user?userId=${userId}`);
            console.log(response);
            setOpportunities(response.data.data);
            console.log(opportunities);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchAllOpportunityByUserId();
    }, [])

    return(
    <>
    </>
    )
}

export default GetOpportunitiesByUserId;