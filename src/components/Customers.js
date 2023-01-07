import Plx from "react-plx"
import CustomersImage from "../customers-img.png"

function Customers() {
    const bigImage = [
        {
            start: '.client-reviews',
            end: 'footer',
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
        <div className="py-28 bg-gray-100 customer-list">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-2 gap-20 items-center">
                    <div>
                        <Plx parallaxData={bigImage} className="opacity-75">
                            <img src={CustomersImage} alt="" />
                        </Plx>
                    </div>

                    <div>
                        <div className="font-bold text-5xl mb-10 leading-tight">Get direct orders from your customers</div>

                        <p>Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available. </p>

                        <div className="grid grid-cols-2 gap-5 mt-16">
                            <div className="flex items-center">
                                <div className="font-semibold text-4xl">4.3K+</div>
                                <div className="text-sm ml-5">Website’s <br /> Powering</div>
                            </div>

                            <div className="flex items-center">
                                <div className="font-semibold text-4xl">7M+</div>
                                <div className="text-sm ml-5">Chats in <br /> Last 2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers