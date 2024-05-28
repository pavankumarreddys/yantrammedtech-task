import Header from "./Header"
import "./Styles/Home.css"
import Sidebar from "./Sidebar"
import { FaCalendar } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

import { BarChart, Bar, Cell, LabelList, XAxis, Label, Tooltip, PieChart, Pie, Legend } from 'recharts';

import { PiEggCrackDuotone } from "react-icons/pi";
import { AiFillAlert } from "react-icons/ai";
import { useContext, useState } from "react";
import MyContext from "./MyContext";
import { FaPlus } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";

import { FaCaretDown } from "react-icons/fa";

const data = [
    { name: 'Out Patient', value: 2000, color: 'green' },
    { name: 'In Patient', value: 4000, color: 'orange' },
    { name: 'Emergency', value: 7000, color: 'skyblue' }
];

const pieChartData = [
    { name: 'In Stock', value: 2000, color: 'green' },
    { name: 'Expired', value: 4000, color: 'orange' },
    { name: 'Used', value: 7000, color: 'skyblue' }
];

const sampleexpiredrugData = [
    { id: "1", title: "Artane ", date: "19 May 20024", isChecked: false },
    { id: "2", title: "Artane ", date: "19 May 20024", isChecked: false },
    { id: "3", title: "Benzehexol", date: "19 May 20024", isChecked: false },
    { id: "4", title: "Artane", date: "19 May 20024", isChecked: false },
    { id: "5", title: "Benzehexol", date: "19 May 20024", isChecked: false },
]

const sampleproductsStocksData = [
    { id: "1", title: "Tarceva 150mg ", qty: "5", isChecked: false, isOutofStock: false },
    { id: "2", title: "Thrombophob ", qty: "0", isChecked: false, isOutofStock: true },
    { id: "3", title: "AB Phylline ", qty: "0", isChecked: false, isOutofStock: false },
    { id: "4", title: "Azee 500 ", qty: "6", isChecked: false, isOutofStock: true },
    { id: "5", title: "Tarceva 150mg ", qty: "10", isChecked: false, isOutofStock: false },
]

const medicines = [
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1102, name: 'Actorise 40', category: 'Injection', hsnSac: 9012, stockQty: 20, expDate: '05 12 2025', location: 'ICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1102, name: 'Actorise 40', category: 'Injection', hsnSac: 9012, stockQty: 20, expDate: '05 12 2025', location: 'ICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1102, name: 'Actorise 40', category: 'Injection', hsnSac: 9012, stockQty: 20, expDate: '05 12 2025', location: 'ICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1102, name: 'Actorise 40', category: 'Injection', hsnSac: 9012, stockQty: 20, expDate: '05 12 2025', location: 'ICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },
    { medID: 1101, name: 'Avastin 100mg', category: 'Injection', hsnSac: 3004, stockQty: 10, expDate: '05 05 2025', location: 'NICU' },

];

const tableHeaderStyle = {
    background: '#49B6FF',
    width: '100%',
    padding: '15px',
    position: 'sticky',
    top: 0,
    zIndex: 1,
};

const thStyle = {
    width: 'calc(100% / 7)',
    padding: '10px',
};

const tbStyle = {
    padding: '10px',
};

const tableContainerStyle = {
    height: '70vh',
    overflowY: 'scroll',
};




