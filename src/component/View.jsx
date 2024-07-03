import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { allCategoryapi, getVideoApi } from '../Services/allApi'

function View({ addStatus }) {

    const [videoDetails, setVideoDetails] = useState([])
    const [deleteVideoStatus, setDeleteVideoStatus] = useState([])

    const getvideo = async () => {
        const result = await getVideoApi()
        console.log(result.data);
        setVideoDetails(result.data)
    }

    const dragOver = (e) => {
        e.preventDefault()
    }
    const videoDrop = async (e) => {
        const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData("dataShared"))
        console.log('video is', videoId, categoryId);
        // get all category
        const { data } = await allCategoryapi()
        console.log(data);
        // get selected category
        const selectedCategory = data.find((item) => item.id == categoryId)
        console.log(selectedCategory);
        // remove video from the selected category
        const result = selectedCategory.allVideo.filter((item => item.id != videoId))

        const reqBody = {
            categoryName: selectedCategory.categoryName,
            allVideo: result,
            id: selectedCategory.id
        }
        console.log(reqBody);
        await updateCategoryApi(categoryId,reqBody)
    }
    useEffect(() => {
        getvideo()
    }, [addStatus, deleteVideoStatus])
    console.log(videoDetails);


    return (
        <Row className='w-100 ms-2 ms-md-0' droppable={'true'} onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e)}>

            {videoDetails?.length > 0 ?
                videoDetails?.map((item, index) => (<Col xs={12} md={6} lg={4} xl={3} key={index} className='d-flex justify-content-center align-items-center' >
                    <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus} />
                </Col>))

                :
                <p className='text-warning fs-5 mt-5'>no video yet Uploaded......</p>}
        </Row>
    )
}

export default View