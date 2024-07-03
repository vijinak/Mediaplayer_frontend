import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Landingpage() {
  return (
    <>
      {/* welcome section */}
      <div className="row mt-5 w-100 justify-content-center align-itens-center">
        <div className="col-md-1"></div>
        <div className="col-md-6 p-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, accusantium repudiandae? Cumque debitis obcaecati odit, doloribus eius cupiditate aliquid ipsa officia, cum, at voluptas non ut nostrum eos corrupti quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, officiis qui exercitationem atque odio fugiat aliquam maiores nesciunt voluptate voluptates accusantium! Ea rem non alias tenetur quaerat eaque maiores quia.</p>
          <button className='btn btn-warning mt-5'> <Link to={'/home'} style={{textDecoration:"none",color:'white'}} >Get Started </Link> </button>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-itens-center p-5">
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75' />
        </div>
        {/* <div className="col-md-1"></div> */}
      </div>
      {/* feature section */}
      <div className="row w-100 mt-2">
        <h3 className='mt-2 text-center'>Features</h3>
        <div className="col-md-1 me-md-5"></div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://i.gifer.com/embedded/download/t7.gif" className='w-100' height={'300px'}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
        <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://i.gifer.com/44zG.gif" className='w-100' height={'300px'}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 px-5 px-md-4 mt-3">
        <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://64.media.tumblr.com/012d44101b8233b758320d3bf910afb7/tumblr_ou6t5pAYWa1s60oo7o1_400.gif" className='w-100' height={'300px'}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        <div className="col-md-1"></div>
      </div>
      {/* simple and powerful section */}
      <div className="row w-100 mt-3 p-1">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-5 mt-5 border rounded m-md-5">
          <div className="row w-100">
            <div className="col-md-6">
              <h3 className='text-warning'>Simple and Powerful</h3>
              <p className='mt-3'><span className='fs-4'>Play Everything: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, voluptate. Suscipit molestiae ab odit autem rem tenetur fugiat incidunt facere obcaecati, aliquid quis blanditiis, sit hic corrupti exercitationem adipisci ex!</p>
              <p className='mt-3'><span className='fs-4'>Play Everything: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, voluptate. Suscipit molestiae ab odit autem rem tenetur fugiat incidunt facere obcaecati, aliquid quis blanditiis, sit hic corrupti exercitationem adipisci ex!</p>
              <p className='mt-3'><span className='fs-4'>Play Everything: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, voluptate. Suscipit molestiae ab odit autem rem tenetur fugiat incidunt facere obcaecati, aliquid quis blanditiis, sit hic corrupti exercitationem adipisci ex!</p>
            </div>
            <div className="col-md-6">
            <iframe width="500" height="90%" src="https://www.youtube.com/embed/GIrW-oOi_gs?list=RDGIrW-oOi_gs" title="Kudajadriyil | Moham | Album Video Song | Nostalgic Song | M. A. Babji | Shahabaz Aman | Swarnalatha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default Landingpage