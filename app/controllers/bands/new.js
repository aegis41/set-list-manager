import Ember from "ember";

export default Ember.Controller.extend({
	bandName: "",

	actions: {
		createBand() {
			let bandName = this.get("bandName");

			if(!bandName.trim()) {
				return;
			}

			let band = this.store.createRecord("band", {
				bandName: bandName,
			});


			band.save().then(() => {
				//this.transitionToRoute("bands");
				this.set("bandName", "");
			});
		}
	}
});