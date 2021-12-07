
import config from 'ember-get-config';

/*
 * This function returns the grecaptcha object provided by Google ReCaptcha scripts.
 * App using the Public API should configure an URL including "api.js".
 * App using the Enterprise API should configure an URL including "enterprise.js".
 * When Enterprise recaptcha is used, calls to grecaptcha object should be replaced by calls to grecaptcha.enterprise object.
 */
export default function() {
  if (config.gReCaptcha.jsUrl?.includes('enterprise')) {
    return window.grecaptcha.enterprise
  }
  return window.grecaptcha
}
