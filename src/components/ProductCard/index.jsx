import "./index.css"

export function ProductCard(props) {
    const { image, category, title, price} = props.data;

    return (
        <div className="product-card">
            <img className="product-card__image" width={200} src={image} alt="" />
            <div className="product-card__main">
                <div className="product-card__category">{category}</div>
                <h4 className="product-card__title">{title}</h4>
                <div className="product-card__price">
                    {price}
                    <button class="add-to-cart">Add to Card</button>
                </div>
            </div>
        </div>
    )
}