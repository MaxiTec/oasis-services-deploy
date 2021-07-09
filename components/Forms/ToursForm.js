import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Button, Slider, Checkbox } from 'antd';
import { Formik, Form, Field, useFormikContext } from 'formik';
import moment from 'moment';
import * as Yup from 'yup';
import axios from 'axios';
import { debounce } from 'lodash';
import { AntSelect, AntDatePicker } from './Fields';
import Separator from '../Separator';
import { useIsMount } from '../../hooks/utils';
import { TitleForm } from '../titles';

const tourSchema = Yup.object().shape({
  fecha: Yup.string().required('Campo Obligatorio').nullable(),
});
const AutoSubmitOnChange = () => {
  const isMount = useIsMount();
  const { values, submitForm } = useFormikContext();
  // Hermoso lodash <3
  const debounceOnChange = useCallback(debounce(submitForm, 400), []);
  useEffect(() => {
    if (isMount) {
      submitForm();
    }
  }, [values.parque, values.fecha, values.categories]);
  useEffect(() => {
    if (isMount) {
      debounceOnChange();
    }
  }, [values.range_price]);
  return null;
};
const TourForm = ({
  getNewTours,
  closemodal,
  setCurrentUrl,
  addToCart,
  t,
  tours,
  parques,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  // const [showFilters, setShowFilters] = useState(false);

  return (
    <Formik
      initialValues={{
        destino: 'all',
        categories: [],
      }}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        // seimpre sera la pagina 1 sin importar los filters que tenga
        const apiTest = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${1}`
        );
        setCurrentUrl(apiTest.data.info);
        // debounceOnChange(values)
        // cuando traiga
        // await getNewTours(values);
        // setSubmitting(false);
        // closemodal();
      }}
      validationSchema={tourSchema}
    >
      {({ submitCount, isSubmitting }) => {
        return (
          <Form>
            <Row gutter={8} type="flex" align="top">
              <Col xs={12}>
                <TitleForm className="mb-15 mb-20-md">
                  {t('search_tours_and_activities')}
                </TitleForm>
                <Field
                  component={AntSelect}
                  name="parque"
                  size="large"
                  data={parques}
                  label={t('parques')}
                  submitCount={submitCount}
                  noMargin
                />
              </Col>
              <Col xs={12}>
                <Field
                  component={AntDatePicker}
                  name="fecha"
                  disabledDate={(current) => {
                    return current && current < moment().subtract(1, 'd');
                  }}
                  size="large"
                  label={t('date')}
                  submitCount={submitCount}
                  style={{ width: '100%' }}
                  noMargin
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Separator className="mt-20 mb-20" />
              </Col>
              <Col xs={12}>
                <button
                  className="text-center"
                  style={{ width: '100%' }}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowFilters(!showFilters);
                  }}
                >
                  <TitleForm isClicked className="mb-15">
                    <>
                      {t('filter_results')}
                      <span
                        className={`ml-10 icon icon-chevron-${
                          showFilters ? 'down' : 'up'
                        }`}
                      ></span>
                    </>
                  </TitleForm>
                  {/* Filtrar Resultados */}
                </button>
                {showFilters && (
                  <>
                    <Col className="filters mb-55">
                      <p className="text-left">
                        <strong>{t('filter_by_price')}</strong>
                      </p>
                      <Field name="range_price">
                        {({
                          field: { value, name }, // { name, value, onChange, onBlur }
                          form: { errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                        }) => (
                          <div>
                            <Slider
                              range
                              marks={{
                                100: {
                                  // style: {
                                  //   color: '#f50',
                                  // },
                                  label: (
                                    <strong>
                                      Min <br /> 100
                                    </strong>
                                  ),
                                },
                                300: {
                                  // style: {
                                  //   color: '#f50',
                                  // },
                                  label: <strong>Max 300</strong>,
                                },
                              }}
                              min={100}
                              max={300}
                              value={value}
                              // cambiar por este....
                              // onAfterChange
                              onChange={(value) => {
                                setFieldValue(
                                  name,
                                  value != null ? value.valueOf() : value
                                );
                              }}
                            />
                            {meta.touched && meta.error && (
                              <div className="error">{meta.error}</div>
                            )}
                          </div>
                        )}
                      </Field>
                    </Col>
                    <Col>
                      <p className="text-left">
                        <strong>{t('filter_by_categories')}</strong>
                      </p>
                      <Field name="categories">
                        {({
                          field: { value, name },
                          form: { touched, errors, setFieldValue },
                          meta,
                        }) => (
                          <div>
                            <Checkbox.Group
                              value={value}
                              onChange={(value) => {
                                setFieldValue(name, value);
                              }}
                            >
                              {[
                                { label: 'Apple', value: 'Apple' },
                                { label: 'Pear', value: 'Pear' },
                                { label: 'Orange', value: 'Orange' },
                              ].map((ele) => (
                                <div key={ele.label} className="mb-5">
                                  <Checkbox value={ele.value}>
                                    {ele.label}
                                  </Checkbox>
                                </div>
                              ))}
                            </Checkbox.Group>
                            {meta.touched && meta.error && (
                              <div className="error">{meta.error}</div>
                            )}
                          </div>
                        )}
                      </Field>
                    </Col>
                  </>
                )}
              </Col>
            </Row>
            <AutoSubmitOnChange />
          </Form>
        );
      }}
    </Formik>
  );
};

export default TourForm;
