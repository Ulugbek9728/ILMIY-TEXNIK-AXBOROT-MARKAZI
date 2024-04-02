import React from 'react'
import '../style/Untitled.scss'
import backImg from '../images/gerb 1.png'
// import backImg from '../images/back-img.jpg'
import businessman from '../images/adliya-logo 1.png'

function Untitled() {
    return (
        <>
            <img src={backImg} alt="background image" className='main__img w-100 contain' />
            <div className='container'>
                <div>
                    <p className='w-75 mx-auto mt-5'>
                        Agar inson ilm nuri bilan o'z yo'lini yoritmasa, zulmat va nodonlik
                        ko'chasidaqoladi. Kishi qalbining nuri ilm va ma'rifat bilan baquvvat
                        bo'ladi. Insoniyatning qadri ilm bilan hosil bo'ladi. Ilmdan hali hech
                        kim zarar ko'rgan emas. Ilmni egallab olish esa bir san'atdir
                    </p>
                    <div className="d-flex gap-4 w-50 mx-auto mt-5">
                        <select className="form-select" aria-label="example">
                            <option value="1">1 chi Department</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-select" aria-label="example">
                            <option value="1">1 chi Department</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select className="form-select" aria-label="example">
                            <option value="1">1 chi Department</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='untitled__wrapper col d-flex justify-content-between align-items-center'>
                        <div className="untitled__cards shadow p-4 position-relative">
                            <div className="businessman__wrapper--circle d-flex rounded-circle">
                                <img src={businessman} alt="businessman image" className='mx-auto' width={150} />
                            </div>
                            <div className="untitled__cards--box d-flex flex-column align-items-center p-3 rounded">
                                <div className='untitled__cards--box-line mb-4 mt-5'></div>
                                <h2 className='direction__name fs-5 mt-2'>ANVAR SATAROV</h2>
                                <p className='direction__office'>1st DEPARTMENT</p>
                                <p className='direction__position'>CEO DIRECTOR</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column gap-5'>
                            <div className="untitled__cards shadow p-4 position-relative">
                                <div className="businessman__wrapper--circle d-flex rounded-circle">
                                    <img src={businessman} alt="businessman image" className='mx-auto' width={150} />
                                </div>
                                <div className="untitled__cards--box d-flex flex-column align-items-center p-3 rounded">
                                    <div className='untitled__cards--box-line mb-4 mt-5'></div>
                                    <h2 className='direction__name fs-5 mt-2'>ANVAR SATAROV</h2>
                                    <p className='direction__office'>1st DEPARTMENT</p>
                                    <p className='direction__position'>CEO DIRECTOR</p>
                                </div>
                            </div>
                            <div className="untitled__cards mt-5 shadow p-4 position-relative">
                                <div className="businessman__wrapper--circle d-flex rounded-circle">
                                    <img src={businessman} alt="businessman image" className='mx-auto' width={150} />
                                </div>
                                <div className="untitled__cards--box d-flex flex-column align-items-center p-3 rounded">
                                    <div className='untitled__cards--box-line mb-4 mt-5'></div>
                                    <h2 className='direction__name fs-5 mt-2'>ANVAR SATAROV</h2>
                                    <p className='direction__office'>1st DEPARTMENT</p>
                                    <p className='direction__position'>CEO DIRECTOR</p>
                                </div>
                            </div>
                        </div>
                        <div className="untitled__cards shadow p-4 position-relative">
                            <div className="businessman__wrapper--circle d-flex rounded-circle">
                                <img src={businessman} alt="businessman image" className='mx-auto' width={150} />
                            </div>
                            <div className="untitled__cards--box d-flex flex-column align-items-center p-3 rounded">
                                <div className='untitled__cards--box-line mb-4 mt-5'></div>
                                <h2 className='direction__name fs-5 mt-2'>ANVAR SATAROV</h2>
                                <p className='direction__office'>1st DEPARTMENT</p>
                                <p className='direction__position'>CEO DIRECTOR</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Untitled