import ItemCard from './ItemCard'
import NoRes from './NoRes'
import { useSelector, useDispatch } from 'react-redux'
import { clearItems } from '../../utils/cartSlice'


const Cart = () => {

    const itemsData = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    function clearHandler() {
        dispatch(clearItems())
    }

    return (

        <div className='m-5'>
            {(itemsData.length !== 0) ?
                <>
                    <button onClick={clearHandler} className="p-1 bg-purple-200 rounded-md">Clear Cart</button>
                    <div className="flex flex-wrap justify-center gap-5 my-5">
                        {itemsData.map(singleItemData => <ItemCard key={singleItemData?.item?.id} resData={singleItemData?.item} />)}
                    </div>
                </>
                : <NoRes />}
        </div>


    )
}

export default Cart