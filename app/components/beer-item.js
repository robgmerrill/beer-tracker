import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleAvailability(beer) {
      beer.set('isAvailable', !beer.get('isAvailable'));
      beer.save();
    }
  }
});
