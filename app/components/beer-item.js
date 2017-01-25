import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeUnavailable(beer) {
      Ember.set(beer, 'isAvailable', false);
      beer.save();
    },
    makeAvailable(beer) {
      Ember.set(beer, 'isAvailable', true);
      beer.save();
    },
  }
});
