import { useState } from "react";
import { NavLink } from "react-router-dom";

export const AboutPg =()=>{

    const [playVideo, setPlayVideo] = useState(false);

    const handlePlay = () => {
      setPlayVideo(true);
    };


    return(<div >
        <div className="container">
        <div className="aboutDiv">
            <ul>
                <li ><NavLink className="link active" to={"/"}>About</NavLink></li>
                <li><NavLink className="link" to={"/jobs"}>Jobs</NavLink></li>
                <li><NavLink className="link" to={"/Apprentice"}>Apprenticeships</NavLink></li>
            </ul>
        </div>
        <div className="imgDiv">
            <p>Ableton</p>
        </div>
        <div className="info">

        <h3>We make Live, Push, Note and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h3>
        <h4>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</h4>
        </div>
        </div>

<div className="imgStyle1">
    <div className="bgYellow">
        <img src="https://images.pexels.com/photos/2457284/pexels-photo-2457284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
    </div>
    <div className="ToolImg">
        <img src="https://images.pexels.com/photos/7173392/pexels-photo-7173392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""></img>
    </div>
   
</div>
<div className="container-for-text">
        <h3 >Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h3>
        
        <h4> We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</h4>
    </div>
<div className="containerVid">
<div className="vid">
    
      
            
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/9SbnhgjeyXA?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>Why Ableton - Juanpe Bolivar</p>
      
    </div>
  
</div>
<div className="container-for-text2">
    <h3>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h3>

    <h4>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
    Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</h4>
</div>
<div className="imgStyle2">

    <div className="greenCont">
<img src="https://images.pexels.com/photos/1707640/pexels-photo-1707640.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""></img>
<img src="https://images.pexels.com/photos/7828325/pexels-photo-7828325.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>

    </div>
    <div className="greenImg">
        <img src="https://images.pexels.com/photos/7095577/pexels-photo-7095577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
    </div>



</div>
<div className="container-for-text2">
    <h3>We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</h3>
    <h4>Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.</h4>
</div>

<div className="containerForImg">
    <div className="hugeOne">
        <img src="https://images.pexels.com/photos/7947958/pexels-photo-7947958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
    </div>
</div>

<div className="container-for-text3">
    <h3>We’re passionate about what we do, but we’re equally passionate about improving who we are.</h3>

    <h4>We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.</h4>
    <h5>Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.</h5>
</div>
<div className="ImgStyle4">

<div className="pinkBg"></div>
<div className="emp1">
    <img src="https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""></img>
</div>
<div className="emp2">
    <img src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""></img>

</div>


</div>
<div className="container-for-text2">
    <h3>We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.</h3>
    <h4>If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.

</h4>
</div>
<div className="ImgStyle5">
    <div className="img5">
        
            {/* <img src="https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img> */}
        
        
    </div>
    <div className="text5">
        <h2>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h2>
        <h3>See latest jobs <img src="data:image/png;base64,    iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL9JREFUSEvt080JwkAQhuE3PQi5e7EHBW1HvAp2IrkLKSQQrCEQCxAFazADEVYh7nzBBQ/JeTLP/G1G4i9LnJ8JiE74r0Z0AE7ANVp2EODtYAccgRZYK4gXyIFz18EcuABL4O7pxAtYrhBp+k6iiAK8kApYAC5EBQyZAXWArIDH0Lh+AdjSB0elAp/Vf01uXSmALVmavwKMuiAF2HZnWvSXswFunjegABa7B0rlFauAt+i3OGXJEzBqAtGfku/gCS9GIhmCfOLGAAAAAElFTkSuQmCC"/></h3>
    </div>
</div>




















    </div>)

}