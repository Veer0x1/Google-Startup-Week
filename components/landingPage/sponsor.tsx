import Image from "next/image"
import { cn } from "@/lib/utils"
import {
    ContextMenu,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import React, {FunctionComponent} from "react";

//@ts-ignore
import Google from "@/public/assets/GoogleForStartups_Horizontal1.png";
//@ts-ignore
import gd from "@/public/assets/GD_REGISTRY_POWERED_BY_LOCKUP_3_CMYK_COLOR1.png";
//@ts-ignore
import brex from "@/public/assets/BrexBlack.png";
import ecell from "@/public/assets/iitbhulogo.png";

const ListOfSponsor =[
    {
    src:Google,
    href:"https://startup.google.com/",
    alt:"google"
    },
    {
        src:gd,
        href:"https://www.godaddy.com/",
        alt:"goDaddy"
    },
    {
        src:brex,
        href:"https://www.brex.com/",
        alt:"brex"
    },
    {
        src:ecell,
        href:"https://www.ecelliitbhu.com/",
        alt:"ecell"
    }
]
interface OwnProps {}

type Props = OwnProps;
export const Sponsor: FunctionComponent<Props> = (props) => {
    return (
        <div  className="my-7 max-w-screen">
            <div className="font-semibold text-2xl text-black uppercase text-center mb-7">global sponsors</div>
            <div className="flex flex-wrap justify-center items-center" >
           {/*     <div className="border m-2 flex justify-center items-center h-40 rounded-lg p-2 shadow">*/}
           {/*         <a*/}
           {/*         href="#"*/}
           {/*         className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 transition-all duration-200 ease-in-out hover:scale-105"*/}
           {/*         >*/}
           {/*         <Image src={Google} alt={"Google"} height={400} width={300} />*/}
           {/*     </a>*/}
           {/*</div>*/}
                {
                    ListOfSponsor.map((data,index)=>
                        <div className="border m-2 flex justify-center items-center h-40 rounded-lg p-2 shadow" key={index}>
                            <a
                                target={"_blank"}
                                href={data.href}
                                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 transition-all duration-200 ease-in-out hover:scale-105"
                            >
                                <Image src={data.src} alt={data.alt} height={400} width={300}  />
                            </a>
                        </div>
                    )
                }

                    {/*<div className="border m-2 flex justify-center items-center h-40 rounded-lg p-2 shadow">*/}
                    {/*    <a*/}
                    {/*        href="#"*/}
                    {/*        className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 transition-all duration-200 ease-in-out hover:scale-105"*/}
                    {/*    >*/}
                    {/*        <Image src={gd} alt={"Google"} height={400} width={300} />*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                {/*<div className="border m-2 flex justify-center items-center h-40 rounded-lg p-2 shadow">*/}
                {/*    <a*/}
                {/*        href="#"*/}
                {/*        className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 transition-all duration-200 ease-in-out hover:scale-105"*/}
                {/*    >*/}
                {/*        <Image src={brex} alt={"Google"} height={400} width={300} />*/}
                {/*    </a>*/}
                {/*</div>*/}
                {/*<div className="border m-2 flex justify-center items-center h-40 rounded-lg p-2 shadow">*/}
                {/*    <a*/}
                {/*        href="#"*/}
                {/*        className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 transition-all duration-200 ease-in-out hover:scale-105"*/}
                {/*    >*/}
                {/*        <Image src={ecell} alt={"Google"} height={400} width={300} />*/}
                {/*    </a>*/}
                {/*</div>*/}
                {/*<a*/}
                {/*    href="#"*/}
                {/*    className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 border-1"*/}
                {/*>*/}
                {/*    <Image*/}
                {/*        src={gd}*/}
                {/*        alt={"GD"}*/}
                {/*        height={200}*/}
                {/*        width={200}*/}
                {/*        className={"p-4"}*/}
                {/*    />*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    href="#"*/}
                {/*    className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"*/}
                {/*>*/}
                {/*    <Image*/}
                {/*        src={brex}*/}
                {/*        alt={"Brex"}*/}
                {/*        height={200}*/}
                {/*        width={200}*/}
                {/*        className={"p-4"}*/}
                {/*    />*/}
                {/*</a>*/}
            </div>
        </div>
    )
}