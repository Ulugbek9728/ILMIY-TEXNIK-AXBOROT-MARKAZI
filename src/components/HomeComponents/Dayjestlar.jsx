import React from 'react'
import '../../style/HomeComponents/HomeDayjest.scss'
import cardImg from '../../images/Rectangle 30.png'
import { useSelector } from 'react-redux';
import { getTransitson } from '../../translate';
function Dayjestlar() {
    const language = useSelector(state => state.lang.option);
    return (
        <div data-aos="zoom-in-down">
            <div className="d-flex justify-content-center" >
                <h2 data-aos="flip-left" className='text-center title '>{getTransitson(language, 'dayjest')}</h2>
            </div>
            <div className="container-fluid border">
                <div className="row pt-3">
                    <div className="col-xl-4">
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
                    <div className="col-xl-4">
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
                    <div className="col-xl-4">
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
                    <div className="d-flex justify-content-end">
                        <button className='btn btn-outline-primary px-5 me-3 mb-2'>{getTransitson(language, 'btn')}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dayjestlar