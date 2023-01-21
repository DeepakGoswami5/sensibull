import { useEffect, useState } from "react"
import Papa from "papaparse"
import { StockTable } from "./stockTable"
import { DebounceSearch } from "./debounceSearch"
import './stock.css'
export const Stock = () => {
    const [stockData, setStockData] = useState([])
    const getStockData = (url) => {
        const response = fetch(url)
            .then(response => response.text())
            .then(v => Papa.parse(v))
            .catch(err => console.log(err))
        response.then(v => setStockData(v.data))
    }
    useEffect(() => {
        getStockData("https://prototype.sbulltech.com/api/v2/instruments")
    }, [])
    const handleChange = (value) => {
        const temp = stockData.slice(1, -1)
        let tempStockData = []
        console.log("temp",temp)
        temp?.map((item) => {
            console.log("item",item)
            if(searchStringInArray(value,item)){
                tempStockData.push(item)
            }
        })
        console.log("tempStockData",tempStockData)
        setStockData(tempStockData)
    };
    function searchStringInArray (val, strArray) {
        return strArray.find((str) => str === val);
    }
    return (
        <div className="stockPage">
            <DebounceSearch handleChange={handleChange}/>
            <StockTable stockTableData={stockData.slice(1, -1)} />
        </div>
    )
}