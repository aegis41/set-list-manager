import Ember from "ember";

export default Ember.Controller.extend({
	isEditing: false,
	actions: {
		beginEditMode() {
			this.set("isEditing", true);
		},
		save() {
			this.get("model").save();
			this.toggleProperty('isEditing');
		}
	}
});