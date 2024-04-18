/* eslint-disable @next/next/no-img-element */
// Why disabled:
// avatars.dicebear.com provides svg avatars
// next/image needs dangerouslyAllowSVG option for that

import React, { ReactNode } from 'react'
import MaleImage from "../../../public/male_avatar.png"
import FemaleImage from "../../../public/female_avatar.png"

type Props = {
  username: string
  api?: string
  className?: string
  children?: ReactNode
}

export default function UserAvatar({
  username,
  api = 'micah',
  className = '',
  children,
}: Props) {
  const avatarImage = `https://api.dicebear.com/7.x/${api}/svg?seed=${username.replace(
    /[^a-z0-9]+/gi,
    '-'
  )}`

  return (
    <div className={className}>
      {
        username==='F'?<img
        src="/female_avatar.png"
        alt={username}
        className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
      />:<img
      src="/male_avatar.png"
      alt={username}
      className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
    />
      }
      
      {children}
    </div>
  )
}
