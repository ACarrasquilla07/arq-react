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
  } = props;
  const { error, value } = state.getIn([nameState, 'fields', field]).toJS();
  return (
    <div className="form-group">
      <span>
        {`${label}${optional ? '' : ' *'}`}
      </span>
      <input
        id={`id_${field}`}
        className="form-control"
        type="text"
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
        <span id={`id_${field}Error`} className="error-input">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
