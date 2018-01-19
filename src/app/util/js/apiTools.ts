export function apiRectify(api) {
  const reg = new RegExp('(/media.*?.png)');
  return api.replace(reg, ' http://localhost:8000$1');
}
