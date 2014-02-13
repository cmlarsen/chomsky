---
layout: noam_docs
title: 'Reference :: Noam Protocol'
permalink: /noam-protocol/
---

#Noam Protocol
=======
The noam protocol is a distributed observer pattern for use in systems with multiple control mechanisms spread out across many host systems.

The __Noam Moderator__ is the central registration server that implements the event distribution.

A __Lemma__ is a remote module that connects to the Moderator and sends and receives events.  

When a Lemma __“speaks”__ an event, the Noam Moderator forwards the event to all Lemmas that have registered to __“hear”__ that particular event.

##Discovery
---
### Marco : Lemma Broadcast
Broadcast to 1030, every 5 seconds.
`["Noam",”marco”, <RoomName>, <Lemma_name>, <lemma_polo_udp_port>, <dialect>, <system version>]`

Example Marco
`[“Noam”, “marco”, “car_sim”, “Lemma_id0”, “1031”, “mac”, “1.0”]`


### Polo : Response from Server
Point to point UDP communication directed at Lemma IP:lemma_polo_udp_port
`[“Noam”,”polo”, <server_tcp_connection_port>, <Room_name>]`

Example Polo
`[“Noam”, “polo”, “7733”, “car_sim”]`


### Registration : TCP Response from Lemma to Server
TCP connection to <server_tcp_connection_port>
`<byte_length_of_message_in_6_bytes>”["register",<Lemma_name>,<tcp_listen_port>,<hears_list>,<speak_list>,<dialect>,<system_version>]`

Example Registration:
`000086["register","Lemma_id0",4423,["car_speed","rpm","volume"],["headlights"],”mac”,”1.0”]`


##Definitions
* __Room_name__ - unique identifier for a Noam moderator. This should be unique on the local network.
* __Lemma_name__ - unique identifier for this device.  This name should be unique on the local network.
* __Lemma_polo_udp_port__ - the port to receive Polo responses: 10301 
server_tcp_connection_port - the port Moderator uses to receive TCP connections from Lemmas
* __tcp_port__ - TCP port on which the Lemma is listening for events.
* __hears_list__ - list of topics that this Lemma wishes to receive - json list of strings
        example: `["event1", "event2", "event3"]`

* __speak_list__ - list of events that this Lemma plans to send - json list of strings (note: a Lemma can still send an event even if it has not registered to send it.)
         example: `["event1", "event2", "event3"]`
* __dialect__  - what kind of device this is. (“mac”, “pi”, “win”, “web”, etc)
system_version - version of device / app registering  


## Sequence Diagram

Moderator                              Lemma                                Moderator
   |                                     |                                     |
   | <---- Marco broadcast --------------|---------- Marco Broadcast --------> |
   | ----- Polo Response --------------> |                                     |
   | <---- Registration ---------------- |                                     |
   

## Messaging
---
### Event : Message Body
`[ "event", <lemma_name>, <event_name>, <event_value> ]`

* __lemma_name__ - unique identifier for this device.  There should be no other devices with the same id on the network.
* __event_name__ - string identifier of the event.  Matches event names in <hears_list> and <plays_list> in registration message
* __event_value__ - current event value.  Open json data type:  string, int, float, list, or map

Example event message
     000039["event","Lemma_id2","car_speed","65"]

