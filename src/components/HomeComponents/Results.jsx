import React from 'react'
import '../../style/HomeComponents/HomeNatija.scss'
import bg from '../../images/Carusel1.jpg'
import { useSelector } from 'react-redux';
import { getTransitson } from '../../translate';
function Natijalar() {
    const language = useSelector(state => state.lang.option);
    return (
        <div data-aos="zoom-in-down">
            <div className="d-flex justify-content-center" >
                <h2 data-aos="flip-left" className='text-center title '>{getTransitson(language,'results')}</h2>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-xl-8 p-0 m-0" style={{ backgroundImage: `url(${bg})`, height: '500px' }}>
                        <div className='d-flex align-items-end '>
                            <div className='content'>
                                <div className="d-flex justify-content-end">
                                    <div className="bg-light me-xl-3 px-4">
                                        26.04.2023
                                    </div>
                                </div>
                                <h1 className='text-light mb-2'>O'zbekistonda sun'iy qor va yomg'ir
                                    yog'diriladi</h1>
                                <div className="d-flex justify-content-end">
                                    <button className='btn btn-outline-light px-5'>{getTransitson(language,'btn')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="row">
                            <div className=" col-sm-6 col-xl-12  p-0" style={{ backgroundImage: `url(${bg})`, height: '250px' }}>
                                <div className='d-flex align-items-end '>
                                    <div className='content'>
                                        <div className="d-flex justify-content-end">
                                            <div className="bg-light me-3 px-4">
                                                26.04.2023
                                            </div>
                                        </div>
                                        <h5 className='text-light mb-2'>O'zbekistonda sun'iy qor va yomg'ir
                                            yog'diriladi</h5>
                                        <div className="d-flex justify-content-end">
                                            <button className='btn btn-outline-light px-5'>{getTransitson(language,'btn')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-sm-6 col-xl-12  p-0" style={{ backgroundImage: `url(${bg})`, height: '250px' }}>
                                <div className='d-flex align-items-end '>
                                    <div className='content'>
                                        <div className="d-flex justify-content-end">
                                            <div className="bg-light me-3 px-4">
                                                26.04.2023
                                            </div>
                                        </div>
                                        <h5 className='text-light mb-2'>O'zbekistonda sun'iy qor va yomg'ir
                                            yog'diriladi</h5>
                                        <div className="d-flex justify-content-end">
                                            <button className='btn btn-outline-light px-5'>{getTransitson(language,'btn')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Natijalar