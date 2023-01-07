import Review from "./Review"
import BgShape from "../bg-shape.png"

function ClientReview() {

    return (
        <div className="py-28 bg-orange-500 relative client-reviews">
            <img src={BgShape} className="absolute top-0 left-0" alt="" />
            <div className="mx-auto max-w-6xl">
                <div className="font-bold text-center text-4xl text-white max-w-sm mx-auto leading-tight tracking-wider">Our blessed client said about us 😍</div>

                <div className="grid grid-cols-2 gap-x-20 mt-20">
                    <Review
                        title="Incredible Experience"
                        description="We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly."
                        avatar="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        fullname="Wade Warren"
                        job="CEO, ABC Corporation"
                    />

                    <Review
                        title="Dependable, Responsive, Professional"
                        description="Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond."
                        avatar="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        fullname="Esther Howard"
                        job="CEO, ABC Corporation"
                    />
                </div>
            </div>
        </div>
    )
}

export default ClientReview