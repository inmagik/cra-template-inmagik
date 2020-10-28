import { AjaxError } from 'rxjs/ajax'

const naiveIsObj = (a) => typeof a === 'object' && a !== null

const arrayze = (a) => (Array.isArray(a) ? a : [a])

export const transformErrorForForm = (error) => {
  if (error.status === 400) {
    console.log(error)
    let errorData
    if (error instanceof AjaxError && naiveIsObj(error.response)) {
      errorData = error.response
    } else if (naiveIsObj(error.response?.body)) {
      errorData = error.response.body
    }
    // TODO: Better joins of errors...
    if (errorData) {
      return Object.keys(errorData).reduce(
        (transformed, key) => ({
          ...transformed,
          [key]: arrayze(errorData[key]).join(','),
        }),
        {}
      )
    }
  }
  // When no 400 (not related 2 form)
  // add a special __noFieldsServerError key \w original error
  return {
    __noFieldsServerError: error,
  }
}
