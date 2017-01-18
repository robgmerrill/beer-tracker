import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    makeUnavailable(beer) {
      Ember.set(beer, 'isAvailable', false)
    },
    makeAvailable(beer) {
      Ember.set(beer, 'isAvailable', true)
    }
  }
  });
