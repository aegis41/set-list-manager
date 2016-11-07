import DS from "ember-data";

export default DS.Model.extend({
	bandName: DS.attr("string"),
	firstName: DS.attr("string"),
	lastName: DS.attr("string"),
	memebers: DS.hasMany("member")
});