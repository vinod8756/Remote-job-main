import Axios from 'axios'
import React, { Component,  } from 'react'
import Jobpost from '../jobs/jobs'
import './page.css'

class Page3 extends Component {
     
  state = {
      posts: []
  }

    componentDidMount = () => {
        Axios.get('https://remoteok.io/api' , //proxy url
        {
           Headers : {
            
                'Content-Type'  : 'application/json',
               
            }
        })
   
        .then(res => {
            this.setState({posts:res.data})
            console.log(res)
        })  
    }

    render() {

    const posts = this.state.posts.map(
       (data) => {
            return <Jobpost position = {data.position}
            companyname = {data.company}
            logo = {data.company_logo}
            description = {data.description}
            tags = {data.tags}
            key = {data.id}
             />
       } 
    ).slice(151 , 225)


      return (
        <div className = 'page1'>
          {posts}
        </div>
      )


    }
}
export default Page3;