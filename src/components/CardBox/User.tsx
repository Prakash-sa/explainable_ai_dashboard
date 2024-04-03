import { mdiCheckDecagram } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import { useAppSelector } from '../../stores/hooks'
import CardBox from '.'
import FormCheckRadio from '../Form/CheckRadio'
import PillTag from '../PillTag'
import UserAvatarCurrentUser from '../UserAvatar/CurrentUser'
import UserAvatar from '../UserAvatar'
import { useEffect } from 'react'

import PropTypes from 'prop-types';

const CardBoxUser = ({data}) => {

  return (
    <CardBox>
      <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-center">
        <UserAvatar username="M" className="mb-6 lg:mb-0 lg:mx-12" />
        <div className="space-y-3 text-center md:text-left lg:mx-12">
          <div className="flex justify-center md:block">
          </div>
          <h1 className="text-2xl">
            <b>ID: </b>  &nbsp; {data.id}
          </h1>
          <p>
            <b>Age:</b> &nbsp; {data.age}
          </p>
          <p>
            <b>Admission:</b> &nbsp; {data.admission}
          </p>
          <p>
            <b>Ethnicity:</b> &nbsp; {data.ethnicity}
          </p>
        </div>
      </div>
    </CardBox>
  )
}


CardBoxUser.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      admission: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      ethnicity: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardBoxUser
