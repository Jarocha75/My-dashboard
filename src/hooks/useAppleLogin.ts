import { useEffect, useState } from "react";

interface AppleAuthResponse {
  authorization: {
    code: string;
    id_token: string;
  };
  user?: {
    email: string;
    name?: {
      firstName: string;
      lastName: string;
    };
  };
}

interface AppleIDSignInOnSuccess {
  authorization: {
    code: string;
    id_token: string;
  };
}

interface AppleIDSignInOnFailure {
  error: string;
}

declare global {
  interface Window {
    AppleID?: {
      auth: {
        init: (config: {
          clientId: string;
          scope: string;
          redirectURI: string;
          usePopup: boolean;
        }) => void;
        signIn: () => Promise<AppleAuthResponse>;
      };
    };
  }
}

export const useAppleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  useEffect(() => {
    // Check if Apple ID SDK is already loaded
    if (window.AppleID) {
      setIsSDKLoaded(true);
      return;
    }

    const clientId = import.meta.env.VITE_APPLE_CLIENT_ID;
    const redirectURI = import.meta.env.VITE_APPLE_REDIRECT_URI;

    if (!clientId) {
      console.warn("Apple Client ID not configured");
      return;
    }

    // Load Apple ID SDK script
    const script = document.createElement("script");
    script.id = "apple-jssdk";
    script.src =
      "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.AppleID) {
        window.AppleID.auth.init({
          clientId: clientId,
          scope: "name email",
          redirectURI: redirectURI || window.location.origin,
          usePopup: true,
        });
        setIsSDKLoaded(true);
      }
    };

    script.onerror = () => {
      console.error("Failed to load Apple ID SDK");
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      const sdkScript = document.getElementById("apple-jssdk");
      if (sdkScript) {
        sdkScript.remove();
      }
    };
  }, []);

  const login = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!isSDKLoaded || !window.AppleID) {
        reject(new Error("Apple ID SDK not loaded"));
        return;
      }

      setIsLoading(true);

      window.AppleID.auth
        .signIn()
        .then((response: AppleAuthResponse) => {
          setIsLoading(false);
          // Return the id_token which will be sent to your backend
          resolve(response.authorization.id_token);
        })
        .catch((error: AppleIDSignInOnFailure) => {
          setIsLoading(false);
          reject(new Error(`Apple login failed: ${error.error}`));
        });
    });
  };

  return {
    login,
    isLoading,
    isSDKLoaded,
  };
};
