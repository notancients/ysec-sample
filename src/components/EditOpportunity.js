import { useEffect, useState } from "react";
import axios from "axios";

function EditOpportunity() {
    let [opportunityId, setOpportunityId] = useState("6672d7726ff0aaa68e853254");
    let [userId, setUserId] = useState("6663e42389c57577f3526600");
    let [title, setTitle] = useState("Studying like hell.");
    let [description, setDescription] = useState("MonkeyType");
    let [category, setCategory] = useState(["Data Analyst", "UI Design"]);
    let [salary, setSalary] = useState(123);
    let [companyName, setCompanyName] = useState("Eye-key-ya");
    let [requirements, setRequirements] = useState(["Doctorate", "Solidity"]);
    let [employmentType, setEmploymentType] = useState("Full-time");


    const callEditOpportunity = async() => {
        try {
            console.log("Editing an opportunity.");

            let request_body = {
                opportunityId: opportunityId,
                userId: userId,
                title: title,
                description: description,
                category: category,
                salary: salary,
                companyName: companyName,
                requirements: requirements,
                employmentType: employmentType
            }

            let response = await axios.patch(`http://localhost:3001/opportunities/edit-opportunity`, request_body);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        callEditOpportunity();
    }, [])

    return(
    <>
    </>
    )
}

export default EditOpportunity;