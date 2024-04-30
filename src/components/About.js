//import React, {useState} from 'react'

export default function About(props) {
    /*const [myStyle,setmyStyle] = useState({
        color: 'black',
        backgroundColor:'white',
    });*/
    let myStyle = {
        color: props.mode === 'dark' ? 'white':'rgb(3, 16, 90)',
        backgroundColor: props.mode === 'dark' ? 'rgb(3, 16, 90)':'white'
    }
  return (
    <div className="container" style={myStyle}>
        <h1 className='my-3' style={myStyle}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item"  style={myStyle}>
                <h2 className="accordion-header">
                <button  style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sint eveniet est quas explicabo quia dolor impedit, obcaecati nisi maiores maxime quisquam, ullam recusandae quo nemo delectus rerum provident! Impedit.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non amet voluptatum laborum similique nulla eaque possimus inventore perspiciatis, saepe sapiente itaque illum sit consequatur at omnis facilis officia dicta explicabo?
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, tempore atque dolore labore magni illo alias optio impedit et? Quam consequuntur autem quas sed eaque dolor incidunt enim pariatur libero!
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
