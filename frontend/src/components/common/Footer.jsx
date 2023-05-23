import Gallery1 from "../../assets/images/gallery01.png";
import Gallery2 from "../../assets/images/gallery02.png";
import Gallery3 from "../../assets/images/gallery03.png";
import Gallery4 from "../../assets/images/gallery04.png";
import Gallery5 from "../../assets/images/gallery05.png";
import Gallery6 from "../../assets/images/gallery06.png";
import { useFetch } from "../utils/hooks";
import { Link } from "react-router-dom";


function Footer() {
    const { data } = useFetch('http://localhost:3000/api/post');
    const posts = Array.isArray(data) && data?.slice(0, 3);

    const formatedDate = (isoDate) => {
        // Create a new Date object from the ISO date string
        const date = new Date(isoDate);

        // Define an array of month names
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Format the date into the desired format
        const formatDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

        return(formatDate); // "March 29, 2023"

    }

    return (
        <div className="footer">
            <div className="footer__part-1">
                <div className="about">
                    <h3>About Us</h3>
                    <div className="separate-line"></div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis</p>
                </div>
                <div className="recent-blog">
                    <h3>Recent Post</h3>
                    <div className="separate-line"></div>
                    {posts && Array.isArray(posts) && 
                        posts.map((post) => {
                            return(
                                <div className="recent-blog__post" key={post._id}>
                                    <Link to={`/article/${post._id}`}>
                                        <span className="bi bi-caret-right-fill"></span>
                                        <div>
                                            <p>
                                                {post.title.slice(0, 35).toLowerCase()}
                                                {post.title.length > 35 && '...'}
                                            </p>
                                            <span>{formatedDate(post.dateCreated)}</span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="legal">
                    <h3>Useful Link</h3>
                    <div className="separate-line"></div>
                    <ul>
                        <li><a href="#b"><i className="bi"></i>FAQ</a></li>
                        <li><a href="#b"><i className="bi"></i>Team</a></li>
                        <li><a href="#b"><i className="bi"></i>History</a></li>
                        <li><a href="#b"><i className="bi"></i>Sales Conditions</a></li>
                        <li><a href="#b"><i className="bi"></i>Privacy Policy</a></li>
                        <li><a href="#b"><i className="bi"></i>Return & Fund Policy</a></li>
                    </ul>
                </div>
                <div className="gallery">
                    <h3>Gallery</h3>
                    <div className="separate-line"></div>
                    <div className="gallery-images">
                        <img src={Gallery1} alt="" />
                        <img src={Gallery2} alt="" />
                        <img src={Gallery3} alt="" />
                        <img src={Gallery4} alt="" />
                        <img src={Gallery5} alt="" />
                        <img src={Gallery6} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer__part-2">
                <div className="footer-copyright">
                    <p>© 2024 CIGUSTA! | All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;