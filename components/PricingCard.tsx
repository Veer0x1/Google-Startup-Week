import axios from "axios"
import Link from "next/link"
import Image from "next/image"
import TechstarStartupWeekend from "@/public/assets/TechstarsStartupWeekend.png"
import { Button } from "@/components/ui/button";

//@ts-ignore
const PricingCard = ({price}) => {

// @ts-ignore
    const dynamicDescription = (price) => {
        if (price.nickname === "20-Yard Dumpster") {
            return (
                <div className="mt-6 space-y-4">
                    <div className="flex space-x-3">

                        <h2 className="text-sm text-gray-500">$25 per day after 3 days</h2>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <h2 className="text-sm text-gray-500">
                            Neighborhood & HOA Friendly
                        </h2>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <h2 className="text-sm text-gray-500">
                            Eco-Friendly Waste Management
                        </h2>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <h2 className="text-sm text-gray-500">Driveway Protection</h2>
                    </div>
                    <div className="border" />
                </div>
            );
        } else if (price.nickname === "15-Yard Dumpster") {
            return (
                <div className="mt-6 space-y-4">
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">$25 per day after 3 days</p>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">
                            Eco-Friendly Waste Management
                        </p>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">Driveway Protection</p>
                    </div>
                    <div className="border" />
                </div>
            );
        } else if (price.nickname === "10-Yard Dumpster") {
            return (
                <div className="mt-6 space-y-4">
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">$25 per day after 3 days</p>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">
                            Eco-Friendly Waste Management
                        </p>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">Driveway Protection</p>
                    </div>
                    <div className="border" />
                </div>
            );
        } else if (price.nickname === "24-Hour Special: 15-Yard Dumpster") {
            return (
                <div className="mt-6 space-y-4">
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">$25 per day after 3 days</p>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">
                            Eco-Friendly Waste Management
                        </p>
                    </div>
                    <div className="border" />
                    <div className="flex space-x-3">

                        <p className="text-sm text-gray-500">Driveway Protection</p>
                    </div>
                    <div className="border" />
                </div>
            );
        }
    };

// @ts-ignore
    const handleSubscription = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('https://google-startup-week.vercel.app/api/payment',
            {
                priceId: price.id
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        
        window.location.assign(data)
    }
    
    return (
        <div className="border-gray-100 shadow-2xl border-1 text-center mt-10 max-w-[1040px] p-4 rounded-xl">
            <div>
                <div>
                    <div className="flex flex-col items-center justify-center pt-4">
                        {/*<h1 className="text-5xl font-bold">*/}
                            <Image src={TechstarStartupWeekend} alt={"TechstarStartupWeekend"} width={200} height={200}/>
                        {/*</h1>*/}
                        {/*<h1 className="text-5xl font-bold">*/}
                        {/*    {(price.unit_amount / 100).toLocaleString('en-US', {*/}
                        {/*        style: 'currency',*/}
                        {/*        currency: 'INR'*/}
                        {/*    })}*/}
                        {/*</h1>*/}
                    </div>
                    {/*<ul className="flex justify-center">*/}
                    {/*    <li className="text-xl font-bold" >{dynamicDescription(price)}</li>*/}
                    {/*</ul>*/}
                    <Button className="mt-4 flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white shadow-sm" onClick={handleSubscription}>
                        Get Ticket
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard