import Button from "./Button"
import HeroImg from "../hero-img.png"
import CommentBox from "./CommentBox"

import Plx from "react-plx";

export function RightArrowIcon(props) {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M11.2071 3.04289L10.5 3.75L10.5 3.75L11.2071 3.04289ZM9.79289 3.04289L9.08579 2.33579V2.33579L9.79289 3.04289ZM16.4571 8.29289L15.75 9V9L16.4571 8.29289ZM16.4571 9.70711L15.75 9L15.75 9L16.4571 9.70711ZM15.0429 9.70711L15.75 9L15.75 9L15.0429 9.70711ZM9.79289 4.45711L10.5 3.75V3.75L9.79289 4.45711ZM16.4571 9.70711L15.75 9L16.4571 9.70711ZM16.4571 8.29289L15.75 9L15.75 9L16.4571 8.29289ZM11.2071 14.9571L10.5 14.25L10.5 14.25L11.2071 14.9571ZM9.79289 14.9571L10.5 14.25L9.79289 14.9571ZM9.79289 13.5429L10.5 14.25V14.25L9.79289 13.5429ZM15.0429 8.29289L15.75 9V9L15.0429 8.29289ZM2.25 8L2.25 7H2.25V8ZM1.25 9H0.25H1.25ZM15.75 8V9V8ZM15.75 10V11V10ZM2.25 10L2.25 9H2.25V10ZM11.9142 2.33579C11.1332 1.55474 9.86684 1.55474 9.08579 2.33579L10.5 3.75L10.5 3.75L11.9142 2.33579ZM17.1642 7.58579L11.9142 2.33579L10.5 3.75L15.75 9L17.1642 7.58579ZM17.1642 10.4142C17.9453 9.63317 17.9453 8.36684 17.1642 7.58579L15.75 9L15.75 9L17.1642 10.4142ZM14.3358 10.4142C15.1168 11.1953 16.3832 11.1953 17.1642 10.4142L15.75 9H15.75L14.3358 10.4142ZM9.08579 5.16421L14.3358 10.4142L15.75 9L10.5 3.75L9.08579 5.16421ZM9.08579 2.33579C8.30474 3.11683 8.30474 4.38317 9.08579 5.16421L10.5 3.75V3.75L9.08579 2.33579ZM17.1642 10.4142C17.9453 9.63317 17.9453 8.36684 17.1642 7.58579L15.75 9V9L17.1642 10.4142ZM11.9142 15.6642L17.1642 10.4142L15.75 9L10.5 14.25L11.9142 15.6642ZM9.08578 15.6642C9.86683 16.4453 11.1332 16.4453 11.9142 15.6642L10.5 14.25L10.5 14.25L9.08578 15.6642ZM9.08579 12.8358C8.30474 13.6168 8.30474 14.8832 9.08579 15.6642L10.5 14.25V14.25L9.08579 12.8358ZM14.3358 7.58579L9.08579 12.8358L10.5 14.25L15.75 9L14.3358 7.58579ZM17.1642 7.58579C16.3832 6.80474 15.1168 6.80474 14.3358 7.58579L15.75 9L15.75 9L17.1642 7.58579ZM2.25 7C1.14543 7 0.25 7.89543 0.25 9H2.25V7ZM15.75 7L2.25 7L2.25 9L15.75 9V7ZM17.75 9C17.75 7.89543 16.8546 7 15.75 7V9H17.75ZM15.75 11C16.8546 11 17.75 10.1046 17.75 9H15.75V11ZM2.25 11L15.75 11V9L2.25 9L2.25 11ZM0.25 9C0.25 10.1046 1.14543 11 2.25 11V9H0.25Z" fill="#F9FAFB" />
        </svg>
    )
}

