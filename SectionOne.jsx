import { CgShapeCircle } from 'react-icons/cg'
import { BsArrowUpRight } from 'react-icons/bs'
import React from 'react'
import "./SectionOne.css"

const SectionOne = () => {

  
  return (
    <div className="sectionOne">
      <div className="info-cont">
        <div className="conticon">
          <div className="icon-cont">
            <CgShapeCircle size={80}/>
          </div>
        </div>
        <div className="info">
          <p className="sub-head">Welcome To GymPlex <br />Gym Equipments</p>
          <p className='info-text'>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="caro-btn">
          <p>
          Shop Now
          </p>
          <br />
          <BsArrowUpRight/>
        </div>
      </div>
      <div className="image">
        <img src={require('./Product/BackgroundOne.JPG')}/>
      </div>
    </div>
  )
}

export default SectionOne
