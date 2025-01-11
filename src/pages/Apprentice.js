import { NavLink } from "react-router-dom"
export const ApprenticePg =()=>{

    return(<div>

        <div className="containerAppr">
        <div className="aboutDiv">
            <ul>
            <li ><NavLink className="link" to={"/"}>About</NavLink></li>
                <li><NavLink className="link" to={"/jobs"}>Jobs</NavLink></li>
                <li><NavLink className="link active" to={"/Apprentice"}>Apprenticeships</NavLink></li>
            </ul>
        </div>
        <div className="apprImg1">
            <h2>Apprenticeships at Ableton</h2>
            <h3>What are they and what do you need to get started?</h3>
            <h4>Dual apprenticeship programs have a long tradition in Germany, and they play an important role in the country’s economy. The programs are a proven stepping stone towards a meaningful career without the need for a university degree. They give you the chance to apply theoretical knowledge learned in a vocational school to tasks in the workplace, while you divide your time between class and office days.</h4>

        </div>
        <div className="apprImg2">
            <div></div>
        </div>
<div className="apprImg3">
    <p>At Ableton, you'll work towards the Office Management Assistant apprenticeship over two and a half years, developing your professional and personal skills in different teams. We look for people who are highly motivated to work in a commercial office environment, with an excellent level of German and very good English. It’s important that you’re eager to learn, organized in your work, and communicative when collaborating with others. Plus, you should be ready to get the most out of your development through giving and receiving feedback. You can expect a relaxed, professional atmosphere with a dynamic team of people who love music in return.

</p>
</div>
<div className="apprImg4">
    <div></div>
</div>


        </div>

    </div>)
}