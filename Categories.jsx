import React from 'react'
import "./Categories.css"

function Categories() {
  return (
    <div>
        <div className="catee">
            <div className="category-contan">
                <div className="verti-con">
                <div className="verti imgmg">
                    <img src={require('./Category/weightvesttwo.JPG')}/>
                    <p>lorem</p>
                </div>
                <div className="verti imgmg">
                    <img src={require('./Category/benchpress.JPG')}/>
                    <p>lorem</p>
                </div>
                </div>
                <div className="horizon imgmg">
                    <img src={require('./Category/deadlifttwo.JPG')}/>
                    <p>lorem</p> 
                </div>
                
            </div>


            <div className="category-contan">
                <div className="horizon imgmg">
                <img src={require('./Category/dumbelltwo.JPG')}/>
                    <p>lorem</p> 
                </div>
                <div className="verti-con">
                <div className="verti loll imgmg">
                    <img src={require('./Category/dumbell.JPG')}/>
                    <p>lorem</p>
                </div>
                <div className="verti loll imgmg">
                <img src={require('./Category/kettlebell.JPG')}/>
                    <p>lorem</p>
                </div>
                </div>
                
            </div>

        </div>

      
    </div>
  )
}

export default Categories
