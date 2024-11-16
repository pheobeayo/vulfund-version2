import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DaoMemberAdded } from "../generated/schema"
import { DaoMemberAdded as DaoMemberAddedEvent } from "../generated/VulfundV2/VulfundV2"
import { handleDaoMemberAdded } from "../src/vulfund-v-2"
import { createDaoMemberAddedEvent } from "./vulfund-v-2-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let daoMember = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newDaoMemberAddedEvent = createDaoMemberAddedEvent(daoMember)
    handleDaoMemberAdded(newDaoMemberAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DaoMemberAdded created and stored", () => {
    assert.entityCount("DaoMemberAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DaoMemberAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "daoMember",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
