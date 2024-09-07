import { AuthModule } from "./modules/auth/auth.module";

export class Core {
  public auth!: AuthModule;
  constructor() {}
}
