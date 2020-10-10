import React  from 'react';
import './jobs.css';


const Jobpost = (props) => {
    if (props.companyname.length === 0) {
        return null;
    }

    // let url = null
    // useEffect = () => {
    //   fetchdata()

    // }

    // const fetchdata = () => {
    //     Axios.get('https://remoteok.io/api')
    //     .then(res => {
    //       url = res.url
    //     })
    // }
    

    return (
        <div className = 'posts'>
         <article >
        <h1>{props.position}</h1>
         <h2>{props.companyname} <img style = {{maxHeight : 40 + 'px' , maxWidth : 60 + 'px' }} src = {props.logo} alt = '' /></h2>
         <p style = {{overflowWrap : "break-word"}}>{props.description}</p>
         <h3 style = {{overflowWrap : "break-word"}}>{'#' + props.tags }</h3>
    </article>
    </div>
    )
}
    
   



export default Jobpost;