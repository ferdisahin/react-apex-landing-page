function Review(props) {
    return (
        <div>
            <div className="bg-white py-8 px-5 rounded relative after:h-4 after:left-1/2 after:-translate-x-1/2 after:border-x-8 after:border-x-transparent after:border-t-8 after:border-t-white after:absolute after:-bottom-4">
                <div className="text-orange-500 text-xl font-bold text-center">“{props.title ? props.title : 'Title'}”</div>
                <div className="text-lg text-gray-600 mt-4 text-center">
                    {props.description ? props.description : 'Description'}
                </div>
            </div>

            <div className="flex items-center justify-center text-white mt-5">
                <img src={props.avatar} className="w-14 h-14 rounded-full object-cover" alt={props.fullname} />

                <div className="ml-5">
                    <div className="font-medium text-lg">{props.fullname}</div>
                    <div className="text-sm">{props.job}</div>
                </div>
            </div>
        </div>
    )
}

export default Review