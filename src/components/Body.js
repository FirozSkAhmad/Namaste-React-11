import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import NoRes from "./NoRes";
import useResData from "../../utils/useResData";
import { searchHandler, topRatedHandler } from '../../utils/helper'
import UserContext from "../../utils/UserContext";


const Body = () => {

    const [name, setName] = useState("")

    const [data, dataF, setDataF] = useResData()

    const { user, setUserData } = useContext(UserContext)

    return (
        <div className="mt-5">
            <div className="flex gap-5 mb-3 justify-center items-center">
                <div >
                    <input className="border-2 border-blue-50 p-1 rounded-xl" data-testid="resSearchInput" type="text" placeholder="Resturant Name" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
                    <button className="bg-purple-100 p-1 rounded-xl text-lg font-medium" data-testid="searchBtn" onClick={() => searchHandler(data, name, setDataF)}>search</button>
                </div>
                <div>
                    <input className="border-2 border-blue-50 p-1 rounded-xl" type="text" placeholder="Input to change CONTEXT data" defaultValue={user.name} onChange={(e) => setUserData({ ...user, name: e.target.value })}></input>
                </div>
                <div >
                    <button className="bg-purple-100 p-1 rounded-xl text-lg font-medium" onClick={() => topRatedHandler(data, setDataF)}>Top Rated</button>
                </div>
            </div>
            {
                (data.length !== 0) ? (dataF.length !== 0) ?
                    <div className="flex flex-wrap justify-center gap-5" data-testid="resCon">
                        {dataF.map(singleResData => <Link to={"/resturantMenu/" + singleResData?.data?.id} key={singleResData?.data?.id}><ResCard resData={singleResData?.data} /></Link>)}
                    </div>
                    :
                    <NoRes />
                    :
                    <Shimmer />
            }
        </div>

    )
}

export default Body