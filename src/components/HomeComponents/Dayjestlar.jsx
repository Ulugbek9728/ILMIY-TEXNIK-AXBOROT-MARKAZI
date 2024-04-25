import React from 'react'
import '../../style/HomeComponents/HomeDayjest.scss'
import cardImg from '../../images/Rectangle 30.png'
import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom'


function Dayjestlar() {
    const { t } = useTranslation();
    return (
        <div data-aos="zoom-in-down">
            <div className="d-flex justify-content-center" >
                <h2 data-aos="flip-left" className='text-center title '>{t("Home.nav3")}</h2>
            </div>
            <div className="container-fluid border">
                <div className="container ">
                    <div className="row py-3 align-items-center justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <img src={cardImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">O'zbekistonda sun'iy qor va
                                        yomg'ir yog'diriladi</h5>
                                    <hr />
                                    <p className='text-center'>18-May</p>
                                    <p className='text-center'>2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <img src={cardImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">O'zbekistonda sun'iy qor va
                                        yomg'ir yog'diriladi</h5>
                                    <hr />
                                    <p className='text-center'>18-May</p>
                                    <p className='text-center'>2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <img src={cardImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">O'zbekistonda sun'iy qor va
                                        yomg'ir yog'diriladi</h5>
                                    <hr />
                                    <p className='text-center'>18-May</p>
                                    <p className='text-center'>2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mb-4">
                            <Link to='/dayjest'>
                                <button className='btn px-5 me-3 mb-2'>{t("Home.btn")}</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dayjestlar