import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DaoMemberAdded,
  Donated,
  ProposalCreated,
  ProposalSubmissionOpen,
  SignUP,
  Voted
} from "../generated/VulfundV2/VulfundV2"

export function createDaoMemberAddedEvent(daoMember: Address): DaoMemberAdded {
  let daoMemberAddedEvent = changetype<DaoMemberAdded>(newMockEvent())

  daoMemberAddedEvent.parameters = new Array()

  daoMemberAddedEvent.parameters.push(
    new ethereum.EventParam("daoMember", ethereum.Value.fromAddress(daoMember))
  )

  return daoMemberAddedEvent
}

export function createDonatedEvent(donator: Address, amount: BigInt): Donated {
  let donatedEvent = changetype<Donated>(newMockEvent())

  donatedEvent.parameters = new Array()

  donatedEvent.parameters.push(
    new ethereum.EventParam("donator", ethereum.Value.fromAddress(donator))
  )
  donatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donatedEvent
}

export function createProposalCreatedEvent(
  proposalId: BigInt,
  beneficiary: Address,
  description: string,
  recipientAddrss: Address,
  amount: BigInt
): ProposalCreated {
  let proposalCreatedEvent = changetype<ProposalCreated>(newMockEvent())

  proposalCreatedEvent.parameters = new Array()

  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientAddrss",
      ethereum.Value.fromAddress(recipientAddrss)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return proposalCreatedEvent
}

export function createProposalSubmissionOpenEvent(
  timestamp: BigInt
): ProposalSubmissionOpen {
  let proposalSubmissionOpenEvent = changetype<ProposalSubmissionOpen>(
    newMockEvent()
  )

  proposalSubmissionOpenEvent.parameters = new Array()

  proposalSubmissionOpenEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return proposalSubmissionOpenEvent
}

export function createSignUPEvent(
  orgAddress: Address,
  organizationname: string,
  time: BigInt
): SignUP {
  let signUpEvent = changetype<SignUP>(newMockEvent())

  signUpEvent.parameters = new Array()

  signUpEvent.parameters.push(
    new ethereum.EventParam(
      "orgAddress",
      ethereum.Value.fromAddress(orgAddress)
    )
  )
  signUpEvent.parameters.push(
    new ethereum.EventParam(
      "organizationname",
      ethereum.Value.fromString(organizationname)
    )
  )
  signUpEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return signUpEvent
}

export function createVotedEvent(proposalId: BigInt, voter: Address): Voted {
  let votedEvent = changetype<Voted>(newMockEvent())

  votedEvent.parameters = new Array()

  votedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  votedEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )

  return votedEvent
}
