import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyItem(beer) {
      beer.destroyRecord();
      this.transitionToRoute('beers');
    }
  }
});
