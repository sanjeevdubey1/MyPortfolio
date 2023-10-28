import React from 'react'
import js from '../video/icons8-javascript-150.png'
import react from '../video/react.png'
import css from '../video/css.png'

export default function Projects() {
  return (
   <>
  <div className="flex">


<div className="skills">
    <p className='text' >Skills</p>
    <div className="containProjects">
        <div className="projects js"><img  className='imgs' src={js}    alt="" /></div>
        <div className="projects"><img src={react} alt="" /></div>
        <div className="projects css"><img src={css} alt="" /></div>
    </div>
</div>
    <div className="mainprojectsdiv">
    <p className='text' >Projects</p>
    <div className="mainprojects">
      <div className="projectdiv">
        <div className="pj"><img src="https://static.vecteezy.com/system/resources/previews/000/457/141/original/landing-page-template-of-website-design-illustration-concept-isometric-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg" alt="" /></div>
        <h5>Bnak Application </h5>
      </div>

      <div className="projectdiv">
        <div className="pj"><img src="https://colorlib.com/wp/wp-content/uploads/sites/2/travelix-free-template.jpg" alt="" /></div>
        <h5>Rock paper</h5>
      </div>

      <div className="projectdiv">
        <div className="pj"><img src="https://cdn.dribbble.com/users/1726280/screenshots/10474951/creative_travel_website_design_4x.png" alt="" /></div>
        <h5>E-comerce Website</h5>
     
      </div>
       
    </div>
    </div>


  </div>

   </>
  )
}
