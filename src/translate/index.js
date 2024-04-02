const transitons = {
    uz: {
        logo1: "ILMIY-TEXNIK ",
        logo2:"AXBOROT MARKAZI",
        nav1:"BOSH SAHIFA",
        nav2:"YO’NALISHLAR",
        nav3:"DAYJESTLAR",
        nav4:"BIZ XAQIMIZDA",
        nav5:"BOG’LANISH",
        search:"qidirmoq",
        btn:"Batafsil",
        news:"YANGILIKLAR",
        xamkor:"Xamkorlar",
        direction:"5 ta yo'nalish",
        dayjest:"Dayjestlar",
        aboutUs:"Biz xaqimizda",
        aboutUs_title:"O'zbekistonda sun'iy qor va yomg'iryog'diriladi",
        results:"Natijalar",
    },
    en: {
        logo1: "SCIENTIFIC AND TECHNICAL",
        logo2:"INFORMATION CENTER",
        nav1:"HOME PAGE",
        nav2:"DIRECTIONS",
        nav3:"DIGESTS",
        nav4:"ABOUT US",
        nav5:"CONTACT",
        search:"search",
        btn:"More",
        news:"News",
        xamkor:"Partners",
        direction:"5 directions",
        dayjest:"Digests",
        aboutUs:"About Us",
        aboutUs_title:"Artificial snow and rain are made in Uzbekistan",
        results:'Results'
    },
    ru: {
        logo1:"НАУЧНО-ТЕХНИЧЕСКИЙ",
        logo2:"ИНФОРМАЦИОННЫЙ ЦЕНТР",
        nav1:"ДОМ",
        nav2:"НАПРАВЛЕНИЯ",
        nav3:"дайджесты",
        nav4:"О НАС",
        nav5:"КОНТАКТ",
        search:"поиск",
        btn:"Более",
        news:"Новости",
        xamkor:"Партнеры",
        direction:"5 направлений",
        dayjest:"Дайджесты",
        aboutUs:"о нас",
        aboutUs_title:"Искусственный снег и дождь делают в Узбекистане",
        results:'Результаты'
    }
}
export const languages=['uz','en','ru'];
export const getTransitson=(language,text)=>{
    return transitons[language][text];
}
