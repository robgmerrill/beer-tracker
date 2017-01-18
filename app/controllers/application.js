import Ember from 'ember';

export default Ember.Controller.extend({
  beers: [
    {name: 'IPA', isAvailable: true },
    {name: 'Stout', isAvailable: false },
    {name: 'Lager', isAvailable: true },
    {name: 'Amber', isAvailable: false }
  ],
  actions: {
    makeUnavailable(beer) {
      Ember.set(beer, 'isAvailable', false)
    },
    makeAvailable(beer) {
      Ember.set(beer, 'isAvailable', true)
    }
  }
  });
