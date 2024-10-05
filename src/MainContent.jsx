import mail from "./assets/mail.svg"
import linkedin from "./assets/linkedin.svg"
function MainContent() {
    function linkedinEvent() {
        location.href = "https://www.linkedin.com/in/mustaphasadiku/"
    }
    function mailEvent() {
        location.href = "mailto:mustyeneye@gmail.com"
    }
    return (
        <main>
           <h3 className="text">Sadiku Mustapha Eneye</h3>
           <h4 className="text">Web developer</h4>
           <p><a href="https://mustyeneye.wordpress.com/">mustyeneye.wordpress.com</a></p>
           <div className="btn-div">
            <button className="btn" id="mail" onClick={mailEvent}>
                <img src={mail} alt="mail icon"/>
                <span className="btn-span">Email</span>
            </button>
            <button className="btn" id="linkedin" onClick={linkedinEvent}>
                <img src={linkedin} alt="linkedin icon"/>
                <span className="btn-span">Linkedin</span>
            </button>
           </div>
           <div className="info">
            <h5>About</h5>
            <p>I am a web developer with a particular interest 
                in making things simple and automating daily tasks. 
                I try to keep up to date with the newest technologies 
                and best practices, and am always 
                looking for new things to learn.
            </p>
            <h5>Interests</h5>
            <p>Food expert. Music enjoyer. Reader. 
                Youtube fanatic. Anime fanatic. Entrepreneur. 
                Manga geek. Football fanatic.
            </p>
           </div>
        </main>
    )
}

export default MainContent