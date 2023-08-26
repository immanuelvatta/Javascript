import axios from "axios";


export const getAuthorList = (setAuthorList) => {
    // calling the DB to get all the products
    axios
        .get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res.data);
            // setting state with all products
            setAuthorList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};