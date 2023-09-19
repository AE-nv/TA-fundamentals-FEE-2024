import type { Role } from '@/utils/roles';
import { isAuthorized } from '@/services/authorization.service';

export function useAuthorization(...allowedRoles: Array<Role>) {
  return isAuthorized(allowedRoles);
}
