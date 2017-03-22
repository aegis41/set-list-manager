import Ember from "ember";

export default Ember.Controller.extend({
  isEditing: false,
  isAddingMembers: false,
  actions: {
    toggleEditMode() {
      this.toggleProperty("isEditing");
    },
    toggleAddMembersMode() {
      this.toggleProperty("isAddingMembers");
    },
    save() {
      this.get("model").save();
      this.set("isEditing", false);
      this.set("isAddingMembers", false);
    }
  }
});
