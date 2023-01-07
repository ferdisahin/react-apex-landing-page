function FeatureBox(props) {

    return (
        <div className="flex items-center gap-5">
            <div className={props.iconClass + ` w-16 h-16 rounded-full shrink-0 flex items-center justify-center`}>
                {props.icon}
            </div>
            <div>
                <div className="text-xl font-bold">{props.title ? props.title : 'Title'}</div>
                <div className="text-gray-800 mt-3">
                    {props.description ? props.description : 'Description'}
                </div>
            </div>
        </div>
    )
}

export default FeatureBox