import twittericon from "./assets/twittericon.svg"
import facebookicon from "./assets/facebookicon.svg"
import instagramicon from "./assets/instagramicon.svg"
import githubicon from "./assets/githubicon.svg"
function Footer() {
    function twitterEvent() {
        location.href = "https://x.com/Eneyesadiku"
    }
    function facebookEvent() {
        location.href = "https://web.facebook.com/profile.php?id=100005189147744"
    }
    function instagramEvent() {
        location.href = "https://www.instagram.com/mustyeneye/"
    }
    function githubEvent() {
        location.href = "https://github.com/Enemaki"
    }
    return (
        <div className="footer-div">
            <img src={twittericon} alt="twitter icon" className="icon" onClick={twitterEvent}/>
            <img src={facebookicon} alt="facebook icon" className="icon" onClick={facebookEvent}/>
            <img src={instagramicon} alt="instagram icon" className="icon" onClick={instagramEvent}/>
            <img src={githubicon} alt="github icon" className="icon" onClick={githubEvent}/>
        </div>
    )
}

export default Footer