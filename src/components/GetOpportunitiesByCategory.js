import { useEffect, useState } from "react";
import axios from "axios";

function GetOpportunitiesByCategory() {
    let [opportunities, setOpportunities] = useState([]);
    let [category, setCategory] = useState(["Data Analyst", "UI Design"]);

    const fetchAllOpportunityByUserId = async() => {
        try {
            console.log("Fetching all opportunities.");
            let response = await axios.get(`http://localhost:3000/opportunities/get-opportunities-by-category`,
                {
                    params: {
                        category
                    }
                }
            );
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

export default GetOpportunitiesByCategory;