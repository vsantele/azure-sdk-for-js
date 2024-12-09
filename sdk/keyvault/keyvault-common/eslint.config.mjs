import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default azsdkEslint.config([
  {
    rules: {
      // this package does not have a module in `dist` because the directory does
      // not exist.
      "@azure/azure-sdk/ts-package-json-main-is-cjs": "off",
      // this package does not export a module.
      "@azure/azure-sdk/ts-package-json-module": "off",
      // this package does not create a `dist` directory to be included in `files`
      // list in `package.json`.
      "@azure/azure-sdk/ts-package-json-files-required": "off",
      // this package does not have type declaration file.
      "@azure/azure-sdk/ts-package-json-types": "off",
      // this package does not have a homepage
      "@azure/azure-sdk/ts-package-json-homepage": "off",
    },
  },
]);
