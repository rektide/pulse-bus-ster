#!/usr/bin/env node
"use strict"

var
  DBus= require("dbus-native"),
  DBusObjectList= require("dbus-object-list"),
  EventEmitter= require("events").EventEmitter

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
					return reject( err)
				}
				resolve( address)
			})
		})
	})
}

function Pulse( opts){
	EventEmitter.call( this)
	opts= opts|| {}
	// we might have-in decending priority- a connected pulse `bus`, an pulse `address`, or a `searchBusAddress`
	let
	  searchedPulse= opts.searchBusAddress&& findPulseAddress( opts.searchBusAddress),
	  address= opts.address|| searchedPulse,
	  fallthrough= !address&& findPulseAddress(),
	  bus= opts.bus|| Promise.resolve( address|| fallthrough).then( busAddress=> DBus.createClient({ busAddress, direct: true}))
	this.bus= bus
	this.pulseService= bus.then( bus=> bus.getService( "org.PulseAudio.Core1"))
	this.core1= this.pulseService.then( bus=> {
		return new Promise(( resolve, reject)=>{
			bus
			  .getInterface("/org/pulseaudio/core1", "org.PulseAudio.Core1", (err, core1)=>{
				if( err) return reject( err)
				resolve( core1)
			  })
		})
	})

	let
	  emit= this.emit.bind( this),
	  serviceFactory= ()=> this.pulseService,
	  baseInterface= "org.PulseAudio.Core1",
	  cards= DBusObjectList( "card", this.core1, {emit, serviceFactory, baseInterface}),
	  all= [ cards.done]
	this.cards= cards.value
	this.loaded= Promise.all( all).then(()=> this)
}
Pulse.prototype= Object.create( EventEmitter.prototype)
Pulse.prototype.constructor= Pulse

if( require.main=== module){
	process.on("unhandledRejection", err=> console.error("ERROR:", err, err.stack))
	;(new Pulse()).loaded.then( p=>{
		console.log(p.cards)
		setTimeout(()=> console.log(p.cards), 2000)
	})
}
