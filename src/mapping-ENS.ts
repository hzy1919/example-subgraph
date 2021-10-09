
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

import { NewSubnameOwner as NewSubnameOwnerEvent } from '../generated/Subdomains/ENS'
import { Subdomains } from '../generated/schema'

export function handleNewSubnameOwner(event: NewSubnameOwnerEvent): void {
  let node = event.params.node.toString()
  let subdomain = Subdomains.load(node)
  if (subdomain == null) {
    subdomain = new Subdomains(node)
  }
  subdomain.node = node
  subdomain.label = event.params.label.toString()
  subdomain.owner = event.params.owner
  subdomain.save()
}
