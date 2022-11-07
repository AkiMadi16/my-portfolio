import { useNavigate } from "react-router-dom"
import './Resume.css'

function Resume() {
  const navigate = useNavigate();

return(
  <div className="container">
    <h1>Resume</h1>

     <div className="card mb-5">
        <img src="https://i.imgur.com/2duR50c.png" className="card-img-top" alt="" />
        <div className="card-body">
          <a href="https://drive.google.com/file/d/1Ro9NNOvnKJcWSp9Tnnj1b8BqrFABgVuK/view?usp=sharing">Download</a>
        </div>
    </div>
  </div>
 
)
}

export default Resume;