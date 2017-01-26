import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    isOpen: false,
    toggleAvailability(beer) {
      beer.toggleProperty('isAvailable');
      beer.save();
    },
    toggleOpen() {
      this.toggleProperty('isOpen');
    }
  }
});
