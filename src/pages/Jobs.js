
import { NavLink } from "react-router-dom"

export const JobPg =()=>{

    return(<div>
        <div className="containerJobs">
        <div className="aboutDiv">
            <ul>
            <li ><NavLink className="link" to={"/"}>About</NavLink></li>
                <li><NavLink className="link active" to={"/jobs"}>Jobs</NavLink></li>
                <li><NavLink className="link" to={"/Apprentice"}>Apprenticeships</NavLink></li>
            </ul>
        </div>

        <div className="jobImg">
            <p>Jobs at Ableton</p>
        </div>
        <div className="jobInfo">
            <h3>Working at Ableton means being a part of creating products that shape the future of music culture in a dynamic and diverse environment</h3>
            <h4>Here at Ableton, we come from a wide range of cultural and professional backgrounds. We work hard to foster an environment in which people can grow both personally and professionally. We believe that diverse groups of people make better teams. We’re committed to increasing diversity in our workplace and providing equal opportunity throughout our recruitment process. Because of this we ask that you do not include a picture in your application documents. Thank you very much for your understanding.

If you want to apply for one of our open positions, we would be happy to receive your application through our application form. Please upload all necessary documents there.</h4>
        </div>
        <div className="commerce">
            <h3>Commerce</h3>
            <p><NavLink>Ausbildung zur/zum Kauffrau/-mann für Büromanagement (d/w/m)</NavLink></p>
            <p><NavLink>Referendar:in für die Wahlstation bzw. als Teil der Anwaltsstation (d/w/m) </NavLink></p>
        </div>



        </div>

       
    </div>)
}