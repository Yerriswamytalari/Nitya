import React from 'react'

const AccountManagement = () => {
  return (
    <>
     <div>
    <img style={{height:"60px",width:"60px"}} src='https://tse4.mm.bing.net/th?id=OIP.D6P-BO32wCApcPIIjt6p5wHaHa&pid=Api&P=0&h=180' alt='google'/>
    <h3>Thomas Cruise</h3>
    <p>Bussiness Process Associate</p>
    <h5>Google Inc</h5>
    <div style={{display:"flex"}}>
        <h5>32 <br></br>Job Hits</h5>
        <h5 style={{paddingLeft:"20px"}}>18 <br></br> Shortlisted</h5>
    </div>
    <button style={{height:"40px",color:"white",backgroundColor:"#5072a7"}}>Improve Your Profile</button>
    <div style={{height:"120px",marginTop:"20px",paddingLeft:"20px",width:"100px",border:"6px solid black",borderRadius:"100px"}}>
        <p>Sentiment Score <br></br><b>89%</b></p>
    </div>
    <p>⭐⭐⭐⭐ 4.0 rating</p>
    <p>Last Visited: 14 Hours ago</p>
   </div>
    </>
  )
}

export default AccountManagement
