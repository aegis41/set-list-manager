import Ember from "ember";

export default Ember.Controller.extend({
  isEditing: false,
  isAddingMembers: false,
  actions: {
    beginEditMode() {
      this.set("isEditing", true);
    },
    toggleAddMembersMode() {
      this.toggleProperty("isAddingMembers");
    },
    save() {
      this.get("model").save();
      this.toggleProperty("isEditing");
      this.set("isAddingMembers", false);
    }
  }
});
