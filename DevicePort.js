"use strict"
function DevicePort(){
	return Promise.resolve()
}
DevicePort.interface= "org.PulseAudio.Core1.DevicePort"
DevicePort.objectPath= /^\/org\/pulseaudio\/core1\/(sink|source)(\d+)\/port(\d+)$/
module.exports= DevicePort
