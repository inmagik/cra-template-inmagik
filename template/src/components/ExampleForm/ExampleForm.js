import React from 'react'
import * as Yup from 'yup'
import { Field, Formik } from 'formik'
import { InputField, transformErrorForForm } from '../Form'

const INITIAL_VALUES = {
  foo: '',
}

const EntitySchema = Yup.object().shape({
  foo: Yup.string().required(),
})

export default function ExampleForm({ entity, save }) {
  return (
    <Formik
      validationSchema={EntitySchema}
      initialValues={entity ?? INITIAL_VALUES}
      onSubmit={(values, actions) =>
        save(values).catch((err) => {
          actions.setErrors(transformErrorForForm(err))
        })
      }
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="foo" component={InputField} />
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-success"
          >
            SUBMIT
          </button>
        </form>
      )}
    </Formik>
  )
}
