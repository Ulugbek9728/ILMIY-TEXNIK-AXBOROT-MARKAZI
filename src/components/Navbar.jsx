import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons'
import logo from '../images/лого_ЦНТИ_белый.png'
import { getTransitson, languages } from '../translate';
import '../style/Navbar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setTranseltRedux } from '../redux/reducers/translet'
function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    // const [language, setLanguage] = useState('uz');
    const dispatch = useDispatch();
    const language = useSelector(state => state.lang.option);
    console.log(language)
    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top" >
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center " >
                        <img className='w-75 me-3' src={logo} alt="img" />
                        <p className='text-white'>{getTransitson(language, 'logo1')} <br />{getTransitson(language, 'logo2')}</p></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse position-relative" id="navbarNav">
                        <ul className="navbar-nav w-100 gap-lg-3 ">
                            <li className="nav-item">
                                <Link  className="nav-link text-white" href='home'>{getTransitson(language, 'nav1')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white">{getTransitson(language, 'nav2')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white">{getTransitson(language, 'nav3')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white">{getTransitson(language, 'nav4')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white">{getTransitson(language, 'nav5')}</Link>
                            </li>
                            <li className='nav-item'>
                                <select defaultValue={languages[0]} aria-label="Default select example" className="nav-link form-select-sm p-1" style={{marginTop:'7px'}} onChange={(event) => dispatch(setTranseltRedux(event.target.value))} >
                                    {languages.map(language => {
                                        return <option key={language}>{language}</option>
                                    })}
                                </select>
                            </li>
                            <li className='nav-item search-input d-flex'>
                                <button
                                    className="btn btn-search btn-outline-light pt-0 mt-1"
                                    onClick={() => { setIsHovered(!isHovered) }}>
                                    {!isHovered ? <SearchOutlined /> : <CloseOutlined />}
                                </button>
                                {isHovered &&
                                    <div className='d-flex input-animation'>
                                        <input className="form-control  pt-0 mt-1" placeholder={getTransitson(language, 'search')} type="text" />
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