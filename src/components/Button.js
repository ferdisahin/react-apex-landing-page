function Button(props) {
    return (
        <a href={props.href ? props.href : '/'} className={props.className + ` bg-orange-500 hover:bg-orange-600 transition-all text-white py-3 px-5 rounded text-center shadow hover:shadow-lg inline-flex items-center justify-center`}>{props.children ? props.children : 'Button Text'} {props.icon}</a>
    )
}

export default Button