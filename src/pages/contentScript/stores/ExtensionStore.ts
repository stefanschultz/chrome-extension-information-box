import { create } from "zustand";

interface IExtensionStore {
    hasUserPaid: boolean;
    subscriptionStatus: string | undefined;

    setHasUserPaid: (hasUserPaid: boolean) => void;
    setSubscriptionStatus: (subscriptionStatus: string | undefined) => void;
}

export const useExtensionStore = create<IExtensionStore>((set, get) => ({
    hasUserPaid: false,
    subscriptionStatus: undefined,

    setHasUserPaid: (hasUserPaid: boolean) => set({ hasUserPaid }),
    setSubscriptionStatus: (subscriptionStatus: string | undefined) =>
        set({ subscriptionStatus }),
}));
