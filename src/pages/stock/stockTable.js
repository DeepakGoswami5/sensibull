import { Table } from "antd"
import { stockColumns } from "../../constant/stockColumns"
import './stock.css'
export const StockTable = ({ stockTableData }) => {
    const sourceData = () => {
        let res = []
        stockTableData.map((item, index) => {
            let temp = {
                symbol: item[0] ? item[0] : "NA",
                name: item[1] ? item[1] : "NA",
                sector: item[2] ? item[2] : "NA",
            }
            res.push(temp)
        })
        return res
    }
    return (
        <Table columns={stockColumns} dataSource={sourceData()} className="stock_table" />
    )
}