const Home = () => {
    const { sidebarActiveName } = useContext(MyContext)

    const [orderedBtnActive , setOrderedBtnActive] = useState(true)


    const CustomBar = (props) => {
        const { x, y, width, height, fill } = props;

        // Define the border radius
        const borderRadius = 10;

        // Construct the SVG path for a rounded rectangle
        const path = `M${x},${y + borderRadius} 
                      A${borderRadius},${borderRadius} 0 0,1 ${x + borderRadius},${y} 
                      H${x + width - borderRadius} 
                      A${borderRadius},${borderRadius} 0 0,1 ${x + width},${y + borderRadius} 
                      V${y + height} 
                      H${x} 
                      Z`;

        return <path d={path} fill={fill} />;
    };

    const DashboardUi = () => {
        return (
            <>
                <div className="col-6 mt-3">
                    <h4>Departmental Medication Consumption Analysis</h4>
                    <div className="bar-chart-main-container">


                        <div className="bar-chart-sub-container">

                            <div>


                                <BarChart width={250} height={300} data={data}>
                                    <XAxis dataKey="n" />
                                    <Tooltip />
                                    <Bar dataKey="value" shape={<CustomBar />} >
                                        <LabelList dataKey="value" position="top" />
                                        {
                                            data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))
                                        }
                                    </Bar>

                                </BarChart>
                            </div>


                            <ul className="barchar-ul">
                                <li class="">
                                    <button className="dot-green"></button>
                                    <span>Out Patient</span>
                                </li>

                                <li class="">
                                    <button className="dot-orange"></button>
                                    <span>In Patient</span>
                                </li>

                                <li class="">
                                    <button className="dot-blue"></button>
                                    <span>Emergency</span>
                                </li>

                            </ul>


                        </div>

                        <p className="text-center">Medicine Consumption</p>
                    </div>

                </div>

                <div className="col-6 mt-3">
                    <h4>Medicine Inventory</h4>
                    <div className="bar-chart-main-container">


                        <div className="bar-chart-sub-container">

                            <div>
                                <PieChart width={250} height={300}>
                                    <Pie
                                        data={pieChartData}
                                        cx={125}
                                        cy={125}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label
                                    >
                                        {pieChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => `$${value}`} />
                                    <Label
                                        value="Value"
                                        position="center"
                                        style={{ fontSize: '12px', fill: 'white' }}
                                    />
                                </PieChart>
                            </div>





                            <ul className="barchar-ul">
                                <li class="">
                                    <button className="dot-green"></button>
                                    <span>In Stock</span>
                                </li>

                                <li class="">
                                    <button className="dot-orange"></button>
                                    <span>Expired</span>
                                </li>

                                <li class="">
                                    <button className="dot-blue"></button>
                                    <span>Used</span>
                                </li>

                            </ul>


                        </div>

                        <p className="text-center">Medicine</p>
                    </div>
                </div>

                <div className="col-6 mt-3">
                    <div className="expired-product-main-container">
                        <div className="expired-product-container">
                            <h4>EXPIRED PRODUCT</h4>
                            <IoMdRefresh style={{ fontSize: '36px', marginRight: "10px", color: "white" }} />
                        </div>
                        <div className="expired-product-container-data">

                            <div className="three-ites-headings">
                                <h4 className="w-32 ml-2">Drug name</h4>
                                <h4 className="w-64">Expiry Date</h4>
                                <h4 className="w-24">Replace</h4>
                            </div>
                            <ul className="barchar-ul">
                                {sampleexpiredrugData.map((each) => (
                                    <li>
                                        <div className="three-items-data">
                                            <p className="w-32 ml-3">{each.title}</p>
                                            <div className="w-64  d-flex justify-content-between">
                                                <p >{each.date}</p>
                                                <AiFillAlert style={{ fontSize: '30px', marginRight: "10px", color: "red" }} />

                                            </div>

                                            <div className="w-24">

                                                <input className="ml-5" type="checkbox" id={each.id} />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>



                        </div>

                    </div>

                </div>

                <div className="col-6 mt-3">
                    <div className="expired-product-main-container">
                        <div className="expired-product-container">
                            <h4>PROODUCTS WITH lOW STOCKS</h4>
                            <IoMdRefresh style={{ fontSize: '36px', marginRight: "10px", color: "white" }} />
                        </div>
                        <div className="expired-product-container-data">

                            <div className="three-ites-headings">
                                <h4 className="w-64 ml-2">Drug name</h4>
                                <h4 className="w-24 ">Quantity</h4>
                                <h4 className="w-24">Order</h4>
                            </div>
                            <ul className="barchar-ul">
                                {sampleproductsStocksData.map((each) => (
                                    <li>
                                        <div className="three-items-data">
                                            <div className="w-64 ml-3 mb-2 d-flex justify-content-between">
                                                <p>{each.title}</p>
                                                <button className={each.isOutofStock ? "Out-of-stock rounded-full min-w-32 text-white" : "rounded-full lowstock-color min-w-32 text-white"}>{each.isOutofStock ? "Out of stock" : "Low stock"}</button>

                                            </div>
                                            <p className="w-24">{each.qty}</p>
                                            <div className="w-24">
                                                <input className="ml-5" type="checkbox" id={each.id} />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>



                        </div>

                    </div>

                </div>

            </>
        )
    }

    const instockUi = () => {
        return (
            <>
                <div className="col-12 mt-3 in-stock-main-container">
                    <div className="mr-3">
                        <button className="d-flex justify-content-between align-items-center upload-btn rounded-full p-2 min-w-32">
                            <SiMicrosoftexcel style={{ fontSize: '18px', marginRight: "5px", color: "white" }} />
                            Upload
                            <FaCaretDown style={{ fontSize: '18px', marginRight: "5px", color: "white" }} />

                        </button>

                    </div>


                    <div className="">
                        <button className="d-flex justify-content-center align-items-center upload-btn rounded-full p-2 min-w-32">
                            <FaPlus style={{ fontSize: '18px', marginRight: "5px", color: "white" }} />
                            Add Stock
                        </button>
                    </div>

                </div>


                <div className="col-12 mt-3 p-3">
                    <div style={tableContainerStyle}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead style={tableHeaderStyle}>
                                <tr >
                                    <th style={thStyle}>Med ID</th>
                                    <th style={thStyle}>Medicine Name</th>
                                    <th style={thStyle}>Category</th>
                                    <th style={thStyle}>HSN/ SAC</th>
                                    <th style={thStyle}>Stock Qty</th>
                                    <th style={thStyle}>Exp Date</th>
                                    <th style={thStyle}>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medicines.map((medicine) => (
                                    <tr key={medicine.medID}>
                                        <td style={tbStyle}>{medicine.medID}</td>
                                        <td style={tbStyle}>{medicine.name}</td>
                                        <td style={tbStyle}>{medicine.category}</td>
                                        <td style={tbStyle}>{medicine.hsnSac}</td>
                                        <td style={tbStyle}>{medicine.stockQty}</td>
                                        <td style={tbStyle}>{medicine.expDate}</td>
                                        <td style={tbStyle}>{medicine.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </>
        )
    }

    const OrderedUi = () => {
        return (
            <>


                <div className="col-12 mt-3 in-stock-main-container d-flex justify-content-between align-items-center">
                    <div className="ordered-buttons-container">
                        <button onClick={()=>{setOrderedBtnActive(true)}} className={orderedBtnActive?"bg-warning text-white font-bold text-xl rounded-lg p-2 min-w-32":"font-bold text-xl rounded-lg p-2 min-w-32"}>
                            Ordered

                        </button>
                        <button onClick={()=>{setOrderedBtnActive(false)}} className={!orderedBtnActive?"bg-warning text-white font-bold text-xl rounded-lg p-2 min-w-32" :"font-bold text-xl rounded-lg p-2 min-w-32"} >
                            Returned

                        </button>
                    </div>

                    <div className="d-flex">
                        <div className="mr-3">
                            <button className="d-flex justify-content-between align-items-center upload-btn rounded-full p-2 min-w-32">
                                <SiMicrosoftexcel style={{ fontSize: '18px', marginRight: "5px", color: "white" }} />
                                Upload
                                <FaCaretDown style={{ fontSize: '18px', marginRight: "5px", color: "white" }} />

                            </button>

                        </div>
                        <div className="mr-3">
                            <button className="d-flex justify-content-center align-items-center upload-btn rounded-full p-2 min-w-24">
                                order
                            </button>

                        </div>
                        <div className="">
                            <button className="d-flex justify-content-center align-items-center upload-btn rounded-full p-2 min-w-32">
                                <FaPlus style={{ fontSize: '18px', marginRight: "5px", color: "white" }} />
                                Add Stock
                            </button>
                        </div>
                    </div>

                </div>


                <div className="col-12 mt-3 p-3">
                    <div style={tableContainerStyle}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead style={tableHeaderStyle}>
                                <tr >
                                    <th style={thStyle}>Med ID</th>
                                    <th style={thStyle}>Medicine Name</th>
                                    <th style={thStyle}>Category</th>
                                    <th style={thStyle}>HSN/ SAC</th>
                                    <th style={thStyle}>Stock Qty</th>
                                    <th style={thStyle}>Exp Date</th>
                                    <th style={thStyle}>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medicines.map((medicine) => (
                                    <tr key={medicine.medID}>
                                        <td style={tbStyle}>{medicine.medID}</td>
                                        <td style={tbStyle}>{medicine.name}</td>
                                        <td style={tbStyle}>{medicine.category}</td>
                                        <td style={tbStyle}>{medicine.hsnSac}</td>
                                        <td style={tbStyle}>{medicine.stockQty}</td>
                                        <td style={tbStyle}>{medicine.expDate}</td>
                                        <td style={tbStyle}>{medicine.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </>
        )
    }

    return (
        <div className="home-main-container ">
            <Header />
            <div className="d-flex mt-3">
                <Sidebar />
                <div className="container-fluid m-3 ">
                    <div className="row">
                        <div className="col-12 first-main-container">
                            <button className="today-button">Today</button>
                            <div className="date-white-container">
                                <h4 style={{ fontSize: '24px', marginLeft: "10px" }}>01 JAN 2024 - 30 MAR 2024</h4>
                                <div className="vertical-line"></div>
                                <FaCalendar style={{ fontSize: '36px', marginRight: "10px", color: "#F59706" }} />
                            </div>
                        </div>
                        {sidebarActiveName == "Dashboard" && DashboardUi()}
                        {sidebarActiveName == "In stock" && instockUi()}
                        {sidebarActiveName == "Ordered" && OrderedUi()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home