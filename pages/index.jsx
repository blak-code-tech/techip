import Head from 'next/head'
import Image from 'next/image'
import { OurE4 } from '../components/OurE4'
import { ProjectItem } from '../components/ProjectItem'
import { ProfileLinkItem } from '../components/sub-components/ProfileLinkItem'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TechIP</title>
        <meta name="description" content="This is " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen'>
        <div className='flex items-center justify-center h-[75px]'>
          <h2 className='text-center text-[25px] font-extrabold'>techip</h2>
        </div>

        <div className='grid auto-rows-auto px-[4rem] pb-6 pt-8'>
          <h1 className='text-[72px] font-bold'>We are fully-fledge
            <br />
            <span>software solutions provider.</span>
          </h1>
          <div className='grid grid-cols-2'>
            <div className='grid pt-6 pb-6 relative grid-rows-2'>
              <p className='max-w-[70%] text-[#F2F2F2] font-normal'>We shape the future of brands Our expertise is add breathe of freshness into brandsand make them rule with their niche. </p>
              <Link to="test1" spy={true} smooth={true}>
                <Image src={'/images/scroll.svg'} alt="scroll" className='absolute cursor-pointer animate-bounce right-0 bottom-0' width={40} height={75} />
              </Link>
            </div>
            <div className='flex items-start justify-end mr-5'>
              <Image src={'/images/star.svg'} alt="star" width={253} height={250} />
            </div>
          </div>
        </div>

        <div className='h-[10px] bg-[#BDFF22] w-full' />

        <div name="test1" className="mx-[4rem] border-x divider border-[#F2F2F2] border-opacity-[5%]">
          <div className='grid auto-rows-auto divider-y'>
            <div className='pb-20 pt-6'>
              <h2 className='text-[40px]'>
                Our Work Is Diverse.
                <br />
                <span>Take A Look.</span>
              </h2>
              <p className='text-[16px] text-[#F2F2F2]'>This is not just a peice of our work, these are the different shades of our creativety.</p>
            </div>
            <div className='grid auto-rows-auto divider-y'>
              <ProjectItem title={'Project 1'} />
              <ProjectItem title={'Project 2'} position="pl-[100px]" />
              <ProjectItem title={'Project 3'} position="pl-[200px]" />
              <ProjectItem title={'Project 4'} position="pl-[300px]" />
            </div>
          </div>

          <div className='py-16'>
            <h1 className='text-[30px] font-bold'>A Software Development agency that help you achieve a desirable space in the market with its creative solutions.</h1>
          </div>

          <OurE4 />

          <div className='py-6'>
            <h1 className='text-[110px]'>Let&apos;s get your <span className='text-[#BDFF22]'>business</span> where <span className='text-[#BDFF22]'>you</span> want it to be</h1>
          </div>

          <div className='grid grid-rows-4 transition-all grid-cols-3 divider'>
            <ProfileLinkItem name='Dribbble' position='row-start-1 col-start-1' />
            <ProfileLinkItem name='BEHANCE' position='row-start-1 col-start-3' />
            <ProfileLinkItem name='LINKEDIN' position='row-start-2 col-start-2' />
            <ProfileLinkItem name='FACEBOOK' position='row-start-3 col-start-1' />
            <ProfileLinkItem name='INstagram' position='row-start-3 col-start-3' />
            <ProfileLinkItem name='Twitter' position='row-start-4 col-start-2' />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>

          <div className='grid grid-cols-3 divider-x h-[200px]'>
            <div className='centered'>
              <div>
                <h2 className='text-center text-[25px] font-extrabold'>techip</h2>
                <p className='text-[#F2F2F2] text-xs'>© 2022 Techip. All rights reserved.</p>
              </div>
            </div>
            <div/>
            <div className='centered'>
              <div className='centered flex-col space-y-4'>
                <div>
                  <p className='text-[#F2F2F2] text-base text-center'>Enquire Us</p>
                  <p className='text-[#F2F2F2] text-sm text-center'>sale@techip.io</p>
                </div>

                <div>
                  <p className='text-[#F2F2F2] text-base text-center'>Join Us</p>
                  <p className='text-[#F2F2F2] text-sm text-center'>career@techip.io</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}
