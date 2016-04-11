"use strict"
let
  DbusObjectList= require("dbus-object-list")

function Client(opts){
	let
	  playbackStreams= DbusObjectList( Stream, this, opts),
	  recordStreams= DbusObjectList( Stream, this, opts),
	  all= [ playbackStreams.done, recordStreams.done]
	this.playbackStreams= playbackStreams.value
	this.recordStreams= recordStreams.value
	return Promise.all( all)
}
Client.interface= "org.PulseAduio.Core1.Client"
Client.objectPath= /^\/org\/pulseaudio\/core1\/client\d+$/
module.exports= Client
