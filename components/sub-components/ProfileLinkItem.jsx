import Link from "next/link"

export const ProfileLinkItem = ({ url = "", name = "", position = "" }) => {
    return (
        <div className={'centered h-[120px] '+ position}>
          <Link href={url} className='profile-link'>
              {name}
          </Link>
      </div>
  )
}
