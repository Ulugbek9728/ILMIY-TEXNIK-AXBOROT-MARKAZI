import React, {useEffect} from 'react'
import '../style/direction.scss'
import backImg from '../images/carusel3.jpg'
import businessman from '../images/odam.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel'
function Direction() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <div className='drection' id='drection'>
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
                <hr/>
                <OwlCarousel
                    // navClass
                    owl-prev
                    className='owl-theme  w-100'
                    loop margin={10}
                    nav={true}
                    autoplay= {false}
                    autoplayTimeout={3000}
                    autoplayHoverPause={true}
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

                <hr/>
            </div>
        </div>
    )
}

export default Direction