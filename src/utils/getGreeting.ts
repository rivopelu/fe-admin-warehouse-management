import { t } from 'i18next';

export const getGreeting = (): string => {
  const hours = new Date().getHours();

  if (hours < 12) {
    return `${t("good_morning")}, `;
  } else if (hours < 18) {
    return `${t("good_afternoon")}, `;
  } else {
    return `${t("Good evening")}, `;
  }
};