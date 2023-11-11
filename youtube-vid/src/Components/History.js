import React, { useState } from 'react'
import './History.css'
import { useNavigate } from 'react-router-dom'

function History() {

  const [history, setHistory] = useState([
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
    }
  ])

  const [story, setStory] = useState([
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

    const router = useNavigate();
  return (
    <>
    <div className='navbar20'>
       <div className='navbarr21'>
        <div className='bar19'>
            <div><i class="fa-solid fa-bars fa-xl" style={{color: "#fcfcfd"}}></i></div>
            <div>
              <img style={{width: "80%", height: "70%"}} src='https://www.gstatic.com/youtube/img/promos/growth/7a4b9bd20cc245474ee2f5fa265c92410480b3e49f72a5342ccfeeb442905946_318x72.png'/>
            </div>
          </div>
            <div className='navbar22'>
                <div>
                    <input  placeholder='Search'/>
                </div>
                <div>
                    <i class="fa-solid fa-magnifying-glass" style={{color: "white"}}></i>
                </div>
            </div>
            <div className='navbar23'>
                <i class="fa-solid fa-microphone" style={{color: "white"}}></i>
            </div>
            <div className='navbar24'>
                <i class="fa-solid fa-video fa-xl" style={{color: "#cececf"}}></i>
            </div>
            <div className='navbar25'>
                <i class="fa-regular fa-bell fa-xl" style={{color: "#dbdbdc"}}></i>
            </div>
            <div onClick={() => router(`/login`)} className='navbar26'>
              <i class="fa-solid fa-user" style={{color: "#fafcff"}}></i>
            </div>
            </div>
        </div> 


        <div className='class'>
          <div className='sidebar21'>
            <div><i class="fa-solid fa-house" style={{color: "#edf1f7"}}></i></div>
            <div>
              <p>Home</p>
            </div>
          </div>
          <div className='sidebar22'>
            <div>
              <img style={{width: "30%", height: "50%"}} src='https://logowik.com/content/uploads/images/youtube-shorts5863.jpg'/>
            </div>
            <div>
              <p>Shorts</p>
            </div>
          </div>
          <div className='sidebar23'>
            <div>
              <img style={{width: "30%", height: "50%"}} src='https://www.shutterstock.com/image-vector/subscriptions-icon-isolated-on-white-260nw-1803400006.jpg'/>
            </div>
            <div>
              <p>Subscription</p>
            </div>
          </div>
          <div className='sidebar24'></div>
          <div onClick={() => router(`/profile`)} className='sidebar25'>
            <div>You</div>
            <div><i class="fa-solid fa-chevron-right" style={{color: "#f4f7fa"}}></i></div>
          </div>
          <div className='sidebar26'>
            <div><i class="fa-solid fa-user" style={{color: "#f0f2f4"}}></i></div>
            <div>
              <p>Your channel</p>
            </div>
          </div>
          <div onClick={() => router(`/history`)} className='sidebar27'>
            <div><i class="fa-solid fa-clock-rotate-left" style={{color: "#e8eaee"}}></i></div>
            <div>
              <p>History</p>
            </div>
          </div>
          <div className='sidebar27'>
            <div><i class="fa-regular fa-circle-play" style={{color: "#f4f5f6"}}></i></div>
            <div>
              <p>Your videos</p>
            </div>
          </div>
          <div className='sidebar27'>
            <div><i class="fa-regular fa-clock" style={{color: "#eeeff2"}}></i></div>
            <div>
              <p>Watch later</p>
            </div>
          </div>
          <div className='sidebar27'>
            <div><i class="fa-regular fa-thumbs-up" style={{color: "#ededee"}}></i></div>
            <div>
              <p>Liked videos</p>
            </div>
          </div>
          <div className='sidebar24'></div>
          <h2>Explore</h2>
          <div className='sidebar8'>
            <div><i class="fa-solid fa-bag-shopping" style={{color: "#ebecf0"}}></i></div>
            <div>
              <p>Shopping bag</p>
            </div>
          </div>
          <div className='sidebar27'>
            <div><i class="fa-solid fa-music" style={{color: "#f3f4f7"}}></i></div>
            <div>
              <p>Music</p>
            </div>
          </div>
          <div className='sidebar27'>
            <div><i class="fa-solid fa-clapperboard" style={{color: "#edeff3"}}></i></div>
            <div>
              <p>Movies</p>
            </div>
          </div>
          <div className='sidebar27'>
            <div><i class="fa-solid fa-satellite-dish" style={{color: "#f0f2f5"}}></i></div>
            <div>
              <p>Live</p>
            </div>
          </div>
          <div className='sidebar27'>
            <div><i class="fa-solid fa-vr-cardboard" style={{color: "#f0f2f4"}}></i></div>
            <div>
              <p>Gaming</p>
            </div>
          </div>
          <div className='sidebar27'>
            <div><i class="fa-solid fa-baseball" style={{color: "#e6e7eb"}}></i></div>
            <div>
              <p>Sports</p>
            </div>
          </div>
          <div className='sidebar27'>
            <div><i class="fa-solid fa-newspaper" style={{color: "#eceff3"}}></i></div>
            <div>
              <p>News</p>
            </div>
          </div>
          </div>


          <div className='history'>
            <div className='history1'>
            <h1>Watch history</h1>
            <h2>Yesterday</h2>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", height: "160px", marginTop: "20px"}}>
                    {history.map((pro) => (
                        <div style={{width: "100%", display: "flex", justifyContent: "space-between", height: "160px"}}>
                        <div style={{width: "40%", height: "140px"}}>
                             <img style={{width: "100%", height: "100%", borderRadius: "10px"}} src={pro.image}/>
                        </div>
                        <div style={{width: "56%", height: "160px", color: "white"}}>
                            <h2 style={{fontSize: "16px", fontWeight: "bold", textAlign: "left"}}>{pro.name}</h2>
                            <p style={{textAlign: "left", marginTop: "-5px", fontSize: "14px"}}>{pro.singer}</p>
                            <div style={{display: "flex", marginTop: "-17px", fontSize: "14px"}}>
                                <p>{pro.views}</p>
                                <p style={{marginLeft: "10px"}}>{pro.months}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                <p>Wednesda</p>
            </div>
            <div className='history2'>
              <h2>Wednesday</h2>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", height: "160px", marginTop: "40px"}}>
                    {story.map((pro) => (
                        <div style={{width: "100%", display: "flex", justifyContent: "space-between", height: "160px"}}>
                        <div style={{width: "40%", height: "140px"}}>
                             <img style={{width: "100%", height: "100%", borderRadius: "10px"}} src={pro.image}/>
                        </div>
                        <div style={{width: "56%", height: "160px", color: "white"}}>
                            <h2 style={{fontSize: "16px", fontWeight: "bold", textAlign: "left"}}>{pro.name}</h2>
                            <p style={{textAlign: "left", marginTop: "-5px", fontSize: "14px"}}>{pro.singer}</p>
                            <div style={{display: "flex", marginTop: "-17px", fontSize: "14px"}}>
                                <p>{pro.views}</p>
                                <p style={{marginLeft: "10px"}}>{pro.months}</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          <div className='story'>
            <div className='story1'>
            <div className='story2'>
              <i class="fa-solid fa-magnifying-glass" style={{color: "gray"}}></i>
              <input placeholder='Search watch history'/>
            </div>
            <div className='story3'></div>
            <div className='story4'>
                <i class="fa-solid fa-trash-can" style={{color: "#f0f2f4"}}></i>
                <p>Clear all watch history</p>
            </div>
            <div className='story5'>
            <i class="fa-solid fa-pause" style={{color: "#edeff3"}}></i>
            <p>Pause watch history</p>
            </div>
            <div className='story5'>
                <i class="fa-solid fa-gear" style={{color: "#ededed"}}></i>
                <p>Manage all history</p>
            </div>
            <div className='story6'>
              <p>Comments</p>
              <p>Community posts</p>
              <p>Live Chat</p>
            </div>
            </div>
          </div>
    </>
  )
}

export default History
