export const API_URL = 'http://localhost:2703/api/v1';
export interface IResponse<T> {
  data: T;
  message?: string;
  status?: number;
  success: boolean;
}

export default function customFetch<T>(
  url: string,
  // `RequestInit` is a type for configuring
  // a `fetch` request. By default, an empty object.
  config: RequestInit = {},
  timeout: number = 10000
  // This function is async, it will return a Promise:
): Promise<IResponse<T>> {
  // Inside, we call the `fetch` function with
  // a URL and config given:
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  if (config.headers) {
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers
    };
  } else {
    config.headers = {
      'Content-Type': 'application/json'
    };
  }
  return (
    fetch(API_URL + url, {
      ...config,
      signal: controller.signal,
      headers: {
        ...config.headers
      }
    })
      // When got a response call a `json` method on it
      .then((response) => {
        clearTimeout(id);
        return response.json();
      })
      // and return the result data.
      .then((data) => {
        return data as T;
      })
      .catch((error) => {
        return error;
      })
  );
}
