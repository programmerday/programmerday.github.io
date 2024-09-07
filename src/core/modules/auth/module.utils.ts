import { retryBackoff } from "backoff-rxjs";
import {
  catchError,
  defer,
  Observable,
  throwError,
  timeout,
  TimeoutError,
} from "rxjs";

export const callRequest = <T>(
  request: () => Observable<T>,
  timeOut = 15000,
  retry = true,
  maxRetries = 10,
  errorCodes: number[] = [],
  maxInterval = 60_000
): Observable<T> => {
  return defer(request).pipe(
    timeout(timeOut),
    retryBackoff({
      initialInterval: 1000,
      maxRetries: maxRetries,
      maxInterval: maxInterval,
      shouldRetry: (error) => {
        return (
          retry &&
          ([400, 401, 402, 403].includes(error.code) ||
            error instanceof TimeoutError ||
            errorCodes.includes(error.code))
        );
      },
    }),
    catchError((error) => {
      return throwError(error);
    })
  );
};
