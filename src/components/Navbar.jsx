import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons'
import logo from '../images/лого_ЦНТИ_белый.png'
import '../style/Navbar.scss'

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher/index.js";



function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top" >
                <div className="container">
                    <Link to='/' className="navbar-brand d-flex align-items-center " >
                        <img className='w-75 me-3' src={logo} alt="img" />
                        <p className='text-white'>{t("Home.logo1")} <br />{t("Home.logo2")}</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse position-relative" id="navbarNav">
                        <ul className="navbar-nav w-100 gap-lg-3 ">
                            <li className="nav-item">
                                <Link to='/news' className="nav-link text-white">{t("Home.nav1")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/all_direction' className="nav-link text-white">{t("Home.nav2")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/dayjest' className="nav-link text-white">{t("Home.nav3")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/untitled' className="nav-link text-white">{t("Home.aboutUs")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white">{t("Home.nav5")}</Link>
                            </li>
                            <li className='nav-item'>
                                <LanguageSwitcher />
                            </li>
                            <li className='nav-item search-input d-flex'>
                                <button
                                    className="btn btn-search btn-outline-light pt-0 mt-1"
                                    onClick={() => { setIsHovered(!isHovered) }}>
                                    {!isHovered ? <SearchOutlined /> : <CloseOutlined />}
                                </button>
                                {isHovered &&
                                    <div className='d-flex input-animation'>
                                        <input className="form-control  pt-0 mt-1" placeholder={t("Home.search")} type="text" />
                                        <button className='btn btn-light pt-0 mt-1'><SearchOutlined />
                                        </button>
                                    </div>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar