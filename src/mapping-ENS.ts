
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

import { NewSubnameOwner as NewSubnameOwnerEvent } from '../generated/Subdomain/ENS'
import { Subdomain } from '../generated/schema'

export function handleNewSubnameOwner(event: NewSubnameOwnerEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let subdomain = Subdomain.load(id)
  if (subdomain == null) {
    subdomain = new Subdomain(id)
  }
  subdomain.node = event.params.node
  subdomain.label = event.params.label
  subdomain.owner = event.params.owner
  subdomain.save()
}
