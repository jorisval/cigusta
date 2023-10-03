import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";
import { CatalogContainer, SkeletonLoader } from "../styles/Catalog";
import { BASE_URL } from "../../config";

function Catalog() {
    const { setActivePage  } = useContext(HeaderContext);
    const { data, dataIsLoading } = useFetch(`${BASE_URL}/api/catalog`);
    const [catalogViewData, setCatalogViewData] = useState([]);
    const [selectedCategoryData, setSelectedCategoryData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Dessert");
    const categories = [
        "Dessert",
        "Food",
        "Drunk"
    ];

    const[showCount, setShowCount] = useState(6);
    const handleClick = () => {
        setShowCount(showCount + 6);
    }
    
    useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
        const filteredData = data.filter(product => product.category === selectedCategory);
        setSelectedCategoryData(filteredData);
        setCatalogViewData(filteredData.slice(0, showCount));
    }
    }, [data, selectedCategory, showCount]);


    useEffect(() => {
        setActivePage("catalog");
    }, [setActivePage]);
    

    return(
        <CatalogContainer className="catalog">
            <div className="services-section__header">
                <p className="subtitle">Menu</p>
                <h2>Today's Special</h2>
                <div className="separate-line"></div>
                <div className="category-buttons">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`cta-button ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                            <span className={`bi bi-caret-up-fill ${selectedCategory === category ? "active" : ""}`}></span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="services-section catalog-services">
                <div className="s-services">
                    {dataIsLoading
                        ? Array.from({ length: showCount }).map((_, i) => <SkeletonLoader key={i} />)
                        : catalogViewData.length > 0 ? (catalogViewData.map((product, index) => {
                            return(
                                <div className="s-service" 
                                key={index}
                                > 
                                    <Link to={`/product/${product._id}`}>
                                        <div className="s-service__content">
                                            <img src={product.images[0]} alt=""/>
                                            <div className="part-one">
                                                <div className="header">
                                                    <p className="name">{product.name}</p>
                                                    <p className="price">${product.price}</p>
                                                </div>
                                                <div className="description">
                                                    {product.description.slice(0, 100).toLowerCase()}
                                                    {product.description.length > 100 && '...'}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })) : (
                            <div className="not-found">
                                <h3>No menu available right now in the selected category!</h3>
                            </div>
                        )
                    }
                </div>
                {showCount < selectedCategoryData?.length && (
                    <button className="cta-button" onClick={handleClick}>Show More</button>
                )}
            </div>
        </CatalogContainer>
    );
}

export default Catalog;