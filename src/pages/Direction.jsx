import React from 'react'
import '../style/direction.scss'
import backImg from '../images/carusel3.jpg'
import businessman from '../images/odam.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel'
function Direction() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className='drection'>
            <img src={backImg} alt="background image" className='main__img w-100 h-100 contain' />
            <div className="container">
                <div className="d-flex justify-content-center gap-3 mt-5">
                    <h2 className='d-flex flex-column justify-content-center border-end border-solid border-dark items-center px-3'>Yo’nalish nomi</h2>
                    <p className='w-50'>
                        Agar inson ilm nuri bilan o'z yo'lini yoritmasa, zulmat va nodonlik
                        ko'chasidaqoladi. Kishi qalbining nuri ilm va ma'rifat bilan baquvvat
                        bo'ladi. Insoniyatning qadri ilm bilan hosil bo'ladi. Ilmdan hali hech
                        kim zarar ko'rgan emas. Ilmni egallab olish esa bir san'atdir
                    </p>
                </div>
                <OwlCarousel
                    // navClass
                    owl-prev
                    className='owl-theme  w-100 '
                    loop margin={10}
                    responsive={
                        {
                            0: { items: 1 },
                            600: { items: 1 },
                            1000: { items: 1 }
                        }}>
                    {
                        arr.map(ar => {
                            return (
                                <div className="item" key={ar}>
                                    <div className="businessman__wrapper">
                                        <div className="businessman__wrapper--circle2 rounded-circle">
                                            <img  src={businessman} alt="businessman image" />
                                        </div>
                                        <div className="d-flex flex-column align-items-center">
                                            <h2 className='direction__name'>ANVAR SATAROV</h2>
                                            <p className='direction__office'>1st DEPARTMENT</p>
                                            <p className='direction__position'>CEO DIRECTOR</p>
                                        </div>
                                    </div>
                                </div> 
                             )
                        })
                    }
                </OwlCarousel>


                <div className="d-flex justify-content-end mb-4 ">
                    <button className='btn owl-prev'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                    </button>
                    <button className='btn owl-next' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Direction