import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ResetUserAction, SetUserAction } from './user.actions';
import { UserStateModel } from './user.model';

type UserStateContext = StateContext<UserStateModel>;

export const USER_STATE_NAME = 'user';

@Injectable()
@State<UserStateModel>({
	name: USER_STATE_NAME,
	defaults: {
		username: null,
		role: null,
		token: null
	}
})
export class UserState {
	@Selector()
	public static user(state: UserStateModel): UserStateModel {
		return state;
	}

	@Action(SetUserAction)
	setUser(
		{ patchState }: UserStateContext,
		{ user }: SetUserAction
	): void {
		patchState({
			...user
		});
	}

	@Action(ResetUserAction)
	public resetUser({ patchState }: UserStateContext): void {
		patchState({
			username: null,
			role: null,
			token: null
		});
	}
}