import Image from "next/image"

export const OurE4Item = ({ img = '', title = "", desc = "", isLast = false }) => {
    return (
        <div className={'h-[300px] py-8 px-4 flex items-start justify-between flex-col border-[#F2F2F2] border-opacity-[5%] '}>
            <Image src={img} alt="circle" width="47" height="47"></Image>

            <div className='flex flex-col items-start justify-start space-y-4'>
                <h3 className='text-[18px] text-[#F2F2F2]'>{title}</h3>
                <p className='text-[14px] font-light text-[#F2F2F2]'>{desc}</p>
            </div>
        </div>
    )
}
