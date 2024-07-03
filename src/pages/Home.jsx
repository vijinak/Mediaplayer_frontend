import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Add from '../component/Add'
import View from '../component/View'
import Category from '../component/Category'



function Home() {
  const [addStatus,setAddStatus]=useState([])
  return (
    <>
       <div className='d-flex mt-5 p-5' >
        <Add setAddStatus={setAddStatus}/>
        <h5 className='ms-auto'><Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>Watch Histoy<FontAwesomeIcon icon={faClockRotateLeft}/></Link></h5>
       </div>
       <div className="row w-100">
        <div className="col-md-9">
          <h4>All Videos</h4>
          <View addStatus={addStatus}/>
        </div>
        <div className="col-md-3">
          <Category/>
        </div>
       </div>
    </>
  )
}

export default Home