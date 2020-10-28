import React from 'react'
import { getIn } from 'formik'

// Adjust your fields as your needs

export const InputField = ({
  field,
  label,
  form: { touched, errors },
  ...props
}) => {
  const touch = getIn(touched, field.name)
  const error = getIn(errors, field.name)

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        className={`form-control ${error && touch ? 'is-invalid' : ''}`}
        {...props}
        {...field}
        value={field.value ?? ''}
      />
      {error && touch && (
        <div className="invalid-feedback">{error}</div>
      )}
    </div>
  )
}
