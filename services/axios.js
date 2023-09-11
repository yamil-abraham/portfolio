import projectsApi from '../apis/projectsApi'

function getSuspender(promise) {
  let status = 'pending'
  let response

  const suspender = promise.then(
    (res) => {
      status = 'success'
      response = res
    },
    (err) => {
      status = 'error'
      response = err
    }
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}

export async function fetchData() {
  const { data } = await projectsApi
    .get(`/allProjects`)
    .then((res) => res)
    .then((data) => data)

  return data
}

export async function fetchSendEmail(contentEmail) {
  try {
    const { data } = await projectsApi.post(`/contact`, contentEmail)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}
