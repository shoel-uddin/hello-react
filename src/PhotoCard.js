import React, { useState } from 'react'




function PhotoCard(props) {
    const [count, setCount] = useState(0)
    const [unLike, setUnlike] = useState(0)
    // const state = useState(0);
    // const count = state[0];
    // const setCount= state[1];
    console.log(props);
    return ( 
        <div className="card-frame">
            <button onClick={
                (e) => {
                    console.log('Pressed Like');
                    setCount(count + 1)
                }
            }>Like {count ? count : null} </button>

            <button onClick={
                (e) => {
                        // This is used to count down and stop if Zero(0)!
                    // count === 0 ? setCount(count) : setCount(count - 1) 
                    console.log('Pressed DisLike');
                        // This code is used to increment DisLike count!
                    setUnlike(unLike +1)
                }
            }>DisLike </button>

            <p> Likes: {count} </p> <p>Dislike: {unLike}</p>
            {props.title ? <h2>{props.title}</h2> : <h2>Untitled</h2> }
          {/* {props.title && <h2>{props.tile}</h2>} */}
          {/* <h2>{props.title}</h2> */}
        <img src={
            props.url
            } />
        <p>{props.description}</p>
    </div>  
    )
    
}

export default PhotoCard;