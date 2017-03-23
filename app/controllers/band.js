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
      let band = this.store.peekRecord("band", this.get("model.id"));
      let firstName = this.get("firstName");
      let lastName = this.get("lastName");
      let member = this.store.createRecord("member", {
        firstName: firstName,
        lastName: lastName,
        band: band
      });
      member.save();
      console.log(band);
      // band.members.push(member);
      // band.save();
    }
  }
});
