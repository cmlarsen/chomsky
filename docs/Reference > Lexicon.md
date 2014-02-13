---
layout: noam_docs
title: 'Reference :: Lexicon'
permalink: /lexicon/
---

#Noam Lexicon

## Noam : A linguistic metaphor
---
Noam is a translator and communications protocol that moderates conversations between participants in a virtual room. 

Participants in the conversations use Lemmas to translate their individual dialects into the common language spoken by the Noam moderator.

Conversations are an collection of Topics on which Participants speak and listen for messages.

>Example: An Arduino Participant "RGBLED", connected to Noam Moderator "Test_Moderator" might have a conversation about Topics “Brightness” and “Color” by passing Messages such as "90%" and "00FF00".

## Lexicon Definitions
---

### Moderator
The local Noam server application that moderates the conversations by routing messages between participants. 

### Participant
The Moderator facilitates one to many conversations between Participants.

>Example: An Arduino using a Lemma becomes a Participant named “RGB LED” in a conversation about “Color” and “Brightness”.

### Topic
A set of messages with a common format and purpose.

### Speak
The act of sending a message as part of a conversation.

>Example: Send message of “6” as part of a conversation about “Brightness”

### Hear
the act of receiving messages as part of a conversation.

>Exanple: Receive message “00FF00” as part of a conversation about “Color”.

### Topic
Ex: The moderator my host a conversation about “Color” with hexadecimal messages like “FF00FF”.

### Dialects
The programming languages, toolkits, and platforms for which Lemmas exist that allow them to join Conversations on a Noam gathering.

>Ex: Arduino (C++), Processing (Java), and Qt (QML) are all supported dialects on noam.

### Room
the Noam server moderates a collection of conversations as part of a gathering. The server moderates a single gathering, but many conversations simultaneously. Multiple servers can be used to initiate additional gatherings.

### Message
A message is spoken and heard by the participants after being translated by Lemmas and moderated by the Noam Server

>Example: The message “FF0000” might be sent as part of a conversation about “Color”.

### Name
Unique identifier for a Participant that allows it to be recognized by the Moderator and participate in Conversation.

>Example: A Processing application named “Color Picker” might participate in a Conversation about “Color” speaking messages like “00FF00”.

### Lemma
The translator that allows any dialect to speak and listen to the Moderator. Lemmas are specific to particular dialects.

### Component
The combination of a dialect, lemma, and a specific functionality that acts as a packaged starting point for building with Noam.

>Example: An Arduino + Lemma + Motor Control HW & SW library that is ready to have conversations about “Direction”, “Speed”, and “Steps”.





