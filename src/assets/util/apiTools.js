export function apiRectify(api) {
  const reg = new RegExp('(//media.*?/.png)','gm')
  const newApi = api.replace(reg, ' http://localhost:8000/api$1')
  return newApi
}
