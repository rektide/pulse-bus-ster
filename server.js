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
			lookup.Address(function( err, address){
				if( err){
					return reject(err)
				}
				resolve(addr)
			})
		})
	})
}

function Pulse( address, searchBusAddress){
	address= address? Promise.resolve( address): findPulseAddress( searchBusAddress)
	EventEmitter.call(this)
	

	add( "card")
	var add= baseName=> {
		let
		  first= baseName.slice( 0, 1),
		  cap= first.toUpperString(),
		  rest= baseName.slice( 1),
		  plural= rest+ baseName.plural? baseName.plural: "s",
		  member= "_"+ baseName+ baseName.plural? baseName.plural "s",
		  newObj= "New"+ cap+ plural,
		  removedObj= "Removed"+ cap+ plural,
		  map= {},
		  v
		
	}

	this.core= address.then( address=> {
		
	})
	
}
Pulse.prototype= Object.create( EventEmitter.prototype, {
	cards: {
		get: function(){
			return this._cards
		}
	}
})


findPulseAddress().then(console.log)
process.on("unhandledRejection", err=> console.error(err))
