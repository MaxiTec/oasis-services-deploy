/* eslint-disable react/display-name */
import {
  DatePicker,
  Form,
  Input,
  TimePicker,
  Select,
  InputNumber,
  Checkbox,
} from 'antd';
import { get, isFunction } from 'lodash';
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const CreateAntField =
  (AntComponent, addedClass) =>
  ({
    field,
    form,
    hasFeedback,
    label,
    data,
    submitCount,
    type,
    noMargin,
    validateNumber,
    isRequired,
    callback,
    ...props
  }) => {
    const touched = get(form.touched, field.name);
    const hasError = get(form.errors, field.name);

    // const touched = form.touched[field.name];
    const submitted = submitCount > 0;
    // const hasError = form.errors[field.name];
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;
    const onInputChange = ({ target: { value } }) => {
      form.setFieldValue(field.name, value);
    };
    const onChange = (value, another) => {
      console.log(value, another);
      form.setFieldValue(field.name, value);
      //   if (callback) {
      //     console.log('test');
      //     callback(value);
      //   }
    };
    const onBlur = () => form.setFieldTouched(field.name, true);
    return (
      <div className={`form-group ${noMargin ? 'no-margin-md' : ''}`}>
        {label && (
          <label className={`form-label ${isRequired ? 'required' : ''}`}>
            <strong>
              {label}
              {isRequired ? '*' : ''}
            </strong>
          </label>
        )}
        <FormItem
          style={{ margin: 0 }}
          hasFeedback={
            !!((hasFeedback && submitted) || (hasFeedback && touched))
          }
          help={submittedError || touchedError ? hasError : false}
          validateStatus={submittedError || touchedError ? 'error' : 'success'}
        >
          <AntComponent
            className={addedClass}
            {...field}
            {...props}
            onBlur={onBlur}
            onChange={type ? onInputChange : onChange}
          >
            {data &&
              data.map((item) => {
                if (typeof item === 'object') {
                  return (
                    <Option
                      value={item.value || item.id}
                      key={item.value || item.id}
                      label={item.name}
                    >
                      {item.label || item.name}
                    </Option>
                  );
                }
                return (
                  <Option label={item} key={item}>
                    {item}
                  </Option>
                );
              })}
          </AntComponent>
        </FormItem>
      </div>
    );
  };
const CreateCheckBox =
  (AntComponent) =>
  ({ field, form, hasFeedback, label, submitCount, ...props }) => {
    const touched = form.touched[field.name];
    const submitted = submitCount > 0;
    const hasError = form.errors[field.name];
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;
    const onInputChange = ({ target: { value, checked } }) => {
      form.setFieldValue(field.name, value);
    };
    return (
      <div>
        <FormItem
          style={{ margin: 0 }}
          hasFeedback={
            !!((hasFeedback && submitted) || (hasFeedback && touched))
          }
          help={submittedError || touchedError ? hasError : false}
          validateStatus={submittedError || touchedError ? 'error' : 'success'}
        >
          <AntComponent {...field} {...props} onChange={onInputChange}>
            {label}
          </AntComponent>
          {/* )} */}
        </FormItem>
      </div>
    );
  };
export const AntSelect = CreateAntField(Select, 'custom-select');
export const AntDatePicker = CreateAntField(DatePicker, 'custom-datepicker');
export const AntTimePicker = CreateAntField(TimePicker, 'custom-timepicker');
export const AntInput = CreateAntField(Input, 'custom-input');
export const AntTextArea = CreateAntField(TextArea, 'custom-textarea');
export const AntInputNumber = CreateAntField(InputNumber, 'custom-input');
// export default ;
export const AntCheckBox = CreateCheckBox(Checkbox);
