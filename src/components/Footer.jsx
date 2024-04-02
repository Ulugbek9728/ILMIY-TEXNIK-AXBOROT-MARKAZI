import React from 'react'
import '../style/footer.scss'
import { Link } from 'react-router-dom'
import logo from '../images/лого_ЦНТИ_белый.png'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <Link className="d-flex nav-link" to='/'>
              <img className='foorter-logo' src={logo} alt="logo" />
              <p className='text-white fs-4 my-auto ms-2'> ILMIY-TEXNIK <br /> AXBOROT MARKAZI </p>
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
                  <li className="nav-item ">
                    <Link className="nav-link text-white">BOSH SAHIFA</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white">YO’NALISHLAR</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white">DAYJESTLAR</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white">BIZ XAQIMIZDA</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white">BOG’LANISH</Link>
                  </li>

                </ul>
              </div>
              <div className="col-xl-6">
                <ul   className="list-unstyled ps-xl-5 mt-xl-5 mt-xl-4 " >
                  <li  className="nav-item ">
                    <Link className="nav-link text-white">
                    <h6 className='text-center boglnish'>Biz bilan bog'lanish</h6>
                    </Link>
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