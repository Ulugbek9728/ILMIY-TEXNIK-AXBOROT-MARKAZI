import React, {useEffect} from 'react'
import '../style/Untitled.scss'
import backImg from '../images/Rectangle 4.png'

// import backImg from '../images/back-img.jpg'
import businessman from '../images/adliya-logo 1.png'

function Untitled() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>

            <div className='container'>
                <img src={backImg} alt="background image" className='main__img w-100 contain'/>
                <div>
                    <h2 className='mt-5 d-flex justify-content-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, explicabo.</h2>
                    <p className='mt-5' style={{textAlign:"justify"}}>
                        Agar inson ilm nuri bilan o'z yo'lini yoritmasa, zulmat va nodonlik
                        ko'chasidaqoladi. Kishi qalbining nuri ilm va ma'rifat bilan baquvvat
                        bo'ladi. Insoniyatning qadri ilm bilan hosil bo'ladi. Ilmdan hali hech
                        kim zarar ko'rgan emas. Ilmni egallab olish esa bir san'atdir Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Consectetur consequatur consequuntur corporis cum cumque deleniti
                        doloribus earum eius eos eveniet ex exercitationem explicabo facere facilis hic id illum
                        incidunt libero maiores modi molestias nam nisi odit pariatur porro quae quo repellendus
                        reprehenderit, rerum sint sunt totam velit voluptates. Alias debitis ducimus eligendi fugit
                        iusto quam quibusdam veniam, veritatis! Accusamus architecto asperiores earum, fugit itaque
                        magni officia perferendis provident qui quis sapiente sequi veritatis voluptatem!
                        Exercitationem, laboriosam quis! Amet animi commodi consectetur eaque eos error hic nisi
                        perferendis repellat sint sit, tempora voluptatibus? Amet delectus dolorem ipsam molestias quo
                        reprehenderit temporibus, veniam. Consectetur dolores dolorum maiores! A ab amet assumenda aut
                        autem consequatur cum cumque deserunt dicta dolores dolorum eius ipsa iure iusto omnis
                        perferendis quisquam ratione reiciendis soluta unde, veritatis voluptate, voluptatum.
                        Accusantium ad asperiores consectetur corporis cupiditate deleniti distinctio doloremque,
                        dolores dolorum ducimus eligendi eveniet expedita facere illo ipsam ipsum itaque laboriosam
                        nesciunt nobis odio pariatur perspiciatis placeat reiciendis saepe sint suscipit veritatis
                        voluptate. Atque, autem consectetur error possimus quibusdam vitae? Ab adipisci commodi esse
                        illo libero necessitatibus nesciunt quam quia ullam? Commodi, facere, qui? Atque consectetur
                        delectus iure mollitia obcaecati. Accusamus, ad culpa debitis deserunt dicta dignissimos dolorem
                        error esse excepturi impedit incidunt, ipsum iste minima nam nihil nostrum qui quis saepe
                        sapiente suscipit temporibus tenetur, unde vero voluptatem voluptatibus? Beatae dignissimos
                        dolores numquam odit reiciendis. Accusantium amet aspernatur assumenda aut delectus eligendi
                        esse fugiat id iste maxime minima necessitatibus, placeat praesentium quod recusandae sed
                        tempora ullam voluptate? Accusamus consectetur distinctio est ex expedita, facere laboriosam
                        libero magnam obcaecati optio, recusandae saepe! A laboriosam laudantium nam nulla quaerat.
                        Assumenda atque dolor dolore, dolores error esse expedita illum impedit ipsum iste molestiae
                        mollitia quaerat quisquam recusandae repudiandae, sed vel. Ab adipisci alias aliquam amet, aut
                        autem beatae culpa doloremque eaque error expedita facere recusandae repellat repudiandae,
                        voluptates. Ad, aspernatur assumenda blanditiis, commodi consectetur cum cupiditate doloribus
                        enim excepturi ipsa ipsam libero magnam magni nam neque numquam odit perspiciatis porro qui,
                        reprehenderit repudiandae sapiente sunt totam! Aliquid atque beatae distinctio ea, molestiae
                        optio pariatur quaerat quis! Dicta, explicabo quo. Autem, cupiditate laboriosam laudantium magni
                        optio perferendis quidem repellat voluptatum. A, asperiores autem distinctio doloremque
                        doloribus facilis ipsum nostrum obcaecati possimus quisquam quo sapiente, sint tempore veritatis
                        voluptatem! Ab amet atque consectetur cupiditate deleniti dolore dolorem eaque earum error
                        expedita hic in itaque iure magni natus nesciunt nisi numquam pariatur placeat, possimus quae,
                        quidem quisquam quod repellendus velit voluptates voluptatum. A dolore, harum! Aspernatur autem
                        commodi cupiditate debitis delectus dignissimos doloremque ea eius enim facere fugiat harum, id
                        laboriosam laborum magni maxime minima molestias nisi nobis obcaecati odit praesentium quaerat
                        quibusdam rem saepe, sit vero? Asperiores autem corporis culpa dignissimos ducimus est harum
                        ipsum, magni maiores minima molestias nostrum, numquam obcaecati sequi ut, vel voluptatibus?
                        Asperiores consequuntur distinctio eius facere inventore possimus qui repellendus! A aliquam
                        blanditiis consequuntur debitis deleniti dignissimos, doloremque earum enim expedita hic,
                        inventore, minima nisi odio provident quaerat quos reiciendis voluptatum? Alias facere labore
                        numquam? Distinctio, quae.
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
                                <img src={businessman} alt="businessman image" className='mx-auto' width={150}/>
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
                                    <img src={businessman} alt="businessman image" className='mx-auto' width={150}/>
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
                                    <img src={businessman} alt="businessman image" className='mx-auto' width={150}/>
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
                                <img src={businessman} alt="businessman image" className='mx-auto' width={150}/>
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