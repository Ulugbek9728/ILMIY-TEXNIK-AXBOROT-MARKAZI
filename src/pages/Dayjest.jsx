import React from 'react'
import '../style/Dayjest.scss'
import dayjestImg from '../images/odam.png'
import asideImg from '../images/logo.png'

function Dayjest() {
    return (
        <div className="container">
            <div className="d-flex justify-content-between gap-2 mt-5">
                <div className="col-9 shadow px-2 py-3">
                    <div className='d-flex gap-3 '>
                        <div className="dayjest__card  shadow px-2">
                            <img src={dayjestImg} alt="dayjest" width={400} />
                            <p className='dayjest__card--text fs-4 fw-semibold px-3 mt-2'>O'zbekistonda sun'iy qor va
                                yomg'ir yog'diriladi
                            </p>

                            <div className='dayjest__card--line'></div>
                            <div className="d-flex flex-column align-items-center fw-semibold mb-3">
                                <span className='dayjest__card--date'>27 May</span>
                                <span className='dayjest__card--year'>2023</span>
                            </div>
                        </div>
                        <p className='fs-3 fw-bold'>O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                        </p>
                    </div>

                    <span className='dayjest__line'></span>

                    <div className='d-flex gap-3 '>
                        <div className="dayjest__card  shadow px-2">
                            <img src={dayjestImg} alt="dayjest" width={400} />
                            <p className='dayjest__card--text fs-4 fw-semibold px-3 mt-2'>O'zbekistonda sun'iy qor va
                                yomg'ir yog'diriladi
                            </p>

                            <div className='dayjest__card--line'></div>
                            <div className="d-flex flex-column align-items-center fw-semibold mb-3">
                                <span className='dayjest__card--date'>27 May</span>
                                <span className='dayjest__card--year'>2023</span>
                            </div>
                        </div>
                        <p className='fs-3 fw-bold'>O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                        </p>
                    </div>

                    <span className='dayjest__line'></span>

                    <div className='d-flex gap-3 '>
                        <div className="dayjest__card  shadow px-2">
                            <img src={dayjestImg} alt="dayjest" width={400} />
                            <p className='dayjest__card--text fs-4 fw-semibold px-3 mt-2'>O'zbekistonda sun'iy qor va
                                yomg'ir yog'diriladi
                            </p>

                            <div className='dayjest__card--line'></div>
                            <div className="d-flex flex-column align-items-center fw-semibold mb-3">
                                <span className='dayjest__card--date'>27 May</span>
                                <span className='dayjest__card--year'>2023</span>
                            </div>
                        </div>
                        <p className='fs-3 fw-bold'>O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                            O'zbekistonda sun'iy qor va yomg'ir yog'diriladi
                        </p>
                    </div>

                    <span className='dayjest__line'></span>

                </div>
                <div className="col-3 d-flex flex-column gap-4">
                    <div className="dayjest__aside p-3 shadow">
                        <div className="">
                            <span className='dayjest__aside--date rounded fw-semibold p-2 bg-light'>17.05.20023</span>
                            <p className='fw-semibold fs-5'>O'zbekistonda sun'iy qor va
                                yomg'ir yog'diriladi
                            </p>
                            <button className="btn btn-outline-primary rounded-pill px-5 fw-semibold">Batafsil</button>
                        </div>
                    </div>
                    <div className="dayjest__aside p-3 shadow">
                        <div className="d-flex flex-column align-items-end justify-content-end gap-2 ">
                            <span className='dayjest__aside--date rounded fw-semibold p-2 bg-light'>17.05.20023</span>
                            <p className='fw-semibold fs-5'>O'zbekistonda sun'iy qor va
                                yomg'ir yog'diriladi
                            </p>
                            <button className="btn btn-outline-primary rounded-pill px-5 fw-semibold">Batafsil</button>
                        </div>
                    </div>
                    <div className="dayjest__aside p-3 shadow">
                        <div className="">
                            <span className='dayjest__aside--date rounded fw-semibold p-2 bg-light'>17.05.20023</span>
                            <p className='fw-semibold fs-5'>O'zbekistonda sun'iy qor va
                                yomg'ir yog'diriladi
                            </p>
                            <button className="btn btn-outline-primary rounded-pill px-5 fw-semibold">Batafsil</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dayjest