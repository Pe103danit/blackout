const ShopCard = () => {

    return (
        <div className="shopCard">
            <img className={style.shopCard__img} src={cardProduct.imageUrl[0]} alt={product.title} />

        </div>
    )
}
export default ShopCard