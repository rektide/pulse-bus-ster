"use strict"
function Sample(){
	return Promise.resolve()
}
Sample.interface= "org.PulseAudio.Core1.Sample"
Sample.objectPath= /^\/org\/pulseaudio\/core1\/sample(\d+)$/
module.exports= Sample
