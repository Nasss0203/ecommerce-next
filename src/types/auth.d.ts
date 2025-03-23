export interface IAuth {
	_id?: string;
	username?: string;
	email?: string;
	password?: string;
	roles?: [string];
	verify?: boolean;
	tokens?: {
		access_token: string;
		refresh_token: string;
	};
}
