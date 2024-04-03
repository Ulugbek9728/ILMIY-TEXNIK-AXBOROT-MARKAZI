import React from 'react'
import '../style/footer.scss'
import { Link } from 'react-router-dom'
import logo from '../images/лого_ЦНТИ_белый.png'
import {getTransitson} from "../translate";
import {useSelector} from "react-redux";
function Footer() {

  const language = useSelector(state => state.lang.option);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <Link className="d-flex nav-link" to='/'>
              <img className='foorter-logo' src={logo} alt="logo" />
              <p className='text-white fs-4 my-auto ms-2'>{getTransitson(language, 'logo1')} <br />{getTransitson(language, 'logo2')}</p>

            </Link>
            <p className='d-sm-none d-lg-block mt-2 '>
              Agar inson ilm nuri bilan o'z yo'lini yoritmasa, zulmat va nodonlik
              ko'chasidaqoladi. Kishi qalbining nuri ilm va ma'rifat bilan baquvvat
              bo'ladi. Insoniyatning qadri ilm bilan hosil bo'ladi. Ilmdan hali hech
              kim zarar ko'rgan emas. Ilmni egallab olish esa bir san'atdir
            </p>
          </div>
          <div className="col-xl-5">
            <div className="row">
              <div className="col-xl-6">
                <h3 className='text-center border-bottom pb-3 border-white '>Asosiy</h3>
                <ul className="list-unstyled ps-xl-5 " >
                  <li className="nav-item">
                    <Link to='/' className="nav-link text-white">{getTransitson(language, 'nav1')}</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/all_direction' className="nav-link text-white">{getTransitson(language, 'nav2')}</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/dayjest' className="nav-link text-white">{getTransitson(language, 'nav3')}</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/untitled' className="nav-link text-white">{getTransitson(language, 'nav4')}</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-6">
                <h3 className='text-center border-bottom pb-3 border-white '>Biz bilan bog'lanish</h3>
                <ul   className="list-unstyled ps-xl-5" >
                  <li  className="nav-item ">
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white">rivojlanish@gmail.com</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white">+998901234567</Link>
                  </li>
                  <li className='nav-item d-flex gap-3'>
                    <Link className='nav-link fs-2' href="#">
                    <i className='bx bxl-telegram'></i>
                    </Link>
                    <Link  className='nav-link fs-2' href="#">
                    <i className='bx bxl-google'></i>
                    </Link>
                    <Link  className='nav-link fs-2' href="#">
                    <i className='bx bx-phone'></i>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer