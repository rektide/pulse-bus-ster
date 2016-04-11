"use strict"
function RestoreEntry(){
}
RestoreEntry.interface= "org.PulseAudio.Ext.StreamRestore1.RestoreEntry"
RestoreEntry.objectPath= /^\/org\/pulseaudio/stream_restore1/entry(\d+)$/
module.exports= RestoreEntry
