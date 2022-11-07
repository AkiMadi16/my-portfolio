import './Projects.css'

function Projects() {
  const myprojects = [
    {
      name: "Hikr App",
      img: "https://i.imgur.com/s5wpF2w.png",
      description: "This website contains highlights of important places recommended by people around the world along with high quality photography and allow people to find the most popular places to get experience on hiking. Hikr app allows user to add recommendations and maintain thier own profiles and the Map shows recommended sites",
      skills: "React | Express.js | mySQL | HTML | CSS",
      links: [
        { 
          label: "Website",
          url: "https://fierce-oasis-95504.herokuapp.com/"
        },
        {
          label: "GitHub",
          url: "https://github.com/AkiMadi16/happy-feet-app"
        }
      ]
    },
    {
      name: "My Books App",
      img: "https://i.imgur.com/IkLpBrE.jpg",
      description: "This app was build inspired by Read Write Inc. Reading records book. I wanted to digitize this paper book for users to easy to access and keep a record and track of their reading habits.",
      skills: "Ruby | Sinatra | mySQL | HTML | CSS",
      links: [
        { 
          label: "Website",
          url: "https://blooming-coast-56411.herokuapp.com/"
        },
        {
          label: "GitHub",
          url: "https://github.com/AkiMadi16/book_record"
        }
      ]
    },
    {
      name: "Tic-Tac-Toe",
      img: "https://i.imgur.com/FE17aoP.png",
      description: "HTML was used for building the content of the website, CSS for styling and JS for implementing the tic-tac-game. I used DOM manipulation in JS to interact with the HTML elements.",
      skills: "Javascript | HTML | CSS",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/AkiMadi16/tic-tac-toe"
        }
      ]
    },

  ]

return (
  <div className="container">
    <div className="projects"> 
    <h1> My Projects </h1>
    </div>
    
    <div className="portfolio row row-cols-1 row-cols-md-3 g-4">
        {myprojects.map(project => (
          <div className="col" key={project.name}>
            <div className="card">
              <img src={project.img} className="card-img-top" alt={project.name} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <div className="skills">
                  <p>{project.skills}</p>
                </div>
                {project.links.map(link => (
                  <a key={link.label} href={link.url} className="card-link">{link.label}</a>
                ))}
              </div>
            </div>
        </div>
      ))}
    </div>
  </div>
)
}

export default Projects;