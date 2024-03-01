/**
 *
 * @param context
 * @returns userId
 */
export const getUserIdFromJwt = (context: any) => {
  return context.req.user.userId.replace('secret-key', '');
};
