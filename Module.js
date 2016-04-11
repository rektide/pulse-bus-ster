"use strict"
function Module(){
	return Promise.resolve()
}
Module.interface= "org.PulseAudio.Core1.Module"
Module.objectPath= /^\/org\/pulseaudio\/core1\/module(\d+)$/
module.exports= Module
