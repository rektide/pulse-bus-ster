"use strict"
let
  DbusObjectList= require("dbus-object-list"),
  Sink= require("./Sink")

function Card(opts){
	let
	  sinks= DbusObjectList( Sink, this, opts),
	  all= [ sinks.done]
	this.sinks= sinks.value
	return Promise.all( all).then(()=> this)
}
Card.interface= "org.PulseAudio.Core1.Card"

module.exports= Card
