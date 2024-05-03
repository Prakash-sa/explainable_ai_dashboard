import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Buttons from '../Buttons';
import UserAvatar from '../UserAvatar';
import { mdiEye} from '@mdi/js';
import { useRouter } from 'next/router';

const TableSampleClients = ({ patients }) => {
  const perPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const clientsPaginated = patients.slice(perPage * currentPage, perPage * (currentPage + 1));
  const numPages = Math.ceil(patients.length / perPage);
  const pagesList = Array.from({ length: numPages }, (_, i) => i);

  const router = useRouter(); // Initialize the useRouter hook

  const handleViewDetails = (patient) => {


    // Store patient data in localStorage
    localStorage.setItem('selectedPatient', JSON.stringify(patient));
    // Navigate to another page with patient data as props
    router.push({
      pathname: '/patients', // Replace with your actual page pathname
      // query: { patientId: patient.id, ...patient }, // Pass patient data as query params
    });
  };



  return (
    <>
      <table>
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>Admission</th>
            <th>Age</th>
            <th>Ethnicity</th>
            <th>Gender</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {clientsPaginated.map((patient) => (
            <tr key={patient.id}>
              <td className="border-b-0 lg:w-6 before:hidden">
                <UserAvatar username={patient.gender} className="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
              </td>
              <td data-label="ID">{patient.id}</td>
              <td data-label="Admission">{patient.admission}</td>
              <td data-label="Age">{patient.age}</td>
              <td data-label="Ethnicity">{patient.ethnicity}</td>
              <td data-label="Gender">{patient.gender}</td>
              <td>
                <Button
                  icon={mdiEye}
                  onClick={() => handleViewDetails(patient)} // Call handleViewDetails function
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <Buttons>
            {pagesList.map((page) => (
              <Button
                key={page}
                active={page === currentPage}
                label={`${page + 1}`}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </Buttons>
          <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small>
        </div>
      </div>
    </>
  );
};

TableSampleClients.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      admission: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      ethnicity: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableSampleClients;
