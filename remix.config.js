/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  watchPaths: () => require('@nx/remix').createWatchPaths(__dirname),
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  serverBuildPath: 'build/index.js',
  publicPath: '/build/',
  watchPaths: ['../../libs'],

  future: {
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_meta: true,
    unstable_dev: true,
  },
};
