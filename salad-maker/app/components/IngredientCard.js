import { motion } from "framer-motion";

export default function IngredientCard({ ingredients }) {
    return (
        <div className="">
            <div className="bg-white py-[32px] px-[24px] rounded w-[344px] h-[363px]">
                {ingredients.image && <img className='w-[296px] h-[180px]' src={ingredients.image} alt={ingredients.ingredient} />}
                <div className="relative w-[296px] h-[107px]">
                    <h3 className="text-[18px]">{ingredients.ingredient}</h3>
                    <div className="flex gap-4 font-bold h-[40px] w-[67px] gap-[10px]">
                        <p className="text-[24px] content-center">{ingredients.calories}</p>
                        <p className="text-[28px] text-[#F8B602]">Cal</p>
                    </div>
                    <span className="absolute right-0">
                        <motion.svg whileTap={{ scale: 1.2 }} className='w-[40px] bg-yellow-400 text-white rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </motion.svg>
                    </span>
                </div>
            </div>
        </div>
    );
}
