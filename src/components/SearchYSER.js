import { useEffect, useState } from "react";
import axios from "axios";

function SearchYser() {
    let [searchedYSER, setSearchedYSER] = useState([]);
    let [name, setName] = useState("John");
    let [industry, setIndustry] = useState("Web Development");
    let [country, setCountry] = useState("Philippines");
    let [companyName, setCompanyNamee] = useState("Bright Burn")

    const fetchSearchYser = async() => {
        try {
            console.log("Searching for YSERs.");
            let response = await axios.get(
                `http://localhost:3000/feed/search-yser?name=${name}&industry=${industry}&country=${country}&companyName=${companyName}`
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchSearchYser();
    }, [])

    return(
    <>
    </>
    )
}

export default SearchYser;