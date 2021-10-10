// import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
// import { Gravatar } from '../generated/schema'

// export function handleNewGravatar(event: NewGravatar): void {
//   let gravatar = new Gravatar(event.params.id.toHex())
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }

// export function handleUpdatedGravatar(event: UpdatedGravatar): void {
//   let id = event.params.id.toHex()
//   let gravatar = Gravatar.load(id)
//   if (gravatar == null) {
//     gravatar = new Gravatar(id)
//   }
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }


// Import types and APIs from graph-ts
// import {
//   ByteArray,
//   crypto,
//   ens
// } from '@graphprotocol/graph-ts'


// // Import event types from the registry contract ABI
// import {
//   NameRegistered as NameRegisteredEvent,
// } from './types/Registrar/Registrar'

// import {
//   NewSubnameOwner as NewSubnameOwnerEvent,
// } from './types/ENS/ENSRegistry'

// // Import entity types generated from the GraphQL schema
// import { Domains, Subdomains } from './types/schema'

import { NameRegistered as NameRegisteredEvent } from '../generated/Domains/Registrar'
import { Domains } from '../generated/schema'


export function handleNameRegistered(event: NameRegisteredEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let domain = Domains.load(id)
  if (domain == null) {
    domain = new Domains(id)
  }
  domain.name = event.params.name.toString()
  domain.label = event.params.label.toString()
  domain.owner = event.params.owner
  domain.expires = event.params.expires.toString()
  domain.save()
}
