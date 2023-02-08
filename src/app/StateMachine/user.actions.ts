import { UserStateModel } from "./user.model";

export class SetUserAction {
    static readonly type = "[User] Login User";
    constructor(public user: UserStateModel) { }
}

export class ResetUserAction {
    static readonly type = "[User] User Disconnected or token expired";
}