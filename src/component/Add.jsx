import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons/faCloudArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {addVideoApi} from '../Services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddStatus}) {
  const[video,setVideo]=useState({
    caption:'',
    image:"",
    url:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => {
      setShow(false)
      setVideo({
        caption:"",
        image:"",
        url:""
      })

  };
  const handleShow = () => setShow(true);

  const validateLink =(e) =>{
    console.log(e.target.value);
     const link = e.target.value.trim(); 
     console.log(typeof(link)); 
     if(link.endsWith('?feature=shared')){
      const yTkey = link.slice(-26,-15)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})

     }else if(link.startsWith('https://youtu.be')){
         const yTkey =link.slice(17,28)
         console.log(yTkey);
         let embedLink = `https://www.youtube.com/embed/${yTkey}`
         setVideo({...video,url:embedLink})
     }
     
      else if(link.startsWith('https://www.youtube.com/watch?')){
        const yTkey = link.slice(32,43)
        console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})
     }
     
     else{
      const yTkey = link.slice(-11)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({...video,url:embedLink})
     }

    
  }
console.log(video);
// https://www.youtube.com/watch?v=rhrD7as3KJg
// https://youtu.be/rhrD7as3KJg?feature=shared

const handleUpload = async (e)=>{
  e.preventDefault()
  const {caption,image,url} =  video
  if(!caption || !image || !url){
    toast.info('please fill the form completely')
  }else{
     const result = await addVideoApi(video)
     console.log(result);
     if(result.status>=200 && result.status<300){
      toast.success("Video added successfully")
      setAddStatus(result.data)  
      handleClose()
     }else{
      toast.error('something went weong')
      handleClose()
     }
  }
}

  return (
   
    <>
    <div className='d-flex align-items-center'>
             <h5>Upload<span id='h'>new video</span></h5>
             <button className='btn mb-2' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
    </div>

    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm}  className='me-2'/> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text"  placeholder='video caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            <input type="text" placeholder='video image'  className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})} />
            <input type="text" placeholder='video url'  className='form-control mt-3' onChange={(e) =>validateLink(e)}  />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Add