import SearchIcon from '@mui/icons-material/Search';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DoDisturbOutlinedIcon from '@mui/icons-material/DoDisturbOutlined';


function Assign(){
    return(


 <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
 <div className="container-fluid">
   <h6 className="navbar-brand text-primary" >EDYODA</h6>
  
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li >
         <h6 className="nav-link dropdown-toggle" >
           Courses
         </h6>
         
       </li>
       <li >
         <h6 className="nav-link dropdown-toggle" >
           Programs
         </h6>
         
       </li>
     </ul>
     <form className="d-flex" role="search">
        <div id='container'>
        <i className="bi bi-cash"></i>
            <SearchIcon/>
          <p>Login</p>
        <button className="btn btn-primary"  style={{ borderRadius:20}} type="submit">JOIN NOW</button>
        </div>
       
     </form>
   </div>
 </div>
</nav>

    <body id='container3'>


  <div className='item1'>

   
  
 
    <section style={{fontSize:30}}>
    <p style={{fontSize:40}}>Access curated courses worth <br></br>
    <CurrencyRupeeIcon  style={{fontSize:15}}></CurrencyRupeeIcon><s style={{color:'red'}} >18,500</s> at just <span style={{color:'blue'}}><CurrencyRupeeIcon style={{fontSize:15}}></CurrencyRupeeIcon>99 </span> per year</p>
    <p><PlayLessonOutlinedIcon></PlayLessonOutlinedIcon> <span style={{color:'blue'}}>100+</span> job revelant courses </p>
     <p><AccessTimeOutlinedIcon></AccessTimeOutlinedIcon>  <span style={{color:'blue'}}>20,000+</span> Hours of content</p>
     <p><LiveTvOutlinedIcon></LiveTvOutlinedIcon> <span style={{color:'blue'}}>Exlusive</span> webniar acess</p>
    <p><SchoolOutlinedIcon></SchoolOutlinedIcon>  Scholarsship worth <span style={{color:'blue'}}><CurrencyRupeeIcon  style={{fontSize:15}}></CurrencyRupeeIcon> 94,500</span></p>
    <p><DoDisturbOutlinedIcon></DoDisturbOutlinedIcon>     <span style={{color:'blue'}}>Ad Free</span> learning experience</p> 
  </section>

<section id='section'>
  <div className='item2 item3'  >
    <p ><span style={{backgroundColor:'blue', backgroundSize:20 ,border:2, borderRadius:70, borderWidth:20, fontSize:20, textAlign:'center'}} >1</span><br/>Sign Up</p>
    <p ><span style={{backgroundColor:'blue', backgroundSize:20 ,border:2, borderRadius:70, borderWidth:20, fontSize:20, textAlign:'center'}} >2</span><br/>Subscribe</p>
  
  </div>
  <h5 style={{textAlign:'center'}}> select your plan</h5>
  <div className='item2 item4' >
    <p>  <span style={{fontSize:10, backgroundColor:'red'}}> expired</span> <br/><label><input  type="radio" name='rad'/> 12 months Subscription</label></p>
  
     <p>total<span style={{fontSize:15}}><CurrencyRupeeIcon  style={{fontSize:15}}/>99</span><br/><span style={{fontSize:10}}><CurrencyRupeeIcon style={{fontSize:10}}/>8 / mo</span></p>
  </div>
  <div className='item2 item4' >
    <p>  <span style={{fontSize:10, backgroundColor:'green'}}> Recomnded</span> <br/><label><input  type="radio" name='rad'/> 12 months Subscription</label></p>
  
     <p>total<span style={{fontSize:15}}><CurrencyRupeeIcon  style={{fontSize:15}}/>179</span><br/><span style={{fontSize:10}}><CurrencyRupeeIcon style={{fontSize:10}}/>15 / mo</span></p>
  </div>
  <div className='item2 item4'  >
    <p> <label><input  type="radio" name='rad'/>6 months Subscription</label></p>
  
     <p>total<span style={{fontSize:15}}><CurrencyRupeeIcon  style={{fontSize:15}}/>149</span><br/><span style={{fontSize:10}}><CurrencyRupeeIcon style={{fontSize:10}}/>25 / mo</span></p>
  </div>
  <div className='item2 item4' >
    <p>  <label><input  type="radio" name='rad'/> 3 months Subscription</label></p>
  
     <p>total<span style={{fontSize:15}}><CurrencyRupeeIcon  style={{fontSize:15}}/>99</span><br/><span style={{fontSize:10}}><CurrencyRupeeIcon style={{fontSize:10}}/>33 / mo</span></p>
  </div>
 <hr></hr>

 <div className='item2 item3' >
  <p>Subscription fee</p>
  <p><CurrencyRupeeIcon/>18,500</p>
 </div>
<div className='item2 item4' style={{backgroundColor:'red'}} >
  <p>limted offer<br/><span style={{fontSize:15 , }}><AccessTimeOutlinedIcon style={{fontSize:15}}/>offer valid till march 2023</span></p>
  <p><CurrencyRupeeIcon/>-18,401</p>
</div>
<div className='item2 item3'>
  <p>Total(incl of 18% gst)</p>
  <p><CurrencyRupeeIcon/>149</p>
 </div>
<div className='item2 item3'>
<button type="button" class="btn btn-outline-danger">Cancel</button>
<button type="button" class="btn btn-success">proceed to pay</button>
</div>

<img src='https://www.j2store.org/images/extensions/payment_plugins/Razorpay.png' style={{height:40, width:100}} ></img>

</section>
  


  
  



  











</div>
        
    </body>


    
 
 
 </>       
    )
}


export default Assign;