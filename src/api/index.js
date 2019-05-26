import { ajax } from 'rxjs/ajax'
import xhr2 from 'xhr2'

const isJSDOM = navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom')
const XHR = isJSDOM ? xhr2 : XMLHttpRequest

export const request = (url, params) => (
  ajax({
    url,
    body: params || null,
    method: (params ? 'POST' : 'GET'),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    responseType: 'json',
    createXHR: () => new XHR(),
    crossDomain: true
  })
)