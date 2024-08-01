import Image from "next/image";

const priceOptions = ['regular', 'medium', 'large'];

function Card() {
    return (
        <div className={'box'}>
            {/** image */}
            <div className={'w-80 rounded-lg bg-white dark:bg-black border-gradient'}>
                <div className={'relative w-full h-80'}>
                    <Image src={'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg'} alt={'pizza'} height={1000} width={1000} objectFit={'cover'}
                           className={'h-full w-full'}/>
                </div>
            </div>

            {/** name & description */}
            <div className={'p-4'}>
                <div className={'font-bold mb-2 text-xl uppercase'}>Pizza Name</div>
                <div className={'text-gray-700 dark:text-gray-400 text-base short_description'}>Pizza Description</div>
            </div>

            {/** action buttons */}
            <div className={'flex px-4 justify-between'}>
                <select className={'p-1 text-black dark:text-gray-100 hover:font-bold font-semibold cursor-pointer border border-black dark:border-gray-400 rounded'}>
                    {Array.from(Array(6), (e, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                </select>

                <select className={'p-1 text-black dark:text-gray-100 hover:font-bold font-semibold cursor-pointer border border-black dark:border-gray-400 rounded'}>
                    {Array.from(priceOptions, (e, i) => <option key={i} value={i + 1}>{e.toUpperCase()}</option>)}
                </select>
            </div>

            {/** add to cart */}
            <div className={'flex p-4 font-bold justify-between'}>
                <button className={'border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded py-2 px-6 hover:${gradient} hover:text-gray-100'}>
                    Add to Cart
                </button>
                <p className={'p-2 text-xl'}>₹74/-</p>
            </div>
        </div>
    );
}

export default Card;
