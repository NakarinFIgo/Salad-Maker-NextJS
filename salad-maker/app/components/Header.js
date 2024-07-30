export default function Header(){ 
   return (
    <div className="w-[1495px] ">
        <div className=" flex justify-between mt-10 mb-8">
            <span className="w-[982px] text-3xl text-[36px] font-bold h-[60px] content-center">Let's Create...your own salad!!!</span>
            <input className='w-[513px] py-[2px] pr-[32px] pl-[24px] text-[18px] text-[#A098AE] rounded-[16px]' placeholder="Search ingrdients to make a salad...">
            </input>
        </div>
        <div className="relative bg-[#FFEA75] h-[240px] rounded-[16px]">
            <div className="absolute grid gap-4 bottom-[40px] left-[40px]">
                <div className="text-3xl font-bold w-[203px] h-[96px]">
                    <div>Fresh &</div>
                    <div>tasty salads</div>
                </div>
                <div className="text-xs h-[48px]">
                    <div>Relax please, we've got you</div>
                    <div>covered every day of the week</div>
                </div>
            </div>
        </div>
    </div>
   )

}