import React from 'react'
import '../../style/HomeComponents/HomeDirection.scss'
import logo1 from '../../images/Subtract.png'
import logo2 from '../../images/Vector 4.png'
import logo3 from '../../images/File_dock_search_fill@2x.png'
import logo4 from '../../images/trending-up.png'
import logo5 from '../../images/users.png'
import { useSelector } from 'react-redux'
import { getTransitson } from '../../translate'
// import { useEffect } from 'react'
function Direction() {
    const language = useSelector(state => state.lang.option);
    console.log(language)
    console.log(getTransitson(language, 'btn'))
    return (
        <div  data-aos="zoom-in-down">
            <div className="d-flex justify-content-center">
                <h2  data-aos="flip-left" className='text-center title '>{getTransitson(language, 'direction')}</h2>
            </div>
            <div className='container cards'>
                <div className="row my-xl-4">
                    <div className='col-xl-4'>
                        <div className="card">
                        <div className='d-flex justify-content-center'>
                            <img className='w-25 p-2' src={logo1} alt="404" />
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

                    <div className='col-xl-4'>
                        <div className="card">
                        <div className='d-flex justify-content-center'>
                            <img className='w-25 p-2' src={logo2} alt="404" />
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
               
                    <div className='col-xl-4 '>
                        <div className="card">
                        <div className='d-flex justify-content-center'>
                            <img className='w-25 p-2' src={logo3} alt="404" />
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
                <div className="row mb-xl-4">
                    <div className="col-xl-2"></div>
                    <div className='col-xl-4'>
                        <div className="card">
                        <div className='d-flex justify-content-center'>
                            <img className='w-25 p-2' src={logo4} alt="404" />
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
                    <div className='col-xl-4'>
                        <div className="card">
                        <div className='d-flex justify-content-center'>
                            <img className='w-25 p-2' src={logo5} alt="404" />
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