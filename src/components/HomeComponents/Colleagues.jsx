import React from 'react'
import '../../style/HomeComponents/HomeColleagues.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel'
import logo1 from '../../images/adliya-logo 1.png'
import logo2 from '../../images/partner_1 1.png'
import logo3 from '../../images/gerb 1.png'
import { useSelector } from 'react-redux'
import { getTransitson } from '../../translate/index'
function Colleagues() {
    const language = useSelector(state => state.lang.option);

    return (
        <div data-aos="zoom-in-down">
            <div className="d-flex justify-content-center" >
                <h2 data-aos="flip-left" className='text-center title '>{getTransitson(language,'xamkor')}</h2>
            </div>
            <div className="container-fluid">
                <div className='colleagues'>
                    <OwlCarousel
                        className='owl-theme'
                        loop margin={10}
                        responsive={
                            {
                                0: { items: 1 },
                                600: { items: 2 },
                                1000: { items: 3 }
                            }}
                        dots={false}
                        autoplay={true}
                        autoplayTimeout={10000}>
                        <div className='item w-100'>
                            <div className="d-flex w-100">
                                <img className='w-25  h-75 my-3' src={logo1} alt="404" />
                                <p className='carusel__title'>
                                    O‘zbekiston Respublikasi milliy huquqiy internet portali
                                </p>
                            </div>
                        </div>
                        <div className='item w-100'>
                            <div className="d-flex w-100">
                                <img className='w-50 image-fluid h-50 mt-4' src={logo2} alt="404" />
                                <p className='carusel__title'>
                                    Yagona interaktiv davlat xizmatlari portallari

                                </p>
                            </div>
                        </div>
                        <div className='item w-100'>
                            <div className="d-flex w-100">
                                <img className='w-50 image-fluid h-50 mt-4' src={logo3} alt="404" />
                                <p className='carusel__title'>
                                    O'zbekiston Respublikasi
                                    Rivozhlanish agentligi
                                </p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Colleagues