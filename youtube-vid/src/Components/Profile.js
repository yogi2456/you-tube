import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

function Profile() {
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
            <div className='navbar26'>
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
          <div className='sidebar25'>
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

          <div className='profile'>
            <div className='profile1'>
                <div className='profile2'>
                    <div className='profile3'>
                        <p>Y</p>
                    </div>
                    <div className='profile4'>
                        <h1>Yogesh Sagaluri</h1>
                        <p>@yogeshsagaluri6140  .  View Channel</p>
                        <div className='profile5'>
                            <button>
                                Switch account
                            </button>
                            <button>
                                Google Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </>
  )
}

export default Profile
