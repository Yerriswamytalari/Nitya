import { useState } from "react"
import React from 'react'
import "./Home.css"
import {Link,NavLink} from "react-router-dom"

const Navbar = () => {

    let [Username , setUsername] = useState();
    let [Email , setEmail] = useState();

    let handledata = (e)=>{
        e.preventDefault()
        
    }

  return (
    <>
   <img id='img1' src='https://tse2.mm.bing.net/th?id=OIP.AW7AudfzGAtokDVmPkK44gHaE8&pid=Api&P=0&h=180' alt='job'/>
   <div id='dash'>
   <ul>
        <li id='li1'><Link to="/Dashbord">Dashbord</Link></li>
        <li id='li2'><Link to="/Jobpostings">Jobpostings</Link></li>
        <li id='li3'><Link to="/Aisearch">AISearch</Link></li>
        <li id='li4'><Link to="/Account">AccountManagement</Link></li>
    </ul>
    <h1><i id='not' class="fa-regular fa-bell"></i></h1>
    <img id='img2' src='https://tse3.mm.bing.net/th?id=OIP.b5XQ_W2p39q81ef8OhtCQgHaFj&pid=Api&P=0&h=180' alt='Tom'/>
   </div>

   {/* Form */}

   <div id='form'>
   <h2 style={{color:"white"}}>Use Talent Search to Find Candidates</h2>
   <form action="" onSubmit={handledata}> 
                <input style={{height:"40px",width:"300px",paddingLeft:"20px",}} type="text" placeholder='Search Keywords' onChange={e=>setUsername(e.target.value)} /><br></br>
                <input style={{ height:"40px",marginLeft:"20px",width:"300px",paddingLeft:"20px"}} type="email" placeholder='Location' onChange={e=>setEmail(e.target.value)}/><br></br>
                <button style={{width:"150px",marginLeft:"20px",height:"50px",}} type="submit">Submit</button>
            </form>
            <h3 style={{color:"white"}}>Advanced Search</h3>
   </div>

   {/* Account Management */}
   <div style={{marginLeft:"50px",marginTop:"20px"}}>
    <img style={{height:"60px",width:"60px",marginLeft:"30px"}} src='https://tse4.mm.bing.net/th?id=OIP.D6P-BO32wCApcPIIjt6p5wHaHa&pid=Api&P=0&h=180' alt='google'/>
    <h3>Thomas Cruise</h3>
    <p>Bussiness Process Associate</p>
    <h5>Google Inc</h5>
    <div style={{display:"flex"}}>
        <h5>32 <br></br>Job Hits</h5>
        <h5 style={{paddingLeft:"20px"}}>18 <br></br> Shortlisted</h5>
    </div>
    <button style={{height:"40px",color:"white",backgroundColor:"#5072a7"}}>Improve Your Profile</button>
    <div style={{height:"120px",marginTop:"20px",paddingLeft:"20px",width:"100px",border:"6px solid black",borderRadius:"100px"}}>
        <p>Sentiment Score <br></br><b>100%</b></p>
    </div>
    <p>⭐⭐⭐⭐ 4.0 rating</p>
    <p>Last Visited: 14 Hours ago</p>
   </div>

    {/* Your Job Application */}

    <div style={{marginLeft:"400px",marginTop:"-550px"}}>
    <h3 style={{height:"40px",paddingTop:"5px"}}>Your Jobs and Recent Applicants</h3>
    <div style={{display:"flex"}}>
    <div>
        <h1><i class="fa-brands fa-react"></i></h1>
    </div>
    <div style={{paddingLeft:"50px",marginTop:"-20px"}}>
        <h4 style={{color:"#5072a7"}}>Sr.React Js Developer with MySQL Database</h4>
        <p style={{marginTop:"-15px"}}>Location:Bangalore</p>
        <p style={{marginTop:"-15px"}}>Skills: Html Javascript React js Bootstrap</p>
        <h5 style={{marginLeft:"200px"}}>Posted :3 Days ago</h5>
    </div>
    </div>
    {/* <hr></hr> */}
    <div style={{display:"flex"}}>
    <div>
        <h1><i class="fa-brands fa-java"></i></h1>
    </div>
    <div style={{paddingLeft:"50px",marginTop:"-20px"}}>
        <h4 style={{color:"#5072a7"}}>Sr.Java Developer with MySQL Database</h4>
        <p style={{marginTop:"-15px"}}>Location:Bangalore</p>
        <p style={{marginTop:"-15px"}}>Skills: Html Javascript Java Bootstrap</p>
        <h5 style={{marginLeft:"200px"}}>Posted :3 Days ago</h5>
    </div>
    <div id='no'>
        <h1 style={{marginLeft:"300px"}}><i style={{fontSize:"100px",marginTop:"-50px"}} class="fa-regular fa-file"></i></h1>
        <p style={{fontSize:"50px"}}><i class="fa-solid fa-magnifying-glass"></i></p>
        <p style={{marginLeft:"-100px"}}>This Job Posting has No Application</p>
    </div>
    </div>
    {/* <hr></hr> */}
    <div style={{display:"flex",marginTop:"-150px"}}>
    <div>
        <h1><i class="fa-brands fa-python"></i></h1>
    </div>
    <div style={{paddingLeft:"50px",marginTop:"-20px"}}>
        <h4 style={{color:"#5072a7"}}>Sr.Python Developer with MySQL Database</h4>
        <p style={{marginTop:"-15px"}}>Location:Bangalore</p>
        <p style={{marginTop:"-15px"}}>Skills: Html Javascript Python Bootstrap</p>
        <h5 style={{marginLeft:"200px"}}>Posted :3 Days ago</h5>
    </div>
    </div>
   </div>
   {/* Elevete your work */}
   <div style={{marginTop:"100px"}}>
    <h2 style={{backgroundColor:"blue",width:"230px",marginLeft:"20px",color:"white",paddingLeft:"5px"}}>Elevate Your Work</h2>
    <p style={{marginTop:"-10px",paddingLeft:"20px"}}>LEARN. GROW. <br></br>SUCCEED.</p>
    <br></br>
    <h2 style={{marginTop:"-30px",paddingLeft:"20px"}}>Bring your ideas.<br></br>Discover Your Potential</h2>
    <img style={{height:"550px",width:"300px"}} src='https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Student'/>
    <h2 style={{marginLeft:"30px"}}>Diversity Drive @</h2>
    <h1 style={{fontSize:"30px",marginLeft:"30px",color:"blue",marginTop:"-20px"}}>Cognizant</h1>
    <button style={{height:"40px",color:"white",marginLeft:"30px",marginTop:"-10px",width:"150px",fontSize:"20px",backgroundColor:"green"}}>APPLY NOW <span><i class="fa-solid fa-play"></i></span></button>
   </div>

   {/* Search saved and recent saved */}

  <>
  <div style={{display:"flex",marginLeft:"400px",marginTop:"-900px"}}>
  <div style={{height:"250px",width:"500px",paddingLeft:"30px",marginTop:"30px",backgroundColor:"lightgrey"}}>
    <div>
     <div style={{display:"flex"}}>
        <h3>Saved Searches</h3>
        <p style={{marginLeft:"230px"}}>view ALL</p>
     </div>
    <div style={{display:"flex",backgroundColor:"gray",width:"500px",marginLeft:"-15px"}}>
    <div>
        <h1 style={{paddingLeft:"30px"}}><i class="fa-brands fa-react"></i></h1>
     </div>
     <div style={{paddingLeft:"30px"}}>
        <h4>Wordpress Integratorwith 2+ Years</h4>
        <p style={{marginTop:"-20px"}}>Location: Hyderabad</p>
     </div>
    </div>
    </div>
    {/* 2nd */}
    <div style={{display:"flex",backgroundColor:"gray",width:"500px",marginLeft:"-15px",marginTop:"10px"}}>
    <div>
        <h1 style={{paddingLeft:"30px"}}><i class="fa-brands fa-python"></i></h1>
     </div>
     <div style={{paddingLeft:"30px"}}>
        <h4>Python Integratorwith 2+ Years</h4>
        <p style={{marginTop:"-20px"}}>Location: Hyderabad</p>
     </div>
    </div>
   </div>

   {/* 2-2nd */}

   <div style={{height:"250px",width:"500px",marginLeft:"20px",paddingLeft:"30px",marginTop:"30px",backgroundColor:"lightgrey"}}>
    <div>
     <div style={{display:"flex"}}>
        <h3>Saved Searches</h3>
        <p style={{marginLeft:"230px"}}>view ALL</p>
     </div>
    <div style={{display:"flex",backgroundColor:"gray",width:"500px",marginLeft:"-15px"}}>
    <div>
        <h1 style={{paddingLeft:"30px"}}><i class="fa-brands fa-react"></i></h1>
     </div>
     <div style={{paddingLeft:"30px"}}>
        <h4>Wordpress Integratorwith 2+ Years</h4>
        <p style={{marginTop:"-20px"}}>Location: Hyderabad</p>
     </div>
    </div>
    </div>
    {/* 2nd */}
    <div style={{display:"flex",backgroundColor:"gray",width:"500px",marginLeft:"-15px",marginTop:"10px"}}>
    <div>
        <h1 style={{paddingLeft:"30px"}}><i class="fa-brands fa-python"></i></h1>
     </div>
     <div style={{paddingLeft:"30px"}}>
        <h4>Python Integratorwith 2+ Years</h4>
        <p style={{marginTop:"-20px"}}>Location: Hyderabad</p>
     </div>
    </div>
   </div>

  </div>
  </>
  {/* Corporate profile */}
 <div style={{marginLeft:"350px",height:"400px",backgroundColor:"",width:"1170px"}}>
 <div style={{marginTop:"50px",paddingTop:"20px",paddingLeft:"30px"}}> 
   <fieldset style={{display:"flex"}}>
        <legend>Corporate Profile</legend>
        <div style={{paddingLeft:"40px",paddingTop:"40px"}}>
        <h3>→ Give a Make Over To Corporate Profile</h3>
        <h3>→ Screen and video capture enables users</h3>
        <h3>→ Choose High Corporate Profile</h3>
        </div>
        <div>
    <img style={{height:"300px",paddingLeft:"280px"}} src='https://images.pexels.com/photos/6147275/pexels-photo-6147275.jpeg?auto=compress&cs=tinysrgb&w=600' alt='student'/>
  </div>
    </fieldset>
  </div>
 </div>
 {/* Last */}
<>
<div style={{marginLeft:"450px",height:"300px"}}>
    <div>
        <div>
        <p><b>User Guide To Use the Application Scenarios</b></p>
        </div>
        <div style={{display:"flex",marginTop:"20px"}}>
        <div style={{height:"180px",width:"180px",backgroundColor:"orange"}}>
            <img style={{height:"80px",width:"100%"}} src='https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600' alt='resume'/>
            <h5 style={{paddingLeft:"10px"}}>Resume Hilighter</h5>
            <h6 style={{marginTop:"-20px",paddingLeft:"10px"}}>Grab the attention<br></br> of employers</h6>
            <p style={{fontSize:"15px",paddingTop:"-13px",paddingLeft:"80px"}}>→ Read More</p>
        </div>
        {/* 2 */}
        <div style={{height:"180px",width:"180px",backgroundColor:"orange",marginLeft:"20px"}}>
            <img style={{height:"80px",width:"100%"}} src='https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600' alt='resume'/>
            <h5 style={{paddingLeft:"10px"}}>Career Up Skills</h5>
            <h6 style={{marginTop:"-20px",paddingLeft:"10px"}}>Grab the attention<br></br> of employers</h6>
            <p style={{fontSize:"15px",paddingTop:"-13px",paddingLeft:"80px"}}>→ Read More</p>
        </div>
        {/* 3 */}
        <div style={{height:"180px",width:"180px",backgroundColor:"orange",marginLeft:"20px"}}>
            <img style={{height:"80px",width:"100%"}} src='https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=600' alt='resume'/>
            <h5 style={{paddingLeft:"10px"}}>Create Up</h5>
            <h6 style={{marginTop:"-20px",paddingLeft:"10px"}}>Grab the attention<br></br> of employers</h6>
            <p style={{fontSize:"15px",paddingTop:"-13px",paddingLeft:"80px"}}>→ Read More</p>
        </div>
        {/* 4 */}
        <div style={{height:"180px",width:"180px",backgroundColor:"orange",marginLeft:"20px"}}>
            <img style={{height:"80px",width:"100%"}} src='https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600' alt='resume'/>
            <h5 style={{paddingLeft:"10px"}}>Coursera</h5>
            <h6 style={{marginTop:"-20px",paddingLeft:"10px"}}>Grab the attention<br></br> of employers</h6>
            <p style={{fontSize:"15px",paddingTop:"-13px",paddingLeft:"80px"}}>→ Read More</p>
        </div>
        {/* 5 */}
        <div style={{height:"180px",width:"180px",backgroundColor:"orange",marginLeft:"20px"}}>
            <img style={{height:"80px",width:"100%"}} src='https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=600' alt='resume'/>
            <h5 style={{paddingLeft:"10px"}}>Learning Point</h5>
            <h6 style={{marginTop:"-20px",paddingLeft:"10px"}}>Grab the attention<br></br> of employers</h6>
            <p style={{fontSize:"15px",paddingTop:"-13px",paddingLeft:"80px"}}>→ Read More</p>
        </div>
          </div>
    </div>
 </div>
</>
<>
<div style={{marginTop:"-40px",paddingLeft:"650px",paddingTop:"1px",color:"white",height:"50px",backgroundColor:"#5072a7"}}>
    <h4>Copyrights@jobsnprofiles.com</h4>
</div>
</>
    </>

  )
}

export default Navbar
