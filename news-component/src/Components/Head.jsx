

export const Head = () => {
  return (
    <div className="h-[40px] mb-[10px] mt-[10px] flex justify-between items-center px-2 md:px-24 lg:px-40">
        <div className=" w-[61px] h-[23px] gap-[6px] flex flex-row items-center">
            <div className=" w-[4px] h-[10px] rounded-[12px] bg-divBesideNews"></div>
            <div className=" w-[51px] h-[23px] ">
                <p className=" font-roboto font-fiveHundered text-[20px] leading-[23.44px]">News</p>
            </div>
        </div>
        <div>
        <button className=" flex items-center w-[119px] h-[40px] rounded-[12px] pt-[10px] pr-[16px] pb-[10px] pl-[24px] bg-buttonBackground ">
            <p className="w-[55px] h-[22px] font-roboto text-[14px] text-buttonText font-fiveHundered  leading-[20px]">Show all</p>
            <div className=" w-[16px] h-[16px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
        </button>
        </div>
    </div>
  )
}


