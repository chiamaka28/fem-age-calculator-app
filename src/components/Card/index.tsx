'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ArrowIcon } from '../icon';
import * as Yup from 'yup';

interface IFormValues {
  day?: string;
  month?: string;
  year?: string;
}

const Card = () => {
  const [ageYears, setAgeYears] = useState<number | null>(null);
  const [ageMonths, setAgeMonths] = useState<number | null>(null);
  const [ageDays, setAgeDays] = useState<number | null>(null);
  let currentYear = new Date().getFullYear();

  const isValidDate = (day: number, month: number, year: number) => {
    const date = new Date(year, month - 1, day); // month is 0-indexed in JS
    return date.getDate() === day && date.getMonth() === month - 1;
  };

  const formik = useFormik({
    initialValues: {
      day: '',
      month: '',
      year: '',
    },
    validationSchema: Yup.object({
      day: Yup.number()
        .required('This Field is Required')
        .min(1, 'Day must be at least 1')
        .max(31, 'Day cannot be more than 31'),
      month: Yup.number()
        .required('This Field is Required')
        .min(1, 'Month must be at least 1')
        .max(12, 'Month cannot be more than 12'),
      year: Yup.number()
        .required('This Field is Required')
        .max(currentYear, 'Must be in the past'),
    }).test('valid-date', 'Invalid date', function (value) {
      const { day, month, year } = value;
      if (day && month && year) {
        return isValidDate(day, month, year); // Validate the date combination
      }
      return true; // If one of the fields is not filled out yet, skip the validation
    }),
    onSubmit: (values) => {
      getUserAge(values);
    },
  });

  const getUserAge = (values: IFormValues) => {
    let currentMonth = new Date().getMonth() + 1;
    let currentDay = new Date().getDate();
    let userYear = parseInt(values?.year ?? '0', 10);
    console.log(userYear);
    let userMonth = parseInt(values?.month ?? '0', 10);
    let userDay = parseInt(values?.day ?? '0', 10);
    let monthOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (userDay > currentDay) {
      currentDay = currentDay + monthOfYear[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if (userMonth > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }

    let ageInYears: number = currentYear - userYear;
    setAgeYears(ageInYears);

    let ageInMonths: number = currentMonth - userMonth;
    setAgeMonths(ageInMonths);

    let ageInDays = currentDay - userDay;
    setAgeDays(ageInDays);
  };

  return (
    <div className='bg-offWhite w-full px-5 py-10 rounded-3xl rounded-br-[100px]'>
      <div className=''>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex gap-5 '>
            <div className='my-2'>
              <label
                htmlFor='day'
                className={`text-sm  tracking-widest font-bold ${
                  formik.touched.day && formik.errors.day
                    ? 'text-lightRed'
                    : 'text-smokeyGrey'
                }`}
              >
                DAY
              </label>
              <input
                type='text'
                id='day'
                placeholder='DD'
                className={`block border  h-12 w-full sm:w-32 rounded-lg placeholder:text-smokeyGrey text-2xl font-bold px-3 focus:outline-none ${
                  formik.touched.day && formik.errors.day
                    ? 'border-lightRed'
                    : 'border-lightGrey'
                }`}
                onChange={formik.handleChange}
                value={formik.values.day}
              />
              {formik.touched.day && formik.errors.day ? (
                <span className='text-xs text-lightRed'>
                  {formik.errors.day}
                </span>
              ) : null}
            </div>
            <div className='my-2'>
              <label
                htmlFor='month'
                className={`text-sm  tracking-widest font-bold ${
                  formik.touched.month && formik.errors.month
                    ? 'text-lightRed'
                    : 'text-smokeyGrey'
                }`}
              >
                MONTH
              </label>
              <input
                type='text'
                id='month'
                placeholder='MM'
                className={`block border  h-12 w-full sm:w-32 rounded-lg  placeholder:text-smokeyGrey text-2xl font-bold px-3 focus:outline-none ${
                  formik.touched.month && formik.errors.month
                    ? 'border-lightRed'
                    : 'border-lightGrey'
                }`}
                onChange={formik.handleChange}
                value={formik.values.month}
              />
              {formik.touched.month && formik.errors.month ? (
                <span className='text-xs text-lightRed'>
                  {formik.errors.month}
                </span>
              ) : null}
            </div>
            <div className='my-2 '>
              <label
                htmlFor='year'
                className={`text-sm  tracking-widest font-bold ${
                  formik.touched.year && formik.errors.year
                    ? 'text-lightRed'
                    : 'text-smokeyGrey'
                }`}
              >
                YEAR
              </label>
              <input
                type='text'
                id='year'
                placeholder='YY'
                className={`block border  h-12 w-full sm:w-32 rounded-lg placeholder:text-smokeyGrey text-2xl font-bold px-3 focus:outline-none ${
                  formik.touched.year && formik.errors.year
                    ? 'border-lightRed'
                    : 'border-lightGrey'
                }`}
                onChange={formik.handleChange}
                value={formik.values.year}
              />
              {formik.touched.year && formik.errors.year ? (
                <span className='text-xs text-lightRed'>
                  {formik.errors.year}
                </span>
              ) : null}
            </div>
          </div>

          <div className='  max-w-[500px]  p-5 mt-5 relative'>
            <hr className='w-[100%] sm:w-[95%]  text-lightGrey' />
            <button
              type='submit'
              className='bg-purple rounded-full w-14 h-14 p-2 flex justify-center items-center absolute  left-1/2  top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:left-auto sm:right-0 '
            >
              <ArrowIcon />
            </button>
          </div>
        </form>
      </div>
      <div className={` text-5xl sm:text-6xl font-extrabold pt-6 pb-6 sm:pt-0`}>
        <p className='italic font-black'>
          <span className='text-purple mx-1 '>
            {ageYears ? ageYears : '- -'}
          </span>
          years
        </p>
        <p className='italic font-black'>
          <span className='text-purple mx-1'>
            {ageMonths ? ageMonths : '- -'}
          </span>
          months
        </p>
        <p className='italic font-black'>
          <span className='text-purple mx-1'>{ageDays ? ageDays : '- -'}</span>
          days
        </p>
      </div>
    </div>
  );
};

export default Card;
