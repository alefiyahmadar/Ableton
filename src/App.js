import "./styles.css";
import { React } from "react"
import { Routes, Route, NavLink } from "react-router-dom";
import { AboutPg } from "./pages/AboutPage";


export default function App() {
  return (
    <div className="App">
      <nav className="nav">
      
        <img width={50} height={50} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAU1JREFUSEu91M0rBVEcxvHPJZIFWbOwlITIxsLLQhb8JUrYWFDKQpRSxN9BKQspNlJeSmwtLOyVjVJe5mhuXRNzzR3XqdnMOZ3v7zm/5/kVVHkVqny/vIA6XOMNvXhNFpwXMIeN+NJZbP4loAX3EaApvvQJ7XgsheRRsIOpRMXbmP4LQCduUJsAhB504K74v1IFJxj+wYGHGM8DmMR+GXtP4CCcqUTBLbrKAMLz9VQCqMF5pKC/DOAUQyEflSjIFP5/BRxjJKW84JzRkv1GrCI0tA0P0bjYw0L0vXznovdfaC8qro978dnIxAo9GizOpdInygJYihy4nFLQDLaSLsoCCBP0u+qLzLNYxZccZAE8oyFFQRh8zXkUXKEvBXCJgTyA4JSVFMA81vMAgosu0J3FReVycISxRA7W4hy0xjnYxeJPOfhFDLIfqfqo+ADdZzkZL6kfrAAAAABJRU5ErkJggg=="/>
        <div className="nav-items">
        <p>Live</p>
        <p>Push</p>
        <p>Note</p>
        <p>Link</p>
        <p>Shop</p>
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
      </Routes>
    </div>
  );
}
