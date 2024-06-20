import { useEffect, useState } from "react";
import axios from "axios";

function GetAllReports() {
    let [report, setReport] = useState([]);

    const fetchAllReport = async() => {
        try {
            console.log("Fetching all reports.");
            let response = await axios.get("https://ysec-api-pr-44.onrender.com/report/get-all-reports");
            console.log(response);
            setReport(response.data.data);
            console.log(report);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchAllReport();
    }, [])

    return(
    <>
    </>
    )
}

export default GetAllReports;