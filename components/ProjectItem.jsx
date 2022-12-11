import Image from "next/image"

export const ProjectItem = ({title='', position}) => {
    return (
        <div className='px-20 group cursor-pointer hover:bg-[#BDFF2210] transition-all hover:border-l-[20px] hover:border-[#BDFF22] py-8 flex items-center justify-start'>
            <h2 className={'text-[56px] font-normal ' + position}>{title}</h2>
            <Image src={'/images/arrow.png'} id="img" alt="arrow" className='ml-8 transition-all group-hover:block hidden' width={75} height={75} />
        </div>
    )
}
