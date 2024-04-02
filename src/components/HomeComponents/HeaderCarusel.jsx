import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel'
import '../../style/HomeComponents/HomeCarusel.scss'
import img1 from '../../images/logo.png'
import img2 from '../../images/carusel2.jpg'
import img3 from '../../images/carusel3.jpg'
import bg from '../../images/Vector 2.png'
import axios from 'axios';
import Carusel from './Carusel';
function HeaderCarusel() {
    // useEffect(() => {
    //     axios.get('http://172.16.25.69:8080/news/top3?lang=uz', {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //         },
    //     }).then(res => {
    //         setNews(res.data)
    //     }).catch(err => { console.log(err) })
    // }, []);

  
    const caruselArray = [
        {
            img: img1,
            title: 'YANGILIKLAR',
            dscrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            date: '15.04.2003'
        },
        {
            img: img2,
            title: 'YANGILIKLAR',
            dscrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            date: '17.03.2005'
        },
        {
            img: img3,
            title: 'YANGILIKLAR',
            dscrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            date: '11.12.2009'
        },];
    return (
        <div id='home' className='position-relative '>
            <OwlCarousel
                className='owl-theme  '
                loop margin={10}
                responsive={
                    {
                        0: { items: 1 },
                        600: { items: 1 },
                        1000: { items: 1 }
                    }}
                dots dotsEach
                autoplay={true}
                autoplayTimeout={10000}
            >

                {
                    caruselArray.map((itme, index) => {
                        return <Carusel itme={itme} key={index}/>
                    })
                }
            </OwlCarousel>
            <div className="position-absolute news  " style={{ backgroundImage: `url(${bg})` }}>
                <div className='news-card mb-1' value='0'>
                    <p className=''>ARS-CoV-2 virusiga
                        suti Qoraqalpogʻiston
                        xoʻjaligidagi sigirlarda</p>
                    <img src={img1} alt="" />
                </div>
                <div className='news-card mb-1' value='1'>
                    <p className=''>ARS-CoV-2 virusiga qarshi immun
                        suti Qoraqalpogʻiston fermer
                        xoʻjaligidagi sigirlardan olingan</p>
                    <img src={img2} alt="" />
                </div>
                <div className='news-card' value='2'>
                    <p className=''>ARS-CoV-2 virusiga qarshi immun
                        suti Qoraqalpogʻiston fermer
                        xoʻjaligidagi sigirlardan olingan</p>
                    <img src={img3} alt="" />
                </div>
            </div>
            <img className='position-absolute bgimg' src={bg} alt="" />
        </div>
    );


}

export default HeaderCarusel