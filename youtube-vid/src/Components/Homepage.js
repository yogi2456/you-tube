import React, { useState } from 'react'
import './Homepage.css'
import { useNavigate } from "react-router-dom";

function Homepage() {

  const router = useNavigate();

  const [products, setProducts] = useState([
    {
      name: "JAWAN: Chaleya(Hindi)",
      image: "https://i.ytimg.com/vi/UeHpBWjuhKc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==",
      pImage: "https://yt3.ggpht.com/lw4niDKBw7tGo7ZfLQqHYL26quX9T7xVMgIjhlSzVXIvU0DPoTC1dH4tes9VAwEm3qI7L22zRg=s88-c-k-c0x00ffffff-no-rj",
      views: "295k views",
      time: "2 days ago"
    },
    {
      name: "Heeriye | Jasleen Royal |",
      image: "https://i.ytimg.com/vi/3m6uiZI8xlI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==",
      pImage: "https://yt3.ggpht.com/KoFByTIL52sOe__t1RKy-6OFbRW-xMcRAIF1PJHKUVik9EJxbQ28sWwX8D5NAEbogesjahg=s88-c-k-c0x00ffffff-no-rj",
      views: "45k views",
      time: "3 days ago"
    },
    {
      name: "Mega crocodile (Telugu)",
      image: "https://i.ytimg.com/vi/9ltpoI0J-VQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==",
      pImage: "https://yt3.ggpht.com/ytc/APkrFKbgoSTx1oIwOWpIFYw5mjFbA9XI5mRtQVb0_Ukl=s68-c-k-c0x00ffffff-no-rj",
      views: "4.7M views",
      time: "1 year ago"
    },
    {
      name: "Animal Telugu",
      image: "https://i.ytimg.com/vi/g0ghPuWqYR0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==",
      pImage: "https://yt3.ggpht.com/ytc/APkrFKYkn9Q9VM_xwhxA6ik3lGkWyRZ5N62fLHtuuUuy2w=s68-c-k-c0x00ffffff-no-rj",
      views: "1M views",
      time: "21 hours ago"
    },
    {
      name: "Jumanji the next level:",
      image: "https://i.ytimg.com/vi/rFm8jnvSy7Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==",
      pImage: "https://yt3.ggpht.com/1nQG44ZWL3UmpNu-ivmmiph_qpyyIaTK2F3-CKxOXaA6Y8yksimELAMz1DQ45YUiT2sb8JHQ4w=s68-c-k-c0x00ffffff-no-rj",
      views: "17M views",
      time: "1 year ago"
    },
    {
      name: "Touching Touching - Lyrical video",
      image: "https://i.ytimg.com/vi/WPkEHCszPyU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==",
      pImage: "https://yt3.ggpht.com/ZnBmMi35bqmVJODSRzSwo3_j3WVaBd3DhRJHrKTS4yMX4jds1gXOsH0JpjBtr4HzfNClZcnjWw=s68-c-k-c0x00ffffff-no-rj",
      views: "720k views",
      time: "4 days ago"
    }, ])

    const [videos, setVideos] = useState([
      {
        name: "New vs old phone are you the same",
        image: "https://i.ytimg.com/vi/2zQPaXYnEVo/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=",
        views: "4.4M views"
      },
      {
        name: "Lo jeet Gaye Tum Hum Se Dance",
        image: "https://i.ytimg.com/vi/swuRpLvdgnc/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=",
        views: "14M views"
      },
      {
        name: "Ganesh Craying jai bolo ganesh",
        image: "https://i.ytimg.com/vi/mdv6jcFr3WA/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=",
        views: "1.7M views"
      },
      {
        name: "Jailer vs Pushpa",
        image: "https://i.ytimg.com/vi/-UqIGHNNfNE/hq720.jpg?sqp=-oaymwEdCJcDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=",
        views: "835k views"
      },
      {
        name: "Paris you love",
        image: "https://i.ytimg.com/vi/zQcMo2k6ADc/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=",
        views: "14M views"
      },])
  return (
    <>
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
            <div onClick={() => router(`/login`)} className='navbar5'>
              <i class="fa-solid fa-user" style={{color: "#fafcff"}}></i>
            </div>
            </div>

            <div className='navbar6'>
              <button>All</button>
              <button>Music</button>
              <button>Mixes</button>
              <button>Anirudh Ravichander</button>
              <button>T-Series</button>
              <button>Tamil Cinema</button>
              <button>Storytelling</button>
              <button>Live</button>
              <button>Dhee</button>
              <button>Superhero movies</button>
              <button>Cricket</button>
            </div>
        </div>


        <div className='leftside'>
        <div className='sidebar'>
          <div className='sidebar1'>
            <div><i class="fa-solid fa-bars fa-xl" style={{color: "#fcfcfd"}}></i></div>
            <div>
              <img style={{width: "50%", height: "80%"}} src='https://www.gstatic.com/youtube/img/promos/growth/7a4b9bd20cc245474ee2f5fa265c92410480b3e49f72a5342ccfeeb442905946_318x72.png'/>
            </div>
          </div>
          <div className='sidebar2'>
            <div><i class="fa-solid fa-house" style={{color: "#edf1f7"}}></i></div>
            <div>
              <p>Home</p>
            </div>
          </div>
          <div className='sidebar3'>
            <div>
              <img style={{width: "30%", height: "50%"}} src='https://logowik.com/content/uploads/images/youtube-shorts5863.jpg'/>
            </div>
            <div>
              <p>Shorts</p>
            </div>
          </div>
          <div className='sidebar4'>
            <div>
              <img style={{width: "30%", height: "50%"}} src='https://www.shutterstock.com/image-vector/subscriptions-icon-isolated-on-white-260nw-1803400006.jpg'/>
            </div>
            <div>
              <p>Subscription</p>
            </div>
          </div>
          <div className='sidebar5'></div>
          <div className='sidebar6'>
            <div>You</div>
            <div><i class="fa-solid fa-chevron-right" style={{color: "#f4f7fa"}}></i></div>
          </div>
          <div className='sidebar7'>
            <div><i class="fa-solid fa-user" style={{color: "#f0f2f4"}}></i></div>
            <div>
              <p>Your channel</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-solid fa-clock-rotate-left" style={{color: "#e8eaee"}}></i></div>
            <div>
              <p>History</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-regular fa-circle-play" style={{color: "#f4f5f6"}}></i></div>
            <div>
              <p>Your videos</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-regular fa-clock" style={{color: "#eeeff2"}}></i></div>
            <div>
              <p>Watch later</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-regular fa-thumbs-up" style={{color: "#ededee"}}></i></div>
            <div>
              <p>Liked videos</p>
            </div>
          </div>
          <div className='sidebar5'></div>
          <h2>Explore</h2>
          <div className='sidebar8'>
            <div><i class="fa-solid fa-bag-shopping" style={{color: "#ebecf0"}}></i></div>
            <div>
              <p>Shopping bag</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-solid fa-music" style={{color: "#f3f4f7"}}></i></div>
            <div>
              <p>Music</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-solid fa-clapperboard" style={{color: "#edeff3"}}></i></div>
            <div>
              <p>Movies</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-solid fa-satellite-dish" style={{color: "#f0f2f5"}}></i></div>
            <div>
              <p>Live</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-solid fa-vr-cardboard" style={{color: "#f0f2f4"}}></i></div>
            <div>
              <p>Gaming</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-solid fa-baseball" style={{color: "#e6e7eb"}}></i></div>
            <div>
              <p>Sports</p>
            </div>
          </div>
          <div className='sidebar8'>
            <div><i class="fa-solid fa-newspaper" style={{color: "#eceff3"}}></i></div>
            <div>
              <p>News</p>
            </div>
          </div>
        </div>
<div className='sidebar9'>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginLeft: "19%", marginTop: "-500px", backgroundColor: "black" }}>
    {products.map((pro) => (
        <div style={{  width: "30%", height: "350px", marginBottom: "50px", borderRadius:"20px"}}>
            <img style={{ width: "100%", height: "250px", borderRadius: "20px" }} src={pro.image} />
            <div style={{display: "flex"}}>
              <img style={{width: "40px", height: "40px", borderRadius: "50%", border: "1px solid white", marginTop: "15px", marginLeft: "10px"}} src={pro.pImage} />
              <p style={{fontSize: "20px", color: "white", marginLeft: "20px"}}>{pro.name}</p>
            </div>
            <p style={{color: "white", textAlign: "left", marginLeft: "70px", marginTop: "-15px"}}>{pro.views}</p>
            <p style={{color: "white", textAlign: "left", marginLeft: "70px", marginTop: "-15px"}}>{pro.time}</p>
        </div>
    ))}
</div> 
        <h2 style={{color: "white" , textAlign: "left", marginLeft: "290px", fontSize: "30px"}}>Shorts</h2>
         <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginLeft: "18%", background: "black"}}>
          {videos.map((video) => (
          <div style={{ width: "18%", height: "550px", borderRadius: "20px"}}>
            <img style={{width: "100%", height: "100%", borderRadius: "20px, 20px, 0px, 0px", objectFit: "cover"}} src={video.image} />
            <h2 style={{color: "white", textAlign: "left", fontSize: "18px"}}>{video.name}</h2>
            <p style={{color: "white", textAlign: "left", fontSize: "16px"}}>{video.views}</p>
          </div>))}
         </div>
</div>         
        </div>
      </div>
    </>
  )
}

export default Homepage
