import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save();
      this.transitionToRoute('breweries.brewery', this.get('model.id'));
    }
  }
});
