export interface SettingItem {
  id: string;
  label: string;
  checked: boolean;
}

export interface Settings {
  account: SettingItem[];
  application: SettingItem[];
}

export const INITIAL_SETTINGS: Settings = {
  account: [
    { id: "follow", label: "Email me when someone follows me", checked: true },
    {
      id: "answer",
      label: "Email me when someone answers on my post",
      checked: false,
    },
    {
      id: "mention",
      label: "Email me when someone mentions me",
      checked: true,
    },
  ],
  application: [
    { id: "launches", label: "New launches and projects", checked: false },
    { id: "products", label: "Monthly product updates", checked: false },
    { id: "subscribe", label: "Subscribe to newsletter", checked: true },
    { id: "receive", label: "Receive mails weekly", checked: true },
  ],
};
