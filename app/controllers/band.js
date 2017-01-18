import Ember from "ember";

export default Ember.Controller.extend({
	isEditing: false,
	isAddingMembers: false,
	actions: {
		beginEditMode() {
			this.set("isEditing", true);
		},
		beginAddMembersMode() {
			this.set("isAddingMembers", true);
		},
		endAddMembersMode() {
			this.toggleProperty("isAddingMembers");
		},
		save() {
			this.get("model").save();
			this.toggleProperty("isEditing");
			this.toggleProperty("isAddingMembers");
		}
	}
});