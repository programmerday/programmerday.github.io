import { Observable, ReplaySubject } from "rxjs";
import { AuthState } from "./auth.utils";
import { AuthApi } from "./auth.api";
import { ApiResponseStartPhoneAuth, ApiUser } from "~/types";

const IsLoggedInKey = "isLoggedIn";

export class AuthModule {
  public authState = new ReplaySubject<AuthState>(1);
  public lastAuthState: AuthState = AuthState.INITIAL;

  constructor(private api: AuthApi, public user: ApiUser | undefined) {
    this.authState.subscribe((value) => {
      this.lastAuthState = value;
    });
  }

  public start = (): void => {
    const isLoggedIn =
      localStorage.getItem(IsLoggedInKey) || localStorage.getItem("token_bale");
    if (isLoggedIn) {
      this.authState.next(AuthState.SUCCESS);
    }
  };

  public startPhoneAuth = (
    username: string,
    password: string
  ): Observable<ApiResponseStartPhoneAuth> => {
    return this.api.startPhoneAuth(username, password);
  };

  private saveAuth = (user?: ApiUser, token?: string): void => {
    if (token) localStorage.setItem("token_bale", token);
    localStorage.setItem(IsLoggedInKey, "true");
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
    this.authState.next(AuthState.SUCCESS);
  };

  private removeAuth = (): void => {
    localStorage.removeItem("user");
    if (localStorage.getItem("token_bale")) {
      localStorage.removeItem("token_bale");
    }
    localStorage.removeItem(IsLoggedInKey);
    this.user = undefined;
  };
}
