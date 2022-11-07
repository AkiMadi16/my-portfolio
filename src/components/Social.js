import './Social.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function Social() {
return (
  <div className='social'>
    <h1>Social<FontAwesomeIcon icon={ faUser }/></h1>

    <div className="card">
          <img src="" className="card-img-top" alt="" />
          <a href="https://twitter.com/tweetymadie
" className="btn btn-primary">Twitter</a>


    </div>

    <div className="card">
          <img src="" className="card-img-top" alt="" />
          <a href="https://www.linkedin.com/in/madhavi-m-014b79b2/
" className="btn btn-primary">Linkedin</a>


    </div>

    
  </div>
)
}

export default Social;