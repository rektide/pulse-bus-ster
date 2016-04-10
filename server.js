#!/usr/bin/env node

var
  DBus= require("dbus-native")

function findPulseAddress( searchBusAddress){
	var env= process.env.PULSE_DBUS_SERVER
	if( env){
		return Promise.resolve( env)
	}
	var bus= DBus.createClient( searchBusAddress? {busAddress:searchBusAddress}: undefined)
	return new Promise(function( resolve, reject){
		bus.getService( "org.PulseAudio1").getInterface(
		  "/org/pulseaudio/server_lookup1",
		  "org.PulseAudio.ServerLookup1",
		  function( err, lookup){
			if( err){
				return reject( err)
			}
			lookup.Address(function( err, addr){
				if( err){
					return reject(err)
				}
				resolve(addr)
			})
		})
	})
}

findPulseAddress().then(console.log)
process.on("unhandledRejection", err=> console.error(err))
