import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: 'dev-ui',
  project: 'repair-shop',

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // Can be used to suppress logs.
  silent: false,

  // Strip the Sentry SDK debug logger out of the client bundles, saving bundle size.
  disableLogger: true,

  // Making sourcemaps invisible to the browser.
  hideSourceMaps: true,
});
