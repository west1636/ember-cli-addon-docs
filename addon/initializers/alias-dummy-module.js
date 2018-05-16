/**
  @hide
*/
export function initialize(application) {
  const baseAlias = 'ember-cli-addon-docs/-docs-app';
  const aliasPaths = [
    '/config/environment',
    '/snippets',
  ];
  for (const path of aliasPaths) {
    define.alias(
      `${application.modulePrefix}${path}`,
      `${baseAlias}${path}`,
    );
  }
}

export default {
  initialize
};
