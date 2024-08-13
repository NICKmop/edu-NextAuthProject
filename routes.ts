/**
 * An array of routes that are accessible to the public
 * These routes do not
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
];

/**
 * 인증 페이지
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
];

/**
 * The prefix for API auth routes
 * API인증 URL
 * @type {string[]}
 */
export const  apiAuthPrefix = "/api/auth";

/**
 * 기본 경로
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";