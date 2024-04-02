import React from 'react'
import '../../style/HomeComponents/HomeAboutUs.scss'
import image from '../../images/Rectangle 4.png'
import { useSelector } from 'react-redux';
import { getTransitson } from '../../translate';
function AboutUs() {
    const language = useSelector(state => state.lang.option);
    return (
        <div data-aos="zoom-in-down">
            <div className="d-flex justify-content-center" >
                <h2 data-aos="flip-left" className='text-center title '>{getTransitson(language,'aboutUs')}</h2>
            </div>
            <div className="container-fluid">
                <div className="about-us">
                    <div className="row">
                        <div className="col-xl-6">
                            <img className='image-fluid' src={image} alt="404" />
                        </div>
                        <div className='col-xl-6 descrption'>
                            <div className='border1'>
                                <h2>
                                    {getTransitson(language,'aboutUs_title')}
                                </h2>
                                <p className='text1'>
                                    Agar inson ilm nuri bilan o'z yo'lini yoritmasa, zulmat va nodonlik
                                    ko'chasidaqoladi. Kishi qalbining nuri ilm va ma'rifat bilan baquvvat
                                    bo'ladi. Insoniyatning qadri ilm bilan hosil bo'ladi. Ilmdan hali hech
                                    kim zarar ko'rgan emas. Ilmni egallab olish esa bir san'atdir
                                </p>
                                <p className='text2 col-xl-7'>
                                    Agar inson ilm nuri bilan o'z yo'lini yoritmasa, zulmat va nodonlik
                                    ko'chasidaqoladi. Kishi qalbining nuri ilm va ma'rifat bilan baquvvat
                                    bo'ladi. Insoniyatning qadri ilm bilan hosil bo'ladi. Ilmdan hali hech
                                    kim zarar ko'rgan emas. Ilmni egallab olish esa bir san'atdir....
                                </p>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-outline-primary px-5'>{getTransitson(language, 'btn')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs