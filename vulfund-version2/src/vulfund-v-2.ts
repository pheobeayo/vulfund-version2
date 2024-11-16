import {
  DaoMemberAdded as DaoMemberAddedEvent,
  Donated as DonatedEvent,
  ProposalCreated as ProposalCreatedEvent,
  ProposalSubmissionOpen as ProposalSubmissionOpenEvent,
  SignUP as SignUPEvent,
  Voted as VotedEvent
} from "../generated/VulfundV2/VulfundV2"
import {
  DaoMemberAdded,
  Donated,
  ProposalCreated,
  ProposalSubmissionOpen,
  SignUP,
  Voted
} from "../generated/schema"

export function handleDaoMemberAdded(event: DaoMemberAddedEvent): void {
  let entity = new DaoMemberAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.daoMember = event.params.daoMember

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDonated(event: DonatedEvent): void {
  let entity = new Donated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.donator = event.params.donator
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalCreated(event: ProposalCreatedEvent): void {
  let entity = new ProposalCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.beneficiary = event.params.beneficiary
  entity.description = event.params.description
  entity.recipientAddrss = event.params.recipientAddrss
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalSubmissionOpen(
  event: ProposalSubmissionOpenEvent
): void {
  let entity = new ProposalSubmissionOpen(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignUP(event: SignUPEvent): void {
  let entity = new SignUP(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orgAddress = event.params.orgAddress
  entity.organizationname = event.params.organizationname
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoted(event: VotedEvent): void {
  let entity = new Voted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.voter = event.params.voter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
