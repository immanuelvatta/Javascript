import axios from "axios";


export const getJobList = (setJobList) => {
    // calling the DB to get all the products
    axios
        .get("http://localhost:8000/api/job")
        .then((res) => {
            console.log(res.data);
            // setting state with all products
            setJobList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};