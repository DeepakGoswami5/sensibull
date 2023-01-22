import { Table } from "antd"
import { quotesColumns } from "../../constant/stockColumns"
import './quotes.css'
export const QuotesTable = ({ quotesTableData }) => {
    return (
        <Table columns={quotesColumns} dataSource={quotesTableData} className="quotes_table" />
    )
}