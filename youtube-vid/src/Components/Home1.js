import React, { useState } from 'react'
import './Home1.css'

function Home1() {

    const [image, setImage] = useState([
        {
            image: "https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtSyHZtzUbm1sUzuDS7Fw3tpalxw",
            name: "Heeriye (Official Video) jasleen Royal ft",
            singer: "Jasleen Royal",
            views: "191M views",
            months: "3 months ago"
        },
        {
            image: "https://i.ytimg.com/vi/szvt1vD0Uug/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtm2ZCQXp2wBZPW0-SWdhcRdTgaA",
            name: "Leo-Na Ready lyric video | Thalapathy",
            singer: "Sony Music South",
            views: "175M views",
            months: "4 months ago"
        },{
            image: "https://i.ytimg.com/vi/HrnrqYxYrbk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCH_xtr8WZFOKYc1PDBC7wwj6tPwQ",
            name: "ANIMAL: SATRANGA | Ranbir kapoor",
            singer: "T-Series",
            views: "35M views",
            months: "6 days ago"
        },
        {
            image: "https://i.ytimg.com/vi/vgm1u2gPxzw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAANERxsJfA9W22Vlxd2rpZFFjx7A",
            name: "Ranjhanaah Hua Mai Tera (video song)",
            singer: "Eros Now Music",
            views: "96M views",
            months: "10 years ago"
        },
        {
            image: "https://i.ytimg.com/vi/0Olv8zM_rps/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqBs17KZIXLr51AhzPJzXBBEiHAw",
            name: "Darling-Neeve Video | Prabhas| G.V.",
            singer: "SonyMusicSouthVEVO",
            views: "28M views",
            months: "8 years ago"
        },
        {
            image: "https://i.ytimg.com/vi/pA2twF9tWBw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvTa9BEkBoH6ADuOAiWx8VBqGYZQ",
            name: "Suttamla Soosi Lyrical Video | Gangs of ",
            singer: "Aditya Music India",
            views: "17M views",
            months: "2 months ago"
        },
        {
            image: "https://i.ytimg.com/vi/2pgx-tajxwE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1dOsK9RVrmQT4thKRu4agC2Gjaw",
            name: "Nijame Ne Chebuthuna Lyrical |",
            singer: "Aditya Music India",
            views: "58M views",
            months: "7 months ago"
        },
        {
            image: "https://i.ytimg.com/vi/VzT2xurZrbI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpsEAXdu3WI_-qH8qFMAhklcDpZg",
            name: "King of Kotha - Kalapakkaara video",
            singer: "Sony Music South",
            views: "30M views",
            months: "2 months ago"
        },
        {
            image: "https://i.ytimg.com/vi/MsGaOJOTQSA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACzvKHUDVCfHylxczeukjh4JSCzw",
            name: "Nava Manmadhudu - Manasa Manasa",
            singer: "SonyMusicSouthVEVO",
            views: "943k views",
            months: "6 years ago"
        },
        {
            image: "https://i.ytimg.com/vi/bgIemsDOIK4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBDVjvl8zyY_OliQ4RMzHL1kPdYQ",
            name: "Nee Chuttu Chuttu - video song",
            singer: "Junglee Music Telugu",
            views: "1.2M views",
            months: "6 days ago"
        }
    ])
  return (
    <div>
        <div className='navbar'>
       <div className='navbarr'>
            <div className='navbar1'>
                <div>
                    <input  placeholder='Search'/>
                </div>
                <div>
                    <i class="fa-solid fa-magnifying-glass" style={{color: "white"}}></i>
                </div>
            </div>
            <div className='navbar2'>
                <i class="fa-solid fa-microphone" style={{color: "white"}}></i>
            </div>
            <div className='navbar3'>
                <i class="fa-solid fa-video fa-xl" style={{color: "#cececf"}}></i>
            </div>
            <div className='navbar4'>
                <i class="fa-regular fa-bell fa-xl" style={{color: "#dbdbdc"}}></i>
            </div>
            <div className='navbar5'>
              <i class="fa-solid fa-user" style={{color: "#fafcff"}}></i>
            </div>
            </div>
        </div>    
        

        <div className='sidebaar'>
        <div className='sidebaar1'>
            <div><i class="fa-solid fa-bars fa-xl" style={{color: "#fcfcfd"}}></i></div>
            <div>
              <img style={{width: "50%", height: "80%"}} src='https://www.gstatic.com/youtube/img/promos/growth/7a4b9bd20cc245474ee2f5fa265c92410480b3e49f72a5342ccfeeb442905946_318x72.png'/>
            </div>
          </div>
        </div>


        <div className='leftright'>
            <div className='leftright1'>
            <div className='left'>
                <div className='leftl'><img style={{width: "100%", height: "100%", borderRadius: "20px"}} src='https://i.ytimg.com/vi/VAdGW7QDJiU/maxresdefault.jpg'/></div>
                <h2>JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar</h2>
                <div className='left1'>
                    <div className='left2'>
                        <div>
                            <img style={{width: "45px", height: "45px", borderRadius: "50%"}} src='https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj'/>
                        </div>
                        <div>
                            <h2>T-series</h2>
                            <p>722M Subscribers</p>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div className='left3'>
                        <div>
                            <p><i class="fa-regular fa-thumbs-up" style={{color: "#f4f6fb"}}></i></p>
                            <p>2.3M</p>
                            <p>|</p>
                            <p><i class="fa-regular fa-thumbs-down" style={{color: "#edeff2"}}></i></p>
                        </div>
                        <div>
                            <p><i class="fa-solid fa-share" style={{color: "#f0f2f4"}}></i></p>
                            <p>Share</p>
                        </div>
                        <div>
                            <p><i class="fa-solid fa-download" style={{color: "#fafcff"}}></i></p>
                            <p>Download</p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className='left4'>
                    <div>
                        <p>182M views  2 months ago</p>
                        <p>Jawan- Hindi | Shahrukh Khan | T-Series</p>
                    </div>
                    <div>
                        <p>Witness the love with Chaleya, presenting the second song from the highly-awaited film Jawan directed by Atlee. The film stars Shah Rukh Khan, Vijay Sethupathi, Nayanthara, and Deepika Padukone (in a special appearance) and is set to release in cinemas on 7th September 2023 in Hindi, Tamil, and Telugu! …</p>
                    </div>
                </div>
                <div className='left5'>
                    <p>Suggested by <br/> Tseries Music</p>
                    <p>EP: FRAGRANCE | WAPAS NA AAYENGE : Millind Gaba,Giorgia Andriani | Asli <br/> Gold | Adil S |Bhushan Kumar</p>
                </div>
            </div>
            <div className='right'>
                <div className='right1'>
                    <button>All</button>
                    <button>From your search</button>
                    <button>T-series</button>
                </div>


                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", height: "120px", marginTop: "20px"}}>
                    {image.map((pro) => (
                        <div style={{width: "100%", display: "flex", justifyContent: "space-between", height: "140px"}}>
                        <div style={{width: "48%", height: "120px"}}>
                             <img style={{width: "100%", height: "100%", borderRadius: "10px"}} src={pro.image}/>
                        </div>
                        <div style={{width: "48%", height: "120px", color: "white"}}>
                            <h2 style={{fontSize: "16px", fontWeight: "bold", textAlign: "left"}}>{pro.name}</h2>
                            <p style={{textAlign: "left", marginTop: "-5px", fontSize: "14px"}}>{pro.singer}</p>
                            <div style={{display: "flex", marginTop: "-17px", fontSize: "14px"}}>
                                <p>{pro.views}</p>
                                <p>{pro.months}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home1
