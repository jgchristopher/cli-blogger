import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sayWhat: function(what) {
      alert(what);
    }
  }
});
