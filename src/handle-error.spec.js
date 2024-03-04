import handleError from './handle-error.js'

export default {
  'missing name': () => expect(handleError).toThrow("Missing option 'name'"),
  'missing slug': () =>
    expect(() => handleError(undefined, { name: 'foo' })).toThrow(
      "Missing option 'slug'",
    ),
}
