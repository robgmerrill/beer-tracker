import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('beers', function() {
    this.route('beer', {path: ':beer_id'});
  });
  this.route('about');
  this.route('contact');
});

export default Router;
