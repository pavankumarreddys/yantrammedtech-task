import './Styles/Header.css';
import { BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <div className="header-main-container">
            <div className="logo-container">
                <img className="header-logo" src="https://play-lh.googleusercontent.com/U9EI1UtKA5s7AOyTyI2URvpGnmcf_NNQ_3v2AuQ95OnTm_odJZhQFth9Y1kh57IEuzfw=s300" />
                <h4 className="logo-title spaced-text">YANTRAM   </h4>
                <p className="logo-sub-title spaced-text">MEDTECH</p>
            </div>
            <div className="search-container">
                <input class="header-search" placeholder="Search" type="search" />
                <button type="submit" className="search-button"><BsSearch style={{ fontSize: '26px',margin:"8px", color:"white" }}/></button>
            </div>

            <div className="user-container">
            <img className="user-logo" src="https://img.freepik.com/premium-photo/man-try-hacker-computer-cyber-crime-photo_849715-11613.jpg?w=740" />
                <h4 className="logo-title">Kanchi Praveen</h4>
                <p className="logo-sub-title">Pharmacy Admin</p>
               
            </div>
        </div>
    )
}

export default Header