import { GoogleAuth } from "google-auth-library";

export async function auth() {
    const auth = new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/cloud-platform'
    });
    return await auth.getAccessToken();
}

function main() {
    auth().then(console.log);
}

main();