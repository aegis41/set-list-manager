import Ember from "ember";

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(...arguments);
    if (this.get("currentId") !== model.id) {
      controller.set("isEditing", false);
    }
    this.set("currentId", model.id);
  }
});
