export const makeShortText = (text) => {
  let str = ''
  for (let i = 0; i <= 30; i++) {
    str += text[i]
  }
  str += '...'
  return (
    str
  )
}