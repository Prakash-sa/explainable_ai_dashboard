import { mdiTrendingDown, mdiTrendingNeutral, mdiTrendingUp } from '@mdi/js'
import React from 'react'
import { Client } from '../../interfaces'
import CardBox from '.'
import PillTag from '../PillTag'
import UserAvatar from '../UserAvatar'

type Props = {
  client: Client
}

const CardBoxClient = (props: Props) => {
  return (
    <CardBox className="mb-6 last:mb-0">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0">
          <UserAvatar className="w-12 h-12 md:mr-6 mb-6 md:mb-0" username='male' />
          <div className="text-center md:text-left overflow-hidden">
            <h4 className="text-xl text-ellipsis">{props.client.gender}</h4>
            <p className="text-gray-500 dark:text-slate-400">
              {props.client.admission} @ {props.client.age}
            </p>
          </div>
        </div>

      </div>
    </CardBox>
  )
}

export default CardBoxClient
