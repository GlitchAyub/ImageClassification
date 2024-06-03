import React from 'react'
import '../App.css'
import John from '../images/john.jpg'
import Leo from '../images/leo.jpg'
import Rock from '../images/rock.jpg'
import Ronda from '../images/ronda.jpg'
import Ronaldo from '../images/ronaldo.jpg'



export default   function Avatar ()  {
  return (
    <>
    <div className="row mx-auto">
        <div className="first col-6 col-md-2 col-lg-2 col-sm-4">
        <img src={Leo} alt="Avatar" class="avatar"></img>
        </div>
        <div className="col-6 col-md-2 col-lg-2 col-sm-4">
        <img src={Ronaldo} alt="Avatar" class="avatar"></img>
        </div>      <div className="col-6 col-md-2 col-lg-2 col-sm-4">
        <img src={Ronda} alt="Avatar" class="avatar"></img>
        </div>      <div className="col-6 col-md-2 col-lg-2 col-sm-4">
        <img src={Rock} alt="Avatar" class="avatar"></img>
        </div>      <div className="col-6 col-md-2 col-lg-2 col-sm-4">
        <img src={John} alt="Avatar" class="avatar"></img>
        </div>     
    </div>
    </>
  )
}
