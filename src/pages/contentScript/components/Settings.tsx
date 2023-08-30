import ExtPay from "extpay";
import { Currency, Login, Validate } from "grommet-icons";
import React, { useEffect } from "react";
import { Configuration } from "../constants/Config";
import { useExtensionStore } from "../stores/ExtensionStore";
import { PrimaryButton } from "../styles/Common.styled";
import {
    SettingsContainer,
    SettingsIcon,
    SettingsOptionTitle,
    TextLine,
} from "../styles/Settings.styled";

const Settings = () => {
    const extensionStore = useExtensionStore();
    const extpay = ExtPay("chrome-extension-werkzeugbox");

    useEffect(() => {
        extpay
            .getUser()
            .then((user) => {
                extensionStore.setHasUserPaid(user.paid);
                extensionStore.setSubscriptionStatus(user.subscriptionStatus);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleRemoveExtension = () => {
        const rootElement = document.getElementById(Configuration.EXTENSION_ID);
        if (rootElement) rootElement.remove();
    };

    const handleOpenPaymentPage = () => {
        extpay.openPaymentPage();
        handleRemoveExtension();
    };

    const handleOpenLoginPage = () => {
        extpay.openLoginPage();
        handleRemoveExtension();
    };

    return (
        <SettingsContainer>
            <TextLine>
                <SettingsIcon>
                    <Validate size="small" />
                </SettingsIcon>
                <SettingsOptionTitle>
                    User has paid for subscription:
                </SettingsOptionTitle>
                {extensionStore.hasUserPaid ? "Yes" : "No"}
            </TextLine>
            {extensionStore.subscriptionStatus && (
                <TextLine>
                    <SettingsIcon>
                        <Validate size="small" />
                    </SettingsIcon>
                    <SettingsOptionTitle>
                        Subscription status:
                    </SettingsOptionTitle>
                    {` ${extensionStore.subscriptionStatus}`}
                </TextLine>
            )}
            <TextLine>
                <SettingsIcon>
                    <Currency size="small" />
                </SettingsIcon>
                <SettingsOptionTitle>Payment page:</SettingsOptionTitle>
                <PrimaryButton
                    onClick={handleOpenPaymentPage}
                    title="Payment"
                    type="button"
                    disabled={extensionStore.hasUserPaid}
                >
                    Payment
                </PrimaryButton>
            </TextLine>
            <TextLine>
                <SettingsIcon>
                    <Login size="small" />
                </SettingsIcon>
                <SettingsOptionTitle>Login page:</SettingsOptionTitle>
                <PrimaryButton
                    onClick={handleOpenLoginPage}
                    title="Login"
                    type="button"
                >
                    Login
                </PrimaryButton>
            </TextLine>
        </SettingsContainer>
    );
};

export default Settings;
