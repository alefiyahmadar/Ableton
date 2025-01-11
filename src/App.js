import "./styles.css";
import { React, useContext } from "react"
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { AboutPg } from "./pages/AboutPage";
import { JobPg } from "./pages/Jobs";
import { ApprenticePg } from "./pages/Apprentice";
import { HomePage } from "./pages/HomePg";
import { ShopPage } from "./pages/ShopPg";
import { ContextProvider, MediaContext } from "./ContextProv";


export default function App() {

  const navigate = useNavigate()
  const {isMenuOpen , setMenuopen} = useContext(MediaContext)
  return (
    <div className="App">
      <div className={`floatMenu ${isMenuOpen ? "open" : "closed"}`} style={{display:isMenuOpen ? "flex" :"none"}} >
        <ul>
          <li>Live</li>
<li>Push</li>
<li>Note</li>
<li>Link</li>
<li>Shop</li>
<li>Packs</li>
<li>Help</li>
<li>More</li>
<li>Try Live 12 for free</li>
<li >Log in or register</li>

        </ul>
      </div>
      <nav className="nav">
       <div onClick={()=>navigate("/home")} className="logoDiv"></div>
        
      <p className="menu" style={{color: isMenuOpen ? "white" :"black"}}>Menu<img onClick={()=>setMenuopen(!isMenuOpen)} style={{display:"block" }} width="10" height="10" src={ isMenuOpen ? "https://img.icons8.com/ios-filled/50/FFFFFF/chevron-up.png" : "https://img.icons8.com/ios-filled/50/1A1A1A/chevron-down.png" }alt="sort-down"/></p>
        
        <div className="nav-items">
        <p>Live</p>
        <p>Push</p>
        <p>Note</p>
        <p>Link</p>
        <p><NavLink className={"link"} to={"/shop"}>Shop</NavLink></p>
        <p>Packs</p>
        <p>Help</p>
        <p>More</p>
        </div>
        <div className="nav-right">
          <p>Try Live 12 for free</p>
          <p>Log in or register</p>
        </div>
        
      </nav>





      <Routes>
        <Route path="/" element={<AboutPg />}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/jobs" element={<JobPg/>}></Route>
        <Route path="/Apprentice" element={<ApprenticePg/>}></Route>
        <Route path="/shop" element={<ShopPage/>}></Route>
      </Routes>








      <div className="bodyFt">
<div class="containerFt"></div>
<footer>
<section class="ft-main">
<div class="ft-main-item">
    
          <h2 class="ft-title">About</h2>
          <ul>
            <li><a href="#">About Ableton</a></li>
            <li><a href="#">Jobs</a></li>
            
          </ul>
        </div>
        
        <div class="ft-main-item">
          <h2 class="ft-title">Resources</h2>
          <ul>
            <li><a href="#">Sign up </a></li>
            <li><a href="#">Log in</a></li>

          </ul>
        </div>
        <div class="ft-main-item">
          <h2 class="ft-title">Community</h2>
          <ul>
            <li><a href="#">Find Ableton User Group</a></li>
            <li><a href="#">Find Certified Training</a></li>
            <li><a href="#">Become a Certified Trainer</a></li>
          </ul>
        </div>
        <div class="ft-main-item">
        <h2 class="ft-title">Sign up to our newsletter</h2>
        <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.
        </p>
        <form>
            <input type="email" name="email" placeholder="Enter email address" />
            <input type="submit" value="Subscribe" />
          </form>


        </div>
        
        




</section>
<section class="ft-social">
        <ul class="ft-social-list">
          <li><a href="#"><i class="fab fa-facebook"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcFJREFUSEu11T+oT2EYwPHPLYUwyCIki0GRjKRkEJIuMYgsFDKIlAzyJxnUFQburTtYlEEU+TORQWajvyXCYjAoinCeen86vZ3znt8P92znff58n+d9/rxDJvgbmmD/ugCTsQXrsBQL8Atv8BT3cRPf2wItAdbjcnJaSvQV9uFBk1Ib4GQV6YkBru8njuBcbtMEOIXjAzivqx7ExfpBDtiI2wXnn3AYj/A26Y2ks/iNTFbhcc9HHTAdLzG7BfADi/E8k9cBIQr5kl7h64Ao1Ggh+mvYXpOvwQqsxfLMbhNuxVkdcAcbCoBjOJPkW3G9oDuOPTngPeYUjA7hQpJHMc8XdGNGluWAr5jynwCfq26amQO+YFoG+NiRVag/xOrMLnzNyAEvsDBT/IC5HTPxDvMynWdYlAOuVm26Y8AMYld9awjgSjUnu3LANkQrtn2DFLmxTSfhNea3EPoF/LmePIP4jw167x8AscpX4knPR9Oyi2V1oAHSTwan80XZBIizsd4k1kBdgLNVwY/mgZUenJ1pWmclozZAbIC9uNt0tV1P5lTsxub0NF5KTvZjuNqaNxAt+VdPZsd89SfuyqA/LwWt33YeVhnsaaE0AAAAAElFTkSuQmCC"/></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEvd1b1rFVEQBfBfNKAQsYqFoBiFIEIUESstlYAhYJQQIoJFLETsFUXxD9DGQrERCdjYWAiBFDYS0gQFxRSpEhIQBbESwS9I7sA+WNbdzb4Hr8nt9s6dc+6cO3O2R5dXT5fxbT2CPvzcRLbduI9RHMRfPMYd7MX57Hs9cPISbcciJvCphuQNzpTE17Afl/CyFc8TDGAF33AB8yUgJ/C+hvwd3uIFPhQr2Ikf6M0AnuEevuQAL2fJVRwh740k3XRZBbEXtz5VyJ7DayzgOB7VVPAcU/l4XqJdOIxZ9Hc4Hw9ws4pgH1bxPXXBng4JQp4nVQTbsIwDHYJH2hEsVRHE/sWsxVoP3Q5XdOChYkKZVcQc3MXRdtBxHU+bEIxgpk3wGLLBNM1/mhDEmejjKw1J/uF01sb/pVS5aTz4EG6nR5usIQq/uZoaI/q/dJURhOGdxC2cqwH/hZjsV3WV5gnO4mFKOFYwwbL8GMZraWpD+9pVrCCseDwZ1RiGsSPJ9Btf8RnhpHHjj5sBt+Jb74/WtPLG57ou0QbqWz0ZBzSqswAAAABJRU5ErkJggg=="/></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjNJREFUSEvF1UnITWEYB/DfhyLCRlamQiEJkSQskFJfMmS2sTEsFBmKLJTIELKyYCF9hoxRSuykJJIyJpKyYUVW5vfRe+t0Oqd7U7fvrds95x2e///5/5/nPR3aPDraHF+3AYzEVszEeGqJ/MEz3MNxvCkrUpXBBpxAL3zAA7yqkXIyJmIofmATThX3lgGm5IAvsAhvW/QosryBYZiKJ41zZYCrWIAxeN9C8LVJvr34krJdh0cpo+tYUgcQQYN9gBRHD8zDOPzCS9zNc7ezlMMzwCCMqAP4ii5sLEQPfS9iegk0jD2ddP+EwTiDUGA++tUB/MYR7Mgbgvn9zGgb7qBnZn4oV80sRDXFCCJL855/E2UPYuMB7MoHluVD8X+plMHy5NWFZOjCbHAsn0/yxXwQqwUIZjvzejxvR398KwGE1p9TOe9LvuzJayHvqiLxqgyiYbbkAwezXANT44U/xdEA2J96YHdeOIs1zQCO5S6OM1Ful7OuV0oAwTQYFyWK9xXNPChm0DA5SjCkCpOjw+emSjmM15hdMjkA+9R5EDoHi/UFtkOymTMqynQlPhbmo0znICStNDkuq/hVNVow60wV9h23cLPAvBHvMQYkkqPrAIL94lSaY1u8KopJTUj311OcSyRX1wFMSiyDRWwMg9+VZKl7jeDXEF5NyzEqJYrJxnUdBj/MksT8TzxPjdgbo7LZMd8XcQvH+macLLKo+6L9zwfnaNX13m2fzBalb76t7Rn8BcJ+cxlsKeBhAAAAAElFTkSuQmCC"/></i></a></li>
          <li><a href="#"><i class="fab fa-github"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASxJREFUSEvl1TsvBFEYh/HfCp2Igso3oNXoKFQKIa6hk/AtJD6GS4m4h0InLo1G7xPoRKUl7Elem81erZndxlQzOe88z5z/Oe+cgjZfhTbzdVxwh/GMs7rHxA+jcgZfGeFV3EaC66ie+oO0xK0nOMBqgA+x3KKkqWAX6wHdw1regnfsowsr6M1b8IrngA5jsLgzHuJ5CP3YxgdGMFfxAU0jOsZSvHSERUo9M4MnvJRBN4vjW2XPTQUnAU3vJNlCxFVvG3fjDX0hySTowRVGQ5waK12PGMtDkLr0NkA72Ij7S0znIUhrcBGgWlGmoaYRncb0U3GCzCPl/IlZnIfgLMbK6/6JoFGjDURzpShq1f0qohb/DFXldRc5jwPnBpM/yo4fmVmjqZ9V7uQAfgNR+VIZag7oTQAAAABJRU5ErkJggg=="/></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVdJREFUSEvt1T1LHUEUxvHfVQvFF0QFEZQUCpIiRWws06URLPwCFoKF+iVEWxvBKiB+Bb9CuhhQtDGmsBBJoYKIFgHxZQd2YR3u3bmQ3EK40+3OOc//zHnO7Na0eNVarK8NSHY4btEYNjCFcUwmFXjBKa5xhnX8KfLKgGn8RH8TolUhd5jBeQgqA/aw+I/iRfoulmLAIT7/J8ABZmPADYYbAEKf57Cd+5Oq4wIfYsATOhpkPmfmd6ILa/kg9FVQbrNihsqAXjxUJIQTlOEjGWwzm5blyMdC4h4DZUCo7LECEE4XYoqVAvxFT9yiUGWjVQACZCWf9cGK+CuMxoDQotCqeisAFrI7stWkyb/wMQYE5ydS49Hk/nd8iQH7mG9SIBX2LR+ANzf5E34U5qQUEvvhU3EUnyA8h5u8istc4Gv+rruOYPDsJJq+39jBcRHf/uEkrXr/LXoFaFYyGbiLAxQAAAAASUVORK5CYII="/></i></a></li>
        </ul>
      </section>

      <section class="ft-legal">
        <ul class="ft-legal-list">
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; 2019 Copyright Ableton Inc.</li>
        </ul>
      </section>

</footer>
    
</div>



    </div>
  );
}
