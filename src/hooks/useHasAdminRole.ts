import { useMsal } from "@azure/msal-react";

const ADMIN_ROLE_VALUE = "Admin";

export const useHasAdminRole = (): boolean => {
    const { accounts } = useMsal();

    if (accounts.length === 0) {
        return false;
    }

    const currentAccount = accounts[0];

    const idTokenClaims = currentAccount.idTokenClaims as Record<string, any> | undefined;

    const roles = idTokenClaims?.roles as string[] | undefined;

    return roles?.includes(ADMIN_ROLE_VALUE) ?? false;
}