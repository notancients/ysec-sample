import { useEffect, useState } from "react";
import axios from "axios";

function GetAllYSER() {
    let [allYsers, setAllYsers] = useState([]);

    const fetchAllYsers = async() => {
        try {
            console.log("Fetching all YSERs.");
            let response = await axios.get("http://localhost:3001/feed/get-all-yser");
            console.log(response);
            setAllYsers(response.data.data);
            console.log(allYsers);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchAllYsers();
    }, [])

    return(
    <>
    </>
    )
}

export default GetAllYSER;