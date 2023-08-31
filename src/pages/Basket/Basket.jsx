import EmptyBasketContainer from '../../components/EmptyBasket/EmptyBasketContainer'

const Basket = (props) => {
  return (
    <div>
      {props.basketList.length !== 0
      ? <div>Basket is not empty!</div>
      : <EmptyBasketContainer/>
      }
    </div>
  )
}

export default Basket