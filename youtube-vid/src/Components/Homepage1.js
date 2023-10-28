import React, { useState } from 'react'

function Homepage1() {

    const [section, setSection] = useState([
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
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", backgroundColor: "black" }}>
    {section.map((pro) => (
        <div style={{  width: "30%", height: "350px", marginBottom: "50px", borderRadius:"20px",}}>
            <p style={{textAlign: "left", marginLeft: "20px"}}>{pro.name}</p>
            <h1 style={{textAlign: "left", marginLeft: "20px"}}>{pro.heading}</h1>
            <img style={{ width: "80%", height: "250px", paddingTop: "20px" }} src={pro.image} />
            <h5 style={{fontSize: "18px"}}>{pro.paragraph}</h5>
        </div>
    ))}
</div> 
    </>
  )
}

export default Homepage1
