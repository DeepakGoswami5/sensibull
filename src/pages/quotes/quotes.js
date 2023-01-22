import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { QuotesTable } from "./quotesTable"
import './quotes.css'
export const Quotes = ({ props }) => {
    const { quotesId } = useParams();
    const [quotesData, setQuotesData] = useState([])
    const getQuotes = (url) => {
        const response = fetch(`${url}/${quotesId}`)
            .then(response => response.json())
            .catch(err => console.log(err))
        response.then(v => setQuotesData(v?.payload[quotesId]))
    }
    useEffect(() => {
        getQuotes("https://prototype.sbulltech.com/api/v2/quotes")
    }, [])
    return (
        <div className="quotesPage">
            <h1>{quotesId}</h1>
            <QuotesTable quotesTableData={quotesData} />
        </div>
    );
}