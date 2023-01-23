import { useEffect, useState } from "react"
import Papa from "papaparse"
import { StockTable } from "./stockTable"
import { DebounceSearch } from "./debounceSearch"
import './stock.css'
export const Stock = () => {
    const [filterStockData, setFilterStockData] = useState([])
    const [stockData, setStockData] = useState([])
    const getStockData = (url) => {
        const response = fetch(url)
            .then(response => response.text())
            .then(v => Papa.parse(v))
            .catch(err => console.log(err))
        response.then(v => { 
            setStockData(v.data.slice(1, -1)); 
            setFilterStockData(v.data.slice(1, -1)) 
        })
    }
    useEffect(() => {
        getStockData("https://prototype.sbulltech.com/api/v2/instruments")
    }, [])
    const handleChange = (value) => {
        const temp = stockData
        let tempStockData = []
        console.log("stockData",stockData)
        temp?.map((item) => {
            if (searchStringInArray(value, item)) {
                console.log("item",item)
                tempStockData.push(item)
            }
        })
        // setFilterStockData(tempStockData)
    };
    const searchStringInArray = (val, strArray) => {
        return strArray.find((str) => str === val);
    }
    return (
        <div className="stockPage">
            <DebounceSearch onhandleChange={handleChange} />
            <StockTable stockTableData={filterStockData} />
        </div>
    )
}