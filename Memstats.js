"use strict"
function Memstats(){
	return Promise.resolve()
}
Memstats.interface= "org.PulseAudio.Core1.Memstats"
Memstats.objectPath= /^\/org\/pulseaudio\/core1\/memstats$/
module.exports= Memstats
