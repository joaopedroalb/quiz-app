import Image from "next/image"

import rouboImg from "../../../public/naoroube.png"

export default function Roubo(){
    return(
        <Image src={rouboImg} alt="Hologram" width={300} height={300}/>
    )
}