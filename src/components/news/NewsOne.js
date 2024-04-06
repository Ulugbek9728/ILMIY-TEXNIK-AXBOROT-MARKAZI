import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import img from "../../images/Carusel1.jpg";


const NewsOne = ({category}) => {

    const {t} = useTranslation();

    return (
        <div className="NewsOne container">
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid facilis officia.
                Aliquam aspernatur earum, harum ipsam maxime modi rem..</p>
            <div className="content-one">
                <img src={img} alt="news"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur deserunt dolores eius id
                    impedit, ipsam, itaque laborum laudantium officiis, porro qui quisquam rerum sapiente voluptatibus!
                    Aliquam, at, consequatur. Blanditiis corporis culpa doloremque dolorum, eius enim error est,
                    excepturi exercitationem iure libero molestias necessitatibus nihil nobis numquam officia officiis
                    perspiciatis qui quisquam reiciendis rem repellat sint unde voluptas voluptate! Ipsam nihil
                    obcaecati reiciendis similique tempore. Culpa est explicabo ipsum praesentium! Asperiores,
                    aspernatur, at blanditiis consequuntur eos excepturi mollitia nobis nostrum placeat, reiciendis
                    sapiente vel veniam? Ad animi aut incidunt nam nihil, nobis non, omnis perspiciatis possimus
                    quibusdam recusandae repellat saepe sapiente sit suscipit, ut voluptates voluptatum. Animi
                    architecto assumenda atque aut beatae blanditiis corporis cumque delectus, dolor, doloremque ea
                    eaque et excepturi exercitationem expedita ipsam ipsum laudantium maiores minima natus
                    necessitatibus non nostrum pariatur quae quam quidem rem, repellendus rerum saepe sequi suscipit
                    tempora temporibus totam ut vel veniam voluptatibus. Aliquam assumenda deserunt expedita natus quia
                    quidem reiciendis ullam. Aliquam autem beatae consequuntur cumque dicta dignissimos dolorum eligendi
                    error harum, hic in ipsum magni neque quaerat quibusdam soluta velit vitae. Ab atque, autem delectus
                    dolorem doloribus, earum enim est exercitationem fugit in incidunt maxime minima, obcaecati odio
                    quasi sunt ut?
                </p>

            </div>
        </div>
    );
};

export default NewsOne;
