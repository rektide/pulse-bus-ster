"use strict"
let
  DbusObjectList= require("dbus-object-list"),
  DevicePort= require("./DevicePort")

function Device(opts){
	let
	  origTargetSlot= opts.targetSlot
	opts.targetSlot= "Ports"
	let
	  ports= DbusObjectList( DevicePort, this, opts),
	  all= [ports.done]
	opts.targetSlot= origTargetSlot
	this.ports= ports.value
	return Promise.all( all)
}
Device.interface= "org.PulseAudio.Core1.Device"
Device.objectPath= /^\/org\/pulseaudio\/core1\/(sink|source)(\d+)$/
module.exports= Device
