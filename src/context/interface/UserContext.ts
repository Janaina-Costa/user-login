export interface IAuthContext {
  token: string;
  signIn({email,password}:IUserContext):Promise<void>
}
export interface IUserContext{
  email: string;
  password: string;
}
