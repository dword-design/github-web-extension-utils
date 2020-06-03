import handleError from './handle-error'

export default {
  'missing token key': () => expect(handleError).toThrow('Missing token key'),
}
