import React, { useState } from 'react'
import { CgHeart } from 'react-icons/cg'
// import { CgCart } from 'react-icons/cg'
import { CgShoppingBag } from 'react-icons/cg'
import { CgMenuLeft } from 'react-icons/cg'
import { BsArrowUpRight } from 'react-icons/bs'
import "./SectionTwo.css"

function SectionTwo() {
  const style = {
    color: '#6d1fff'
  }
   const [activeRemove, setActiveSeatch] = useState(false)

    const handleRemove = () =>{
        setActiveSeatch(activeRemove => !activeRemove)
    }

    let toggleClasCheck = activeRemove ? " remove": "";
    let toggleClasCheckAlt = !activeRemove ? " remove": "";

    let toggleRemoveClass = activeRemove ? " leave": "";
    let toggleReomveClassAlt = !activeRemove ? " leave": "";
  return (
    <div className='section-two'>
      <div className="sector-selector">
        <div className="sector">
            <ul>
                <p onClick={handleRemove} className={`${toggleClasCheckAlt}`}>SALE</p>
                {/* <p>PRE-ORDER</p> */}
                <p onClick={handleRemove} className={`${toggleClasCheck}`}>BUNDLES</p>
            </ul>
            <ul className='sale'>
                <p>VIEW ALL SALES</p>
                <BsArrowUpRight/>
            </ul>
        </div>
      </div>


      <div className="allthin">
      <div className={`slees${toggleRemoveClass}`}>
      <div className="sales-row">
        <div className="upper">
          <div className="sales-title">
            <p>Dumbells</p>
          </div>
          <div className="sales-viewAll">
            <p>view all</p>
            <BsArrowUpRight style={style}/>
          </div>
        </div>
        <div className="sales-rowOne">
          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/DumbBellOne.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
                <del>$ 200</del>
                <p>$ 10</p>
              </div>
            </div>
            
            
          </div>


          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/DumbBellNine.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
          </div>


          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/DumbBellFour.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
          </div>


          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/DumbBellSix.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="sales-row">
        <div className="upper">
          <div className="sales-title">
            <p>Weight Vests</p>
          </div>
          <div className="sales-viewAll">
            <p>view all</p>
            <BsArrowUpRight style={style}/>

          </div>
        </div>
        <div className="sales-rowOne">
          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/WeightVestOne.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
            <div class="secondLine s2top"></div>
            <div class="secondLine s2bottom"></div>
            <div class="secondLine s2left"></div>
            <div class="secondLine s2right"></div>
          </div>


          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/WeightVestTwo.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
            <div class="secondLine s2top"></div>
            <div class="secondLine s2bottom"></div>
            <div class="secondLine s2left"></div>
            <div class="secondLine s2right"></div>
          </div>


          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/WeightVestThree.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
            <div class="secondLine s2top"></div>
            <div class="secondLine s2bottom"></div>
            <div class="secondLine s2left"></div>
            <div class="secondLine s2right"></div>
          </div>


          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/WeightVestSix.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
            <div class="secondLine s2top"></div>
            <div class="secondLine s2bottom"></div>
            <div class="secondLine s2left"></div>
            <div class="secondLine s2right"></div>
          </div>
        </div>
      </div>


      <div className="sales-row">
        <div className="upper">
          <div className="sales-title">
            <p>Clearance</p>
          </div>
          <div className="sales-viewAll">
            <p>view all</p>
            <BsArrowUpRight style={style}/>

          </div>
        </div>
        <div className="sales-rowOne">
          <div className="box-one">
            <div className="box-img">
              <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/KettleBellTwo.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
            <div class="secondLine s2top"></div>
            <div class="secondLine s2bottom"></div>
            <div class="secondLine s2left"></div>
            <div class="secondLine s2right"></div>
          </div>


          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/MedicineBallOne.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
            <div class="secondLine s2top"></div>
            <div class="secondLine s2bottom"></div>
            <div class="secondLine s2left"></div>
            <div class="secondLine s2right"></div>
          </div>


          <div className="box-one">
            <div className="box-img">
              <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/FoamDumbBellOne.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
            <div class="secondLine s2top"></div>
            <div class="secondLine s2bottom"></div>
            <div class="secondLine s2left"></div>
            <div class="secondLine s2right"></div>
          </div>


          <div className="box-one">
            <div className="box-img">
              <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/YogaMatOne.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
                <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className={`bundless${toggleReomveClassAlt}`}>
          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/BundleFive.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
          </div>
          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/BundleNine.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
          </div>
          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/BundleFour.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
          </div>
          <div className="box-one">
            <div className="box-img">
            <div className="item-icon">
                <div><CgHeart/></div>
                <div><CgShoppingBag/></div>
                <div><CgMenuLeft/></div>
              </div>
              
              <img src={require('./Product/BundleTwo.JPG')}/>
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="item-price">
              <del>$ 200</del>
                <p>$ 100</p>
              </div>
            </div>
            
          </div>
      </div>
      </div>



      <div className="categories-cont">

        <div className="categorry-titles">
          <p>Shop By Category</p>
        </div>
        <div className="shopCategories">

          <div className="pngs">
            <div className="png-img">
              <img src={require('./PNGS/THinStrenght.png')}/>
            </div>
            <div className="info">
              <p>Strenght</p>
            </div>
          </div>

          <div className="pngs">
            <div className="png-img">
              <img src={require('./PNGS/ThinAbs.png')}/>
            </div>
            <div className="info">
              <p>Core</p>
            </div>
          </div>

          <div className="pngs">
            <div className="png-img">
              <img src={require('./PNGS/ThinSupplements.png')}/>
            </div>
            <div className="info">
              <p>Supplements</p>
            </div>
          </div>

          <div className="pngs">
            <div className="png-img">
              <img src={require('./PNGS/ThinRunnig.png')}/>
            </div>
            <div className="info">
              <p>Cardio</p>
            </div>
          </div>

          <div className="pngs">
            <div className="png-img">
              <img src={require('./PNGS/ThinDeadlift.png')}/>
            </div>
            <div className="info">
              <p>Strenght</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default SectionTwo
