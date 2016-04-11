"use strict"
let
  CardProfile= require("./CardProfile"),
  DbusObjectList= require("dbus-object-list"),
  Device= require("./Device"),
  Profile= require("./CardProfile")
  //Sink= require("./Sink"),
  //Source= require("./Source"),

function Card(opts){
	let origTargetSlot= opts.targetSlot
	// Hacked for now, Device not Sink/Source. see Sink for explanation:
	  //sinks= DbusObjectList( Sink, this, opts),
	  //sources= DbusObjectList( Source, this, opts)
	opts.targetSlot= "Sinks"
	let sinks= DbusObjectList( Device, this, opts)
	opts.targetSlot= "Sources"
	let sources= DbusObjectList( Device, this, opts)
	opts.targetSlot= "Profiles"
	let
	  profiles= DbusObjectList( Profile, this, opts),
	  all= [ sinks.done, sources.done, profiles.done]
	opts.targetSlot= origTargetSlot
	this.sinks= sinks.value
	this.sources= sources.value
	this.profiles= profiles.value
	return Promise.all( all)
}
Card.interface= "org.PulseAudio.Core1.Card"
Card.objectPath= /^\/org\/pulseaudio\/core1\/card(\d+)$/
module.exports= Card
