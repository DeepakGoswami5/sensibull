import { useParams } from "react-router-dom";
import Papa from "papaparse"
import { useEffect, useState } from "react"
export const Quotes = ({ props }) => {
    const { quotesId } = useParams();
    const [quotesData, setQuotesData] = useState([])
    const getQuotes = (url) => {
        const response = fetch(`${url}/${quotesId}`)
            .then(response => response.text())
            .then(v => Papa.parse(v))
            .catch(err => console.log(err))
        response.then(v => setQuotesData(v))
    }
    useEffect(() => {
        getQuotes("https://prototype.sbulltech.com/api/v2/quotes")
    }, [])
    console.log("quotesData",quotesData)
    return (
        <>
            <p>
                User ID:
            </p>
        </>
    );
}