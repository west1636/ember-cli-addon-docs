import Route from '@ember/routing/route';
import config from 'ember-cli-addon-docs/-docs-app/config/environment';
import RSVP from 'rsvp';

const documentedAddons = config['ember-cli-addon-docs'].documentedAddons;

export default Route.extend({

  model() {
    return RSVP.all(documentedAddons.map(addonName =>
      this.store.findRecord('project', addonName)
    ));
  }

});
