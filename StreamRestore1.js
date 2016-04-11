"use strict"
let
  DbusObjectList= require("dbus-object-list"),
  RestoreEntry= require("./RestoreEntry")

function StreamRestore1(opts){
	let origType= opts.type
	opts.type= RestoreEntry
	let
	  entries= DbusObjectList( "entry", this, opts)
	  all= [ entries.done]
	this.entries= entries
	opts.type= origType
	return Promise.all( all)
}
StreamRestore1.interface= "org.PulseAudio.Ext.StreamRestore1"
StreamRestore1.objectPath= /^\/org\/pulseaudio\/stream_restore1$/
module.exports= StreamRestore1
