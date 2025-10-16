import ReactGA from "react-ga4";

export const initGA = (id) => {
  ReactGA.initialize(id);
};

export const logPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};