import { useDispatch } from "react-redux"
import { RES_IMG_BASE_URL } from "../../utils/constants"
import { removeItem } from '../../utils/cartSlice'

const ItemCard = ({ resData }) => {

    const { id, name, category, description, imageId } = resData

    const dispatch = useDispatch()

    function removeHandler(id) {
        dispatch(removeItem(id))
    }

    return (
        <div className="w-56 bg-pink-100 p-2 shadow-md flex flex-col gap-4 rounded-md">
            <img alt="res-img" src={RES_IMG_BASE_URL + imageId}></img>
            <h3>{name}</h3>
            <h4>{category}</h4>
            <h4>{description.split(" ").slice(0, 10).join(" ") + "...."}</h4>
            <button onClick={() => removeHandler(id)} className="p-1 bg-purple-200 rounded-md">Remove</button>
        </div>
    )
}

export default ItemCard