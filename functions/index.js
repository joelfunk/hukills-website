/**
 * Locale redirect function for Firebase Hosting
 * Detects browser language and redirects to the appropriate locale
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Supported locales - must match your next-intl routing config
const SUPPORTED_LOCALES = ["en", "es"];
const DEFAULT_LOCALE = "en";

/**
 * Parses the Accept-Language header and returns the preferred locale
 * @param {string} acceptLanguage - The Accept-Language header value
 * @returns {string} The preferred locale
 */
function getPreferredLocale(acceptLanguage) {
  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
  }

  // Parse Accept-Language header (e.g., "es-MX,es;q=0.9,en;q=0.8")
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qValue] = lang.trim().split(";q=");
      return {
        code: code.split("-")[0].toLowerCase(), // Get base language code
        quality: qValue ? parseFloat(qValue) : 1.0,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find first supported locale
  for (const lang of languages) {
    if (SUPPORTED_LOCALES.includes(lang.code)) {
      return lang.code;
    }
  }

  return DEFAULT_LOCALE;
}

/**
 * Cloud Function to redirect root requests to the appropriate locale
 */
exports.localeRedirect = onRequest({ maxInstances: 10 }, (req, res) => {
  const acceptLanguage = req.headers["accept-language"] || "";
  const locale = getPreferredLocale(acceptLanguage);

  logger.info("Locale redirect", {
    acceptLanguage,
    detectedLocale: locale,
    path: req.path,
  });

  // Redirect to the locale-prefixed path
  res.redirect(302, `/${locale}`);
});
