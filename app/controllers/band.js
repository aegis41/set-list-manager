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
    },
    saveMember() {
      let band = this.get("model");
      let firstName = this.get("firstName");
      let lastName = this.get("lastName");
      let member = this.store.createRecord("member", {
        firstName: firstName,
        lastName: lastName,
        band: band
      });
      band.get("members").pushObject(member);
      member.save();
      band.save();
      this.set("firstName", "");
      this.set("lastName", "");
    },
    deleteMember(id) {
      let member = this.get("model.members")
      console.log(member);
    }
  }
});
