import { useParams } from 'react-router-dom'
import { RES_IMG_BASE_URL } from '../../utils/constants'
import Shimmer from './Shimmer'
import useResMenuData from '../../utils/useResMenuData'

const MenuCard = (props) => {
    const { menuData } = props
    const { title, itemCards } = menuData
    return (
        <div>
            {(itemCards) ? <h1 className='text-lg font-medium'>{title}</h1> : null}
            {itemCards?.map((x) => <h3 key={x.card.info.id}>{x.card.info.name + " - " + "₹" + (x.card.info.price?x.card.info.price/ 100: x.card.info.defaultPrice/ 100)}</h3>)}
        </div>

    )
}

const ResturantMenu = () => {

    const { id } = useParams()

    const [menuData, resData] = useResMenuData(id)

    console.log(menuData)

    return (menuData?.length !== 0) ? (
        <div className='flex gap-5 mt-3'>
            <div className='resData-con'>
                <h2>Resturant Id:{resData?.id}</h2>
                <h2>{resData?.name}</h2>
                <img alt="res-img" src={RES_IMG_BASE_URL + resData?.cloudinaryImageId}></img>
                <h4>{resData?.avgRating} stars, {resData?.sla?.maxDeliveryTime} mins</h4>
            </div>
            <div className='flex flex-wrap w-7/12 gap-4'>
                {menuData?.map((data, ind) => <MenuCard className="w-52" key={ind} menuData={data.card.card} />)}
            </div>
        </div>
    ) : <Shimmer />
}

export default ResturantMenu