import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    makeUnavailable(beer) {
      Ember.set(beer, 'isAvailable', false);
      beer.save();
    },
    makeAvailable(beer) {
      Ember.set(beer, 'isAvailable', true)
      beer.save();
    },
    saveNewItem(newItem) {
      this.store.createRecord('beer', {
        isAvailable: false,
        name: newItem
      })
    }
  }
  });
