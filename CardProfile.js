"use strict"
function CardProfile(){
	return Promise.resolve()
}
CardProfile.interface= "org.PulseAudio.Core1.CardProfile"
CardProfile.objectPath= /^\/org\/pulseaudio\/core1\/card(\d+)\/profile(\d+)$/
module.exports= CardProfile
