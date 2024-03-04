import Dashboard from '../assets/projects/LogicielRCM.png'
import AtelierMissor from '../assets/projects/AtelierMissor.png'
import SiteMarchand from '../assets/projects/SiteMarchand.png'
import RealEst from '../assets/projects/realestate.jpg'
import mernBlog from '../assets/projects/MERNblog.png'
import mernChat from '../assets/projects/ChatMERN.png'

export const data=[
    {
        id:1,
        name:"MERN chat application",
        used: "mern, web socket, jwt, cookieParser, axios, vite, tailwind, heroku",
        guide: "My own",
        image:mernChat,
        github:"https://github.com/MonsieurThomas/AtelierMissorWebsite.git",
        live:"https://incomparable-banoffee-a53c6c.netlify.app/",
    },
    {
        id:2,
        name:"MERN blog application",
        used: "mern, cors, jsonwebtoken, axios, redux, MUI, heroku",
        guide: "My own",
        image:mernBlog,
        github:"https://github.com/MonsieurThomas/AtelierMissorWebsite.git",
        live:"https://flourishing-kheer-62017e.netlify.app/",
    },
    {
        id:3,
        name:"Le site de mon entreprise",
        used: "ReactJs / Vanilla CSS",
        guide: "My own",
        image:AtelierMissor,
        github:"https://github.com/MonsieurThomas/AtelierMissorWebsite.git",
        live:"https://romainthomasateliermissorwebsite.netlify.app/",
    },
    {
        id:4,
        name:"Admin Dashboard App",
        used: "ReactJs / Materail UI / Nivo Charts",
        guide: "Guide: EdRoh",
        image:Dashboard,
        github:"https://github.com/MonsieurThomas/Admin-Dashboard",
        live:"https://romainthomasadmindashboard.netlify.app/",
    },
    {
        id:5,
        name:"Site de E-commerce",
        used: "ReactJs / Vanilla Css",
        guide: "Guide: PedroTech",
        image:SiteMarchand,
        github:"https://github.com/MonsieurThomas/ShoppingCart",
        live:"https://romainthomasshoppingcart.netlify.app",
    },
    {
        id:6,
        name:"React JS Application",
        used: "",
        guide: "",
        image:RealEst,
        github:"",
        live:"",
    },
]