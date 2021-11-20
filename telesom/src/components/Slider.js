import {useState} from 'react'
import { SliderData } from './sliderData'

function Slider(){

    const [current, setCurrent] = useState(0)

    const lenght = SliderData.length

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
    }

    function prevSlide(){
        setCurrent(current === 0 ? lenght - 1 : current - 1)

    }

    function nextSlide(){
        setCurrent(current === lenght -1 ? 0 : current + 1)

    }

    console.log(current)
    return(
        <div className="slider-bg">
            {SliderData.map((slide, index)=> {
                return(
                    <div className = {index === current ? "slide active" : "slide"}>
                     <a href ="">
                    {index === current && (
                    <img src={slide.image} alt="photos" className="hadal-image slider-image" />
                    )}
                     </a>
                    </div>
                )
            })};
          
            <div className = "dots-box">
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>
            <i class="fas fa-chevron-left" onClick = {()=> prevSlide()}></i>            
            <i class="fas fa-chevron-right" onClick = {()=> nextSlide()}></i>
        </div>

    )
}


export default Slider