import Ember from 'ember';

export default Ember.Controller.extend({
  newItem: null,
  brewery: {
    name: "Merrill Brewery",
    yearsOpen: 3
  },
  onTapLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'isAvailable', true),
  actions: {

    saveNewItem() {
      this.store.createRecord('beer', {
        isAvailable: false,
        name: this.get('newItem')
      }).save();
      Ember.set(this, 'newItem', '');
    }
  }
  });
