
function transformErrors (errors) {
  return errors.map(error => {
    if (error.name === 'required') {
      error.message = '此输入项必填'
    }
    return error
  })
}

const showErrorList = false

export default {
  transformErrors,
  showErrorList
}
