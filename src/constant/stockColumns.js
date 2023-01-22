import { Link } from "react-router-dom"
export const stockColumns = [
    {
        title: "Symbol",
        dataIndex: "symbol",
        key: "symbol",
        render: (text) => <Link to={`/quotes/${text}`}>{text}</Link>
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Sector",
        dataIndex: "sector",
        key: "sector",
    }
]

export const quotesColumns = [
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Time",
        dataIndex: "time",
        key: "time",
        sorter: (a, b) => new Date(a.time) - new Date(b.time)
    },
    {
        title: "Valid Till",
        dataIndex: "valid_till",
        key: "valid_till",
    }
]