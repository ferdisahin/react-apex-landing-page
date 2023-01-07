function CommentBox(props) {
    return (
        <div className={props.class + ` bg-white/90 px-3 py-2 rounded flex gap-3 items-start w-80`}>
            <img src={props.image} className="w-14 h-14 rounded-full object-cover shrink-0" alt={props.name} />
            <div>
                <div className="font-bold text-sm">{props.name}</div>
                <div className="text-sm text-gray-400">{props.comment}</div>
            </div>
        </div >
    )
}

export default CommentBox