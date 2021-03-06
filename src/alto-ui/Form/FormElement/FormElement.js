import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { bemClass } from '../../helpers/bem';
import Label from '../Label';
import './FormElement.scss';

const FormElement = props => {
  const { error, disabled, success, id, children, readOnly, style } = props;
  return (
    <div className={classnames('form-element', props.className)} style={style}>
      <Label hidden={props.hideLabel} htmlFor={id} id={`${id}__label`} readOnly={readOnly}>
        {props.label}
      </Label>
      {children}
      {props.helpText && (
        <div
          className={bemClass('form-element__help-text', { error, disabled, success })}
          id={`${id}__help-text`}
          dangerouslySetInnerHTML={{ __html: props.helpText }}
        />
      )}
    </div>
  );
};

FormElement.propTypes = {
  helpText: PropTypes.any,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  success: PropTypes.bool,
  readOnly: PropTypes.bool,
  hideLabel: PropTypes.bool,
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default FormElement;
