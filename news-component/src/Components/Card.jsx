import {Link} from "react-router-dom"


const Card = ({imageUrl, author, title, content, date, readMoreUrl}) => {

  const formattedDate = date.split(', ').slice(1).join(', ');
  const truncatedContent = content.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <div className="shadow-lg rounded-xl flex flex-row gap-4 max-w-lg py-3 px-4 md:p-5">
         <div className="basis-2/5 flex items-center ">
        <img
          className="rounded-xl h-full max-h-60 object-cover w-full"
          src={imageUrl}
          alt={title}
        />
      </div>

        <div className="flex flex-col justify-start basis-3/5 gap-2 md:gap-3 ">
            <div className="text-md sm:text-xl font-semibold">{title}</div>
            <div className="text-sm sm:text-base">{truncatedContent}</div>
            <div className="bg-neutral-100 rounded-xl flex flex-row p-1 justify-between ">
                <div className=" text-sm sm:text-base flex flex-col mx-2 md:mx-4">
                    <div>{author}</div>
                    <div>{formattedDate}</div>
                </div>
                < Link className="bg-neutral-300 rounded-lg h-fit mx-1 my-auto p-1 sm:my-2 sm:mx-1 sm:p-2 text-sm sm:text-base" to={readMoreUrl}>
                    Read more
                </Link>
            </div>

        </div>



    </div>
  )
}


export default Card;




