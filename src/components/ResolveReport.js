import { useEffect, useState } from "react";
import axios from "axios";

function ResolveReport() {
    let [reportId, setReportId] = useState("667324f7a5d0ad6f7f6a4c6d");

    const callResolveReport = async() => {
        try {
            console.log("Fetching all reports.");

            let request_body = {
                reportId: reportId
            };

            let response = await axios.patch("https://ysec-api-pr-44.onrender.com/report/resolve-report",
                request_body
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        callResolveReport();
    }, [])

    return(
    <>
    </>
    )
}

export default ResolveReport;