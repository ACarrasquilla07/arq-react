/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Context from '../../context/context';

const Input = (props) => {

  const { state, dispatch } = useContext(Context);

  const {
    field,
    nameState,
    onBlur,
    optional,
    maxLength,
    label,
    type,
  } = props;
  const { error, value } = state.getIn([nameState, 'fields', field]).toJS();
  return (
    <div className="form-group">
      <label
        className="control-label"
        htmlFor="example-input-normal"
      >
        {`${label}${optional ? '' : ' *'}`}
      </label>
      <input
        id={`id_${field}`}
        className="form-control"
        type={type}
        maxLength={maxLength}
        value={value}
        onChange={(e) => dispatch({
          key: [nameState, 'fields', field, 'value'],
          payload: e.target.value,
        })}
        name="input-normal"
        onBlur={onBlur}
      />
      {error && (
        <span id={`id_${field}Error`} className="error">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
