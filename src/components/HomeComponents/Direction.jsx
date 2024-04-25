import React from 'react'
import '../../style/HomeComponents/HomeDirection.scss'
import logo1 from '../../images/Subtract.png'
import logo2 from '../../images/Vector 4.png'
import logo3 from '../../images/File_dock_search_fill@2x.png'
import logo4 from '../../images/trending-up.png'
import logo5 from '../../images/users.png'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'




function Direction() {
    const { t } = useTranslation();

    return (
        <div data-aos="zoom-in-down">
            <div className="d-flex justify-content-center">
                <h2 data-aos="flip-left" className='text-center title '>{t("Home.nav2")}</h2>
            </div>
            <div className='container cards'>
                <div className="row align-items-center justify-content-center">

                    <Link to="/direction" className='cardBox col-lg-4 col-md-6'>
                        <div className="card">
                            <div className='d-flex justify-content-center'>
                                <img className='w-25 p-2' src={logo1} alt="404"/>
                            </div>
                            <h6 className='px-5'>
                                O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            </h6>
                            <p className='px-5'>
                                ARS-CoV-2 virusiga qarshi immun suti Qoraqalpogʻiston
                                fermer xoʻjaligidagi sigirlardan olingan...
                            </p>
                        </div>
                    </Link>
                    <div className='cardBox col-lg-4 col-md-6'>
                        <div className="card">
                            <div className='d-flex justify-content-center'>
                                <img className='w-25 p-2' src={logo2} alt="404"/>
                            </div>
                            <h6 className='px-5'>
                                O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            </h6>
                            <p className='px-5'>
                                ARS-CoV-2 virusiga qarshi immun suti Qoraqalpogʻiston
                                fermer xoʻjaligidagi sigirlardan olingan...
                            </p>
                        </div>
                    </div>
                    <div className='cardBox col-lg-4 col-md-6'>
                        <div className="card">
                            <div className='d-flex justify-content-center'>
                                <img className='w-25 p-2' src={logo3} alt="404"/>
                            </div>
                            <h6 className='px-5'>
                                O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            </h6>
                            <p className='px-5'>
                                ARS-CoV-2 virusiga qarshi immun suti Qoraqalpogʻiston
                                fermer xoʻjaligidagi sigirlardan olingan...
                            </p>
                        </div>
                    </div>
                    <div className='cardBox col-lg-4 col-md-6'>
                        <div className="card">
                            <div className='d-flex justify-content-center'>
                                <img className='w-25 p-2' src={logo4} alt="404"/>
                            </div>
                            <h6 className='px-5'>
                                O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            </h6>
                            <p className='px-5'>
                                ARS-CoV-2 virusiga qarshi immun suti Qoraqalpogʻiston
                                fermer xoʻjaligidagi sigirlardan olingan...
                            </p>
                        </div>
                    </div>
                    <div className='cardBox col-lg-4 col-md-6'>
                        <div className="card">
                            <div className='d-flex justify-content-center'>
                                <img className='w-25 p-2' src={logo5} alt="404"/>
                            </div>
                            <h6 className='px-5'>
                                O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            </h6>
                            <p className='px-5'>
                                ARS-CoV-2 virusiga qarshi immun suti Qoraqalpogʻiston
                                fermer xoʻjaligidagi sigirlardan olingan...
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Direction