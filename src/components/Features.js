import FeatureBox from "./FeatureBox"

export function CameraIcon(props) {
    return (
        <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2 14C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0H15C15.5304 0 16.0391 0.210714 16.4142 0.585787C16.7893 0.96086 17 1.46957 17 2V12C17 12.5304 16.7893 13.0391 16.4142 13.4142C16.0391 13.7893 15.5304 14 15 14H2ZM19 10L23.445 12.964C23.5957 13.0645 23.7708 13.1222 23.9517 13.131C24.1326 13.1397 24.3125 13.0992 24.4722 13.0136C24.6319 12.9281 24.7653 12.8008 24.8583 12.6454C24.9512 12.4899 25.0002 12.3121 25 12.131V1.869C25 1.68796 24.9509 1.5103 24.8579 1.35499C24.7648 1.19968 24.6314 1.07254 24.4718 0.987126C24.3121 0.901717 24.1323 0.861244 23.9515 0.870028C23.7707 0.878811 23.5956 0.936521 23.445 1.037L19 4V10Z" />
        </svg>
    )
}

export function ClockIcon(props) {
    return (
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.46707 1.89621C10.0359 1.89621 10.4152 1.51697 10.4152 0.948103C10.4152 0.379241 10.0359 0 9.46707 0H5.67466C5.1058 0 4.72656 0.379241 4.72656 0.948103C4.72656 1.51697 5.1058 1.89621 5.67466 1.89621H9.46707ZM14.3972 4.93014C14.7765 4.55089 14.7765 3.98203 14.3972 3.60279C14.018 3.22355 13.4491 3.22355 13.0699 3.60279L12.2166 4.45608C9.46707 2.27545 5.67466 2.27545 2.92516 4.45608L2.07187 3.60279C1.69263 3.22355 1.12376 3.22355 0.744523 3.60279C0.365281 3.98203 0.365281 4.55089 0.744523 4.93014L1.59782 5.78343C-0.962064 9.10179 -0.393201 13.8423 2.92516 16.4022C6.24352 18.9621 10.984 18.3932 13.5439 15.0748C15.7246 12.3253 15.7246 8.53293 13.5439 5.78343L14.3972 4.93014ZM7.57087 12.3253C6.52795 12.3253 5.67466 11.472 5.67466 10.4291C5.67466 9.76546 6.0539 9.10179 6.62276 8.81736V6.63672C6.62276 6.06786 7.002 5.68862 7.57087 5.68862C8.13973 5.68862 8.51897 6.06786 8.51897 6.63672V8.81736C9.46707 9.29141 9.7515 10.4291 9.18264 11.3772C8.8034 11.9461 8.23454 12.3253 7.57087 12.3253Z" />
        </svg>
    )
}

export function WifiIcon(props) {
    return (
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9862 5.685L18 3C15.4913 1.1175 12.375 0 9 0C5.625 0 2.50875 1.1175 0 3L9 15L11.625 11.5012V9.375C11.625 7.305 13.305 5.625 15.375 5.625C15.585 5.625 15.7837 5.655 15.9862 5.685ZM17.25 9.375C17.25 8.34 16.41 7.5 15.375 7.5C14.34 7.5 13.5 8.34 13.5 9.375V10.5C13.0875 10.5 12.75 10.8375 12.75 11.25V14.25C12.75 14.6625 13.0875 15 13.5 15H17.25C17.6625 15 18 14.6625 18 14.25V11.25C18 10.8375 17.6625 10.5 17.25 10.5V9.375ZM14.25 10.5V9.375C14.25 8.7525 14.7525 8.25 15.375 8.25C15.9975 8.25 16.5 8.7525 16.5 9.375V10.5H14.25Z" />
        </svg >
    )
}

function Features() {
    return (
        <div className="bg-white py-20">
            <div className="mx-auto max-w-6xl">
                <div className="font-bold text-center text-3xl">Features for a better experience</div>
                <div className="grid grid-cols-3 mt-12 gap-6">
                    <FeatureBox iconClass="bg-orange-200" icon={<CameraIcon className="fill-orange-500" />} title="Video messaging" description="This software is very easy for you to manage. You can use it as you wish." />
                    <FeatureBox iconClass="bg-green-200" icon={<ClockIcon className="fill-green-600" />} title="Save your time" description="This software is very easy for you to manage. You can use it as you wish." />
                    <FeatureBox iconClass="bg-orange-100" icon={<WifiIcon className="fill-orange-500" />} title="Keep Safe & Private" description="This software is very easy for you to manage. You can use it as you wish." />
                </div>
            </div>
        </div>
    )
}

export default Features