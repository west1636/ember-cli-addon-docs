import DS from 'ember-data';
import config from 'ember-cli-addon-docs/-docs-app/config/environment';
import fetch from 'fetch';

const assetsPath = config['ember-cli-addon-docs'].assetsUrlPath || '/';
const rootURL = config.rootURL.replace(/\/$/, '');

export default DS.Adapter.extend({
  defaultSerializer: '-addon-docs',
  namespace: `${rootURL}${assetsPath}docs`,

  shouldBackgroundReloadAll() {
    return false;
  },

  shouldBackgroundReloadRecord() {
    return false;
  },

  findRecord(store, modelClass, id, snapshot) {
    if (modelClass.modelName === 'project') {
      return fetch(`${this.namespace}/${id}.json`).then(response => response.json());
    } else {
      return store.peekRecord(modelClass.modelName, id);
    }
  }
});
