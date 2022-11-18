import React ,{ useState } from "react";

const Tour = ({id,name,info,image,price,removeElement}) =>{
    const [readMore,setReadMore] = useState(false)
    return (
        <article className="main">
            <div className="img">
                <img src={image} alt={name} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h4 style={{color:"blue",padding:'2px 15px',cursor:'pointer',background:'rgba(0,0,255,.1)'}}>$ {price}</h4>

            </div>
            <div className="details">
                <p>
                 {readMore? info :`${info.substring(0,200)}...`}
                 <button className="toggle-btn" onClick={() =>setReadMore(!readMore)}>
                    {readMore ? 'show less' :'read more'}
                 </button>

                </p>
            </div>
            <button className="remove-btn" onClick={()=>removeElement(id)}>not interested</button>
        </article>
    )
}

export default Tour