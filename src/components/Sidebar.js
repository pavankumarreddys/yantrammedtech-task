import "./Styles/Sidebar.css"
import { MdDashboard } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsBagPlusFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useContext, useState } from "react";
import MyContext from "./MyContext";

const Sidebar = () => {

    const {sidebarActiveName,sideBarTriggered} = useContext(MyContext)

    const [sidebarSubItemsShow,setSidebarSubItemsShow] = useState([
        {title:"Order Management"},
        {title:"Order"},
    ])

    const sidebarItems = [
        { id: 1, title: "Dashboard", icon: MdDashboard },
        { id: 2, title: "In stock", icon: FaHandHoldingMedical },
        { id: 3, title: "Ordered", icon: PiShoppingCartSimpleFill },
        { id: 4, title: "Expenses", icon: MdDashboard },
        { id: 5, title: "Order Management", icon: BsBagPlusFill, subItems: [{ id: 5.1, title: "IPD/Emergency", }, { id: 5.2, title: "OPD", }] },
    ]

    return (
        <div className="side-bar-main-container">
            <ul className="sidebar-ul">
                {sidebarItems.map((each) => (
                    <li onClick={() => {sideBarTriggered(each.title) }} className={sidebarActiveName == each.title?"sidebar-li-container sidebar-click-color":"sidebar-li-container"} >
                        <each.icon style={{ fontSize: '24px', color: "white" }} />
                        <span className="sidebar-li" >{each.title}</span>
                        {each.subItems?.length > 0 &&
                            <FaChevronDown onClick={()=>{alert("chield")}} style={{ fontSize: '24px', color: "white", marginLeft: '4px' }} />
                        }
                    </li>
                ))}
            </ul>

            <div>
                <hr className="hr-line-style" />
                <ul className="sidebar-ul">
                    <li className="sidebar-li-container">
                        <CgProfile style={{ fontSize: '24px', color: "white" }} />
                        <span className="sidebar-li">Profile</span>
                    </li>

                    <li className="sidebar-li-container">
                        <BiSolidHelpCircle style={{ fontSize: '24px', color: "white" }} />
                        <span className="sidebar-li">Help</span>
                    </li>

                    <li className="sidebar-li-container">
                        <IoLogOut style={{ fontSize: '24px', color: "white" }} />
                        <span className="sidebar-li ">Logout</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default Sidebar