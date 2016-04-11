"use strict"
let
  Device= require("./Device")

function Source(opts){
	let
	  device= Device.call(this, opts),
	  all= [device]
	return Promise.all( all)
}
Source.interface= "org.PulseAudio.Core1.Source"
Source.objectPath= /^\/org\/pulseaudio\/core1\/source(\d+)$/
module.exports= Source
