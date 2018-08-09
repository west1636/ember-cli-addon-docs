import DS from 'ember-data';
import config from 'ember-cli-addon-docs/-docs-app/config/environment';
import { inject as service } from '@ember/service';

const assetsPath = config['ember-cli-addon-docs'].assetsUrlPath || '/';
const rootURL = config.rootURL.replace(/\/$/, '');

export default DS.Adapter.extend({
  defaultSerializer: '-addon-docs',
  namespace: `${rootURL}${assetsPath}docs`,
  docsFetch: service(),

  shouldBackgroundReloadAll() {
    return false;
  },

  shouldBackgroundReloadRecord() {
    return false;
  },

  findRecord(store, modelClass, id, snapshot) {
    if (modelClass.modelName === 'project') {
      return this.get('docsFetch').fetch({ url: `${this.namespace}/${id}.json` }).json();
    } else {
      return store.peekRecord(modelClass.modelName, id);
    }
  }
});
