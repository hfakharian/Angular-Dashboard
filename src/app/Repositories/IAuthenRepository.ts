import { Observable } from "rxjs";
import { CollectionResult } from "../Entities/Collections/CollectionResult";
import { UserToken } from "../Entities/User/UserToken";
import { Unit } from "../Entities/User/Unit";
import { User } from "../Entities/User/User ";

export interface IAuthenRepository {
    GetUserToken(): UserToken;
    IsTokenExpired(tokenExpire: number): boolean;
    IsAuthenticated(): boolean;
    GetUnit(): boolean;
    SetUnit(unit: Unit): void;
    Signin(user: User): Observable<CollectionResult<User>>;
    Signup(user: User): Observable<CollectionResult<User>>;
    Signout(user: User): Observable<CollectionResult<User>>;
  }
