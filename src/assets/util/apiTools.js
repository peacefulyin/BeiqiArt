export function apiRectify(api) {
  const reg = new RegExp('(//media.*?/.png)','gm')
  return api.replace(reg, ' http://localhost:8000/api$1')
}
