import { auth } from "./auth";

export default auth((req) => {
    // req.auth
    console.log("Router : " + req.nextUrl.pathname);
})


export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
    // matcher : 매핑된 페이지를 보여준다
    // matcher: [
    //     "/auth/login",
    //     "/auth/register"
    // ],
}