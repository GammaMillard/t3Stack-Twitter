import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();
console.log('HOla');

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};