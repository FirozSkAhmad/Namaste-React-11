const ShimmerBox = () => {
    return (
        <div className="w-56 h-40 bg-gray-100 p-1 shadow-md"></div>
    )
}

const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center gap-5">
            {Array(15).fill("").map((x, ind) => <ShimmerBox key={ind} />)}
        </div>
    )
}

export default Shimmer