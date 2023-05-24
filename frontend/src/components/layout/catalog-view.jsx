import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../utils/hooks";
import { CatalogViewContainer, SkeletonLoader } from "../styles/Catalog-view";

function CatalogView() {
    const { data, dataIsLoading } = useFetch('http://localhost:3000/api/catalog');
    const [catalogViewData, setCatalogViewData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Dessert");
    const categories = [
        "Dessert",
        "Food",
        "Drunk"
    ];
    
    useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
        const filteredData = data.filter(product => product.category === selectedCategory);
        setCatalogViewData(filteredData.slice(0, 4));
    }
    }, [data, selectedCategory]);

    return (
        <CatalogViewContainer className="services-section">
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
            <div className="s-services">
                { dataIsLoading ? 
                    Array.from({ length : 4 }).map((_, i) => <SkeletonLoader key={i} />)
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
            <Link to='/catalog' className="cta-button">View More</Link>
            <div className="catalog-view__overlay"></div>
        </CatalogViewContainer>
    );
}

export default CatalogView;
