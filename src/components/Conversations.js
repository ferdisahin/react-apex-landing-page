import Button from "./Button"
import ConversationImage from "../conversation-img.png"

import Plx from "react-plx"

function Conversations() {

    const bigImage = [
        {
            start: '.customer-list',
            end: '.client-reviews',
            properties: [
                {
                    startValue: 1,
                    endValue: 1.25,
                    property: 'scale'
                },
                {
                    startValue: .75,
                    endValue: 1,
                    property: 'opacity'
                }
            ]
        }
    ]

    return (
        <div className="conversation-list">
            <div className="mx-auto max-w-6xl py-28">
                <div className="grid grid-cols-2 gap-5 items-center">
                    <div>
                        <div className="text-5xl font-bold mb-10 leading-tight">Start selling directly inside conversations</div>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable. </p>

                        <Button className="mt-10">Start Chatting Now</Button>
                    </div>

                    <div>
                        <Plx parallaxData={bigImage} className="opacity-75">
                            <img src={ConversationImage} className="w-full" alt="" />
                        </Plx>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversations