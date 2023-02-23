import {
	AUTH0_CLIENT_ID,
	AUTH0_CLIENT_SECRET,
	AUTH0_ISSUER,
	AUTH_SECRET,
} from "$env/static/private";
import Auth0 from "@auth/core/providers/auth0";
import { SvelteKitAuth } from "@auth/sveltekit";

export const handle = SvelteKitAuth({
	providers: [
		//@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
		Auth0({
			clientId: AUTH0_CLIENT_ID,
			clientSecret: AUTH0_CLIENT_SECRET,
			issuer: AUTH0_ISSUER,
		}),
	],
	secret: AUTH_SECRET,
});
