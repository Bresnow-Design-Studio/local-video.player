const extension = (filename: string = ''): string =>
  filename.replace(/\.[a-z0-9]+$/i, '')

const remove = { extension }

export default remove
