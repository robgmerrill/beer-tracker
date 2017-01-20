import Ember from 'ember';

export default Ember.Controller.extend({
  newItem: null,
  actions: {
    makeUnavailable(beer) {
      Ember.set(beer, 'isAvailable', false);
      beer.save();
    },
    makeAvailable(beer) {
      Ember.set(beer, 'isAvailable', true)
      beer.save();
    },
    saveNewItem() {
      this.store.createRecord('beer', {
        isAvailable: false,
        name: this.get('newItem')
      }).save()
      Ember.set(this, 'newItem', '')
    },
    destroyItem(beer) {
      beer.destroyRecord();
    }
  }
  });
