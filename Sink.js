"use strict"

function Sink(opts){
	return Promise.resolve()
}
Sink.interface= "org.PulseAudio.Core1.Sink"

module.exports= Sink
