import { Observable } from "rxjs";
import { callRequest } from "./module.utils";
import { ApiAuth, ApiResponseStartPhoneAuth } from "~/types";

export class AuthApi {
  constructor(private api: ApiAuth) {
    this.api = api;
  }

  public startPhoneAuth(
    username: string,
    password: string
  ): Observable<ApiResponseStartPhoneAuth> {
    return callRequest(() =>
      this.api.StartPhoneAuth({
        username,
        password,
      })
    );
  }
}
