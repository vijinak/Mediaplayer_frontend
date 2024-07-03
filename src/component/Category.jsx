import { faPenNib, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {addCategoryapi, updateCategoryApi} from '../Services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {allCategoryapi} from '../Services/allApi'
import {deleteCategoryApi, avideoApi} from '../Services/allApi'



function Category() {
  const [show, setShow] = useState(false);

  const [categoryName, setcategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  // const [categoryDelete, setcategoryDelete] = useState([])
  const handleClose = () => {setShow(false);
    setcategoryName("")
  }
  const handleShow = () => setShow(true);
  const addCategory=async()=>{
    if(categoryName){
      const reqbody={
        categoryName,
        allVideo:[]
      }
      const result =await addCategoryapi(reqbody);
      console.log(result);
      if(result.status>=200&& result.status<300){
        handleClose()
        toast.success('Category added successfully')
        getAllcategory()
      }
    }
    else{
      toast.info('Please add category name')
    }
  }

  const getAllcategory=async()=>{
    const result = await allCategoryapi()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllCategory(result.data)
      // getAllcategory()
    }
  }
  
  console.log(allCategory);
  // delte category
  const delCategory = async(id)=>{
    const result = await deleteCategoryApi(id)
    getAllcategory()
    console.log(result);
  }
  // drop
  const dragOver = (e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e, categoryId)=>{
    console.log('cateid',categoryId);
    // access tth video id from view component
    const videoId=e.dataTransfer.getData("videoId")
    console.log('videid',videoId);
    // get video details from backend
    const {data} = await avideoApi(videoId)
    console.log(data);
    const selectedCategory = allCategory.find((item)=>item.id==categoryId)
    if(selectedCategory.allVideo.find((item)=>item.id==categoryId)){
      toast.warning('Video already exist in Category')
    }
    else{
      selectedCategory.allVideo.push(data)
      await updateCategoryApi(categoryId, selectedCategory)
      getAllcategory()
    }
  }
  // console.log(allCategory);
  const dragStart =(e, videoId, categoryId)=>{
    console.log('id is',videoId,categoryId);
    let dataShare ={
      videoId, categoryId
    }
    e.dataTransfer.setData('dataShared',JSON.stringify(dataShare))
  }
  useEffect(()=>{
  getAllcategory()},[])

  return (
    <>
     <div className='w-100 mt-md-1 mt-5 p-4'>
      <button className='btn btn-warning w-100'onClick={handleShow}> Add new Category <FontAwesomeIcon icon={faPlus} /></button>
     </div>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faPenNib}  className='me-2'/>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <input type='text  ' placeholder='Enter Category name' className='form-control' onChange={(e)=>setcategoryName(e.target.value)}/>
              
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={addCategory}>
            Add
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>  

    {allCategory?.length>0?
    allCategory?.map((item)=>(
    <div className='mt-md-5 mt-2' key={item.id} droppable={'true'} onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
      <div className='border border-secondary mt-3 rounded p-3 ms-4 ms-md-0' >
       <div className='d-flex'>
       <p>{item.categoryName}</p>
        <button className='btn btn-danger ms-auto' onClick={()=>delCategory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
       </div>
       <Row>
        {item?.allVideo?.length>0?
        item?.allVideo?.map((videoItem,index)=>(<Col sm={12} key={index} draggable onDragStart={(e)=>dragStart(e,videoItem.id,item.id)}>
          <VideoCard displayVideo={videoItem} isPresent={true}/> 
        </Col>)):null}
       </Row>
        
      </div>
    </div>))
    :null}

    </>
   
  )
}

export default Category