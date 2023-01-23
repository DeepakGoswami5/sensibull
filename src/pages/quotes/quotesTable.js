import { useEffect } from "react"
import { Table } from "antd"
import { quotesColumns } from "../../constant/stockColumns"
import './quotes.css'
export const QuotesTable = ({ quotesTableData }) => {

    useEffect(() => {
        setInterval(() => {
            const currentTime = new Date.now()
            quotesTableData.map(({ price, time, valid_till }) => {
                if (valid_till > currentTime) {
                    window.location.reload()
                }
            });
        }, 1000);
    });
    return (
        <Table columns={quotesColumns} dataSource={quotesTableData} className="quotes_table" />
    )
}