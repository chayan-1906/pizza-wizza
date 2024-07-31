import {homePath} from "@/utils/Routes";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className={'sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-violet-700 to-indigo-700 body-font text-white'}>
            <div className={'container flex flex-col md:flex-row flex-wrap mx-auto items-center p-3'}>
                <Link href={homePath} className={'flex font-extrabold items-center uppercase text-gray-100'}>
                    <Image src={'../pizza.svg'} alt={'Navbar Logo'} height={60} width={60}/>
                    <p className={'leading-5 text-xl mx-2'}>Pizza Wizza</p>
                </Link>

                <p className={'text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'}>
                    Copyright © 2024 Pizza Wizza
                </p>
            </div>
        </footer>
    );
}

export default Footer;
