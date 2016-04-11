"use strict"
function Stream(){
	return Promise.resolve()
}
Stream.interface= "org.PulseAudio.Core1.Stream"
Stream.objectPath= /\/org\/pulseaudio\/core1\/(playback_stream|restore_stream)(\d+)$/
module.exports= Stream
