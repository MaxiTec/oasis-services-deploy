import React, { useState } from 'react';
import { TitleForm } from '../Titles';
import styles from './styles.module.sass';
import Price from '../Price';
import { Row, Col, Button, Space, Divider } from 'antd';
import { Formik, Form, Field } from 'formik';
import { AntSelect, AntDatePicker } from '../Forms/Fields';

const FormRecotization = ({ t, datos }) => {
  return (
    <Formik
      initialValues={{
        date: undefined,
        children: 2,
        adults: 0,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        //   hacemos petición al endpoint que cotiza, regresamos el nuevo objeto y actualizamos el estado
        console.log(values);
      }}
      //   validationSchema={tourSchema}
    >
      {({ submitCount, isSubmitting, dirty }) => {
        return (
          <Form>
            <Row type="flex" justify="space-between">
              <Col xs={12} lg={5}>
                <Row gutter={8} type="flex" align="top">
                  <Col xs={12} lg={4}>
                    <Field
                      style={{ width: '100%' }}
                      component={AntDatePicker}
                      name="date"
                      size="large"
                      label={t('date')}
                      submitCount={submitCount}
                      noMargin
                    />
                  </Col>
                  <Col xs={6} lg={4}>
                    <Field
                      component={AntSelect}
                      name="adults"
                      size="large"
                      data={new Array(5).fill('HOLA')}
                      label={t('adults')}
                      submitCount={submitCount}
                      noMargin
                    />
                  </Col>
                  <Col xs={6} lg={4}>
                    <Field
                      component={AntSelect}
                      name="children"
                      size="large"
                      data={new Array(5).fill('HOLA')}
                      label={t('children')}
                      submitCount={submitCount}
                      noMargin
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={5}>
                <Row type="flex" gutter={16} align="bottom">
                  <Col xs={12} lg={7}>
                    <Price price={100} className="text-right-md no-margin-md" />
                    <p className="text-right-md">
                      <strong>
                        {t('num-adults', { count: datos.adults })},{' '}
                        {t('num-children', { count: datos.adults })},{' '}
                        {t('taxes-included')}
                      </strong>
                    </p>
                  </Col>
                  <Col xs={12} lg={5}>
                    {dirty ? (
                      <Button
                        block
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="mb-10"
                      >
                        Cotizar
                      </Button>
                    ) : (
                      <Button
                        block
                        type="primary"
                        htmlType="button"
                        size="large"
                        className="mb-10"
                      >
                        Reservar
                      </Button>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

const TicketsCard = ({ data, t, isMobile, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   Guardamos los datos en un estado local ya que solo es una re-cotización
  const [datos, setDatos] = useState(data);
  return (
    <div className={styles.ticket_card}>
      <div className={styles.ticket_card__title}>{datos.name}</div>
      <div className={styles.ticket_card__inner}>
        <TitleForm small={true}>
          <strong>Description</strong>
        </TitleForm>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          eveniet optio, beatae ab reiciendis debitis, autem est et voluptates
          temporibus sed? Placeat quas architecto quisquam exercitationem ullam
          sunt odit suscipit.
        </p>
        {isOpen && (
          <div className={styles.ticket_card__hidden}>
            <Space
              size="large"
              direction={!isMobile ? 'horizontal' : 'vertical'}
              split={
                <Divider
                  type="vertical"
                  className={styles.ticket_card__separator}
                />
              }
            >
              <div>
                <TitleForm
                  small={true}
                  className="mb-10"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <span
                    style={{ color: 'green' }}
                    className="icon icon-icono-oasis icon--md"
                  ></span>{' '}
                  <strong>{t('includes')}</strong>
                </TitleForm>
                <ul className="pl-20">
                  <li>HOLA</li>
                  <li>HOLA</li>
                  <li>HOLA</li>
                  <li>HOLA</li>
                  <li>HOLA</li>
                </ul>
              </div>
              <div>
                <TitleForm
                  small={true}
                  className="mb-10"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <span
                    style={{ color: 'green' }}
                    className="icon icon-icono-oasis icon--md"
                  ></span>{' '}
                  <strong>{t('non-includes')}</strong>
                </TitleForm>
                <ul className="pl-20">
                  <li>HOLA</li>
                  <li>HOLA</li>
                  <li>HOLA</li>
                  <li>HOLA</li>
                  <li>HOLA</li>
                </ul>
              </div>
            </Space>
          </div>
        )}
        <TitleForm
          isClicked
          small={true}
          className="mb-10"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <strong>
            {t('see-details')}
            <span
              className={`ml-10 icon icon-chevron-${isOpen ? 'up' : 'down'}`}
            ></span>
          </strong>
        </TitleForm>

        <FormRecotization t={t} datos={datos} />
      </div>
    </div>
  );
};

export default TicketsCard;
