import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";
import { BlogContainer, SkeletonLoader } from "../styles/Blog";
import { BASE_URL } from "../../config";

function Blog() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("blog");
    }, [setActivePage]);
    const { data, dataIsLoading } = useFetch(`${BASE_URL}/api/post`);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(8);
    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currentPosts = Array.isArray(data) && data?.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumber = [];

    for(let i=1; i <= Math.ceil(data?.length / perPage); i++) {
        pageNumber.push(i);
    }

    const nextButton = () => {
        currentPage < pageNumber.length && setCurrentPage(currentPage + 1);
    }
    const previousButton = () => {
        currentPage > 1 && setCurrentPage(currentPage - 1);
    }

    return(
        <BlogContainer className="Blog">
            <div className="blog__header">
                <p className="subtitle">Latest News</p>
                <h2>From Our Blog</h2>
                <div className="separate-line"></div>
            </div>
        <div className="articles">
            { dataIsLoading
                    ? Array.from({ length: perPage }).map((_, i) => <SkeletonLoader key={i} />)
                    : Array.isArray(currentPosts) && currentPosts.map((post) => {
                        return(
                            <div className="blog-view__article" key={post._id}>
                                <div className="image">
                                    <img src={post.imageUrl} alt=""/>
                                </div>
                                <div className="content">
                                    <h3>
                                        {post.title.slice(0, 40)}
                                        {post.title.length > 40 && '...'}
                                    </h3>
                                    <p>
                                        {post.content.slice(0, 150)}
                                        {post.content.length > 150 && '...'}
                                    </p>
                                    <Link to={`/article/${post._id}`} className="cta-button">More Details</Link>
                                </div>
                            </div>
                        )
            }) }
        </div>
        <div className="buttons-article">
            <button className="previous" onClick={() => previousButton()}>Previous</button>
            <button className="next" onClick={() => nextButton()}>Next</button>
        </div>
        </BlogContainer>
    );
}

export default Blog;