export function Star(props) {
    return (
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.3738 4.23335L8.62048 3.8926L7.13714 0.419814C7.02762 0.164672 6.77843 0 6.50107 0C6.22371 0 5.97442 0.164672 5.8656 0.419814L4.38226 3.8926L0.62834 4.23335C0.353159 4.25875 0.120139 4.44515 0.0340334 4.70793C-0.0515761 4.9712 0.0274862 5.25997 0.235608 5.4425L3.07282 7.93034L2.23627 11.6148C2.17506 11.8857 2.28022 12.1659 2.505 12.3284C2.62583 12.4162 2.76778 12.46 2.91023 12.46C3.03265 12.46 3.15516 12.4275 3.26458 12.362L6.50107 10.4268L9.73697 12.362C9.97436 12.5038 10.2728 12.4909 10.4971 12.3284C10.7219 12.1659 10.8271 11.8857 10.7659 11.6148L9.92932 7.93034L12.7665 5.4425C12.9746 5.25997 13.0537 4.9718 12.9681 4.70793C12.8825 4.44465 12.649 4.25825 12.3738 4.23335Z" />
        </svg>
    )
}

function Hero() {

    const commentBox1 = [
        {
            start: 100,
            end: 300,
            properties: [
                {
                    startValue: 1,
                    endValue: 1.2,
                    property: "scale",
                },
                {
                    startValue: 1,
                    endValue: 100,
                    property: "translateX"
                },
                {
                    startValue: 0,
                    endValue: -50,
                    property: "translateY"
                }
            ],
        },
    ];

    const commentBox2 = [
        {
            start: 100,
            end: 300,
            properties: [
                {
                    startValue: 1,
                    endValue: 1.2,
                    property: "scale"
                },
                {
                    startValue: 0,
                    endValue: -100,
                    property: "translateX"
                },
                {
                    startValue: 0,
                    endValue: -30,
                    property: "translateY"
                }
            ]
        }
    ]

    return (
        <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-12 gap-5">
                <div className="py-32 col-span-5">
                    <h2 className="text-5xl font-bold leading-tight">Start chatting with customers, anytime, anywhere with Apex</h2>
                    <div className="text-gray-500 text-lg my-8">Great software that allows you to chat from any place at any time without any interruption.</div>
                    <Button href="/" icon={<RightArrowIcon className="ml-5 w-4 h-4" />}>Start Chatting Now</Button>

                    <div className="mt-28 flex items-center gap-5">
                        <div className="flex">
                            <img src="https://images.pexels.com/photos/14711370/pexels-photo-14711370.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="w-14 h-14 rounded-full object-cover border-2 border-white" alt="" />
                            <img src="https://images.pexels.com/photos/14296202/pexels-photo-14296202.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="w-14 h-14 rounded-full object-cover border-2 border-white -ml-5" alt="" />
                            <img src="https://images.pexels.com/photos/7680221/pexels-photo-7680221.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="w-14 h-14 rounded-full object-cover border-2 border-white -ml-5" alt="" />
                        </div>
                        <div>
                            <div className="font-bold text-xl">2,291</div>
                            <div className="text-gray-500">Happy Customers</div>
                        </div>

                        <div className="relative before:left-0 before:top-1 before:bottom-1 before:h-full before:w-0.5 before:bg-black">
                            <div className="font-bold text-xl">4.8/5</div>
                            <div className="flex items-center">
                                <div className="flex items-center gap-1">
                                    <Star className="fill-orange-300" />
                                    <Star className="fill-orange-300" />
                                    <Star className="fill-orange-300" />
                                    <Star className="fill-orange-300" />
                                    <Star className="fill-gray-300" />
                                </div>
                                <span className="text-gray-400 ml-3">Rating</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col col-span-7 relative">
                    <div className="w-[500px] h-[500px] bg-transparent border-4 border-black rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 -z-20"></div>
                    <div className="w-[500px] h-[500px] bg-yellow-300 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 -z-10"></div>
                    <img src={HeroImg} alt="" className="mt-auto w-full" />

                    <Plx parallaxData={commentBox1}>
                        <CommentBox
                            class="absolute bottom-20 comment-box-1"
                            image="https://images.pexels.com/photos/4371747/pexels-photo-4371747.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                            name="Jenny Wilson"
                            comment="One of the best chatting app I have ever used."
                        />
                    </Plx>

                    <Plx parallaxData={commentBox2}>
                        <CommentBox
                            class="absolute bottom-60 right-10 comment-box-2"
                            image="https://images.pexels.com/photos/14886744/pexels-photo-14886744.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                            name="Ronald Richards"
                            comment="I commented on Figma, I want to add some fancy icons. Do you have any icon set?"
                        />
                    </Plx>
                </div>
            </div>
        </div>
    )
}

export default Hero