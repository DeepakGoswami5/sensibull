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