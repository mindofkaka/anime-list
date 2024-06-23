import Image from "next/image" 
import Link from "next/link"

const AnimeList = ({title, images, id}) => {
    return(
        <Link href={`/${id}`} className="cursor-pointer">
            <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
            <Image src={images} width={350} height={350} alt="..."/>
        </Link>
    )
}

export default AnimeList