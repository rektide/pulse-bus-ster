"use strict"
let
  Device= require("./Device")

function Sink(opts){
	let
	  // TODO: this does not work, because dbus-native has constructed a Sink interface as instructed, not a Device interface. Also affects Source.
	  device= Device.call(this, opts),
	  all= [device]
	return Promise.all( all)
}
Sink.interface= "org.PulseAudio.Core1.Sink"
Sink.objectPath= /^\/org\/pulseaudio\/core1\/sink(\d+)$/
module.exports= Sink
