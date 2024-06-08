

// const Card = () => {
//   return (
//     //percentage : 49.2%
//     <div className="  h-[210px] rounded-[12px] p-[10px] shadow-lg
//      bg-cardBackgorund flex flex-row " style={{width:"98%"}}>
//         <div className="" style={{width : "45.6%"}}>
//             {/* percentage : 45.6% */}
//             <img className="h-[190px] rounded-[12px]" style={{width : "100%" }} src="https://s3-alpha-sig.figma.com/img/92a3/cf06/37948fdc41481ae0797f6bb17efacaf5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dg-qaKRpa3u2qOVw564JdYCOJq31~gpm7-Wvpx4SittjzOlDAWsb47eGaAF6FBXM-oZyJxj8QyW3DsFV7C2Ny36tTNUk8O0KyioYb~IqjGWJOMSNaPo9M657B9vYQ6CxZy0CLvUs-yX0nto5p3RIK7Wbu~GaZc3DIat62w-9lBnvxr3IjG~ZxaPJGo0lZ5LnKFDMWNVcH3pPjzsQLXAIYfPx~MBeRhAM60oegUKVL8Myw6yn7DQFLhoBN9lcKqp4nm~x4hUFzdbkjVhJcWirxzg1jx~tln8LCG7ICviJmgSw8di-mi2eq9ZSDfz3YtIyiVMOYBoKxnSbnakqhNWseg__" alt="image" />

//         </div>
//         {/* percentage : 50.2 */}
//         <div className=" h-[190px] flex flex-col justify-start pl-1" style={{width : "49%"}}>
//             {/* full */}
//             <div className="  h-[51px] pt-[16px] pr-[16px] pb-[16px] pl-[6px]" style={{width: "100%"}}>
//                 {/* 96.7% */}
//                 <p className="  h-[19px] font-roboto  font-fiveHundered text-[16px] leading-[18.75px] text-cardFirstText" style={{width : "96.7%"}}>12 Mobile UX Design Trends For 2018</p>
//             </div>
//             {/* full */}
//             <div className="  h-[67px] mb-[5px] pt-[0px] pr-[16px] pb-[26px] pl-[6px] gap-[8px]" style={{width:"100%"}}>
//                 {/* 96.7% */}
//                 <p className="  h-[41px] font-roboto font-fourHundered text-[14px] leading-[20px] tracking-cardSecondText text-cardSecondText" style={{width: "96.7%"}}>Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner</p>
//             </div>
//             {/* full */}
//             <div className="  mt-[5px] h-[72px] rounded-[12px] pt-[13px] pr-[16px] pb-[13px] pl-[16px] bg-lastDivInCard" style={{width:"100%"}}>
//                 {/* 91.4% */}
//                 <div className="  h-[44px] gap-[10px] flex items-center  " style={{width:"91.4%"}}>
//                     <div  className="">
//                         {/* 12.86% */}
//                         <img className=" h-[44px] rounded-[12px]"  src="https://s3-alpha-sig.figma.com/img/454d/baab/c55f3cfd2bb6daeb7d634374476e9de0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mHDXwM6DD5GmdiYeGb2JxWGoIjXaZPsHpOXJ1Py-N2dI3Ef-PUPwJpmB16vqI1NN4pEje6WDiI0QFnSw2oqAFtxzjZKD8qa5xaZ7Tko2ORHza3igv63LIys~XmlAUeig1i9fcZ-ouXX~j~PLUQepmR9Xa3lbK~SpC5FpIx8r3uKsfbNJx6EdzoT0r5uBaLTO68~mPDW719bxNGadc5hjA4nIR5ayDmYFT0TV49phRnIFofPQthls8ogyA9XNilgi1Ant4q9a4FAt79k7hPhkfxchYXOPgR2gVAURnCJ46eZvdn7VbHAc00Rz11RNoWCKV62jN5iS0wmRIrZpkjWNGQ__" alt="" />

//                     </div> 
//                     {/* 84.21% */}
//                     <div className=" h-[44px] gap-[4px] flex   items-center justify-between " style={{width:"90%"}}>
//                         <div>
//                             {/* 54.17% */}
//                             <p className="  h-[22px] font-roboto font-fiveHundered text-[14px] leading-[22px] tracking-firstPara text-cardFirstPara" style={{width:"100%"}}>Jon Kantner</p>
//                             <p className="  h-[18px] font-roboto font-fourHundered text-[12px] leading-[18px] tracking-secondPara text-cardSecondPara" style={{width : "100%"}} >July 14 , 2022</p>
//                         </div>
//                         {/* 45.83% */}
//                         <div className="  h-[40px]" style={{width:"45.83%"}}>
//                                 {/* full */}
//                                 <button className=" flex  items-center w-[] h-[40px] rounded-[12px] pt-[10px] pr-[16px] pb-[10px] pl-[24px]  bg-secondButtonBackground absolute   gap-[8px]">
//                                     {/* 51.51% */}
//                                     <p className=" h-[20px] font-roboto text-[13px] text-secondButton text-center  font-fiveHundered  leading-[20px]">Read more</p>
//                                     {/*  12.12%*/}
//                                     <div className="  h-[16px] ">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
//                                             <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                                         </svg>
//                                     </div>
//                                 </button>
//                         </div>
                        
//                     </div> 
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }



const Card = () => {
  return (
    <div className="shadow-lg rounded-xl flex flex-row gap-4 max-w-lg py-3 px-4 md:p-5">
         <div className="basis-2/5 flex items-center ">
        <img
          className="rounded-xl h-full max-h-60 object-cover"
          src="https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600"
          alt="Mobile UX Design Trends"
        />
      </div>

        <div className="flex flex-col justify-start basis-3/5 gap-2 md:gap-3">
            <div className="text-xl">12 Mobile UX Design Trends For 2018</div>
            <div className="">Things move quickly in the mobile app universe.
                 To succeed in the field of mobile UX design, designers must have the foresight 
                 and prepare for new challenges around the corner</div>
            <div className="bg-neutral-200 rounded-xl flex flex-row p-1 justify-between ">
                <div className="flex flex-col mx-2 md:mx-4">
                    <div>Jon Kantner</div>
                    <div>14th July 2022</div>
                </div>
                <button className="bg-neutral-400 rounded-md my-2 px-2 mx-1">
                    Read more
                </button>
            </div>

        </div>



    </div>
  )
}


export default Card;




