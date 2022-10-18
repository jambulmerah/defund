/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "defundlabs.defund.etf";

export interface MsgCreateFund {
  creator: string;
  symbol: string;
  name: string;
  description: string;
  holdings: string;
  rebalance: number;
  baseDenom: string;
  startingPrice: string;
}

export interface MsgCreateFundResponse {}

export interface MsgCreate {
  creator: string;
  fund: string;
  tokenIn: Coin | undefined;
  channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight: string;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: number;
}

export interface MsgCreateResponse {}

export interface AddressMap {
  osmosisAddress: string;
}

export interface MsgRedeem {
  creator: string;
  fund: string;
  amount: Coin | undefined;
  channel: string;
  addresses: AddressMap | undefined;
}

export interface MsgRedeemResponse {}

const baseMsgCreateFund: object = {
  creator: "",
  symbol: "",
  name: "",
  description: "",
  holdings: "",
  rebalance: 0,
  baseDenom: "",
  startingPrice: "",
};

export const MsgCreateFund = {
  encode(message: MsgCreateFund, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.holdings !== "") {
      writer.uint32(42).string(message.holdings);
    }
    if (message.rebalance !== 0) {
      writer.uint32(48).int64(message.rebalance);
    }
    if (message.baseDenom !== "") {
      writer.uint32(58).string(message.baseDenom);
    }
    if (message.startingPrice !== "") {
      writer.uint32(66).string(message.startingPrice);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateFund {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateFund } as MsgCreateFund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.holdings = reader.string();
          break;
        case 6:
          message.rebalance = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.baseDenom = reader.string();
          break;
        case 8:
          message.startingPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFund {
    const message = { ...baseMsgCreateFund } as MsgCreateFund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.holdings !== undefined && object.holdings !== null) {
      message.holdings = String(object.holdings);
    } else {
      message.holdings = "";
    }
    if (object.rebalance !== undefined && object.rebalance !== null) {
      message.rebalance = Number(object.rebalance);
    } else {
      message.rebalance = 0;
    }
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = String(object.baseDenom);
    } else {
      message.baseDenom = "";
    }
    if (object.startingPrice !== undefined && object.startingPrice !== null) {
      message.startingPrice = String(object.startingPrice);
    } else {
      message.startingPrice = "";
    }
    return message;
  },

  toJSON(message: MsgCreateFund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.holdings !== undefined && (obj.holdings = message.holdings);
    message.rebalance !== undefined && (obj.rebalance = message.rebalance);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.startingPrice !== undefined &&
      (obj.startingPrice = message.startingPrice);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateFund>): MsgCreateFund {
    const message = { ...baseMsgCreateFund } as MsgCreateFund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.holdings !== undefined && object.holdings !== null) {
      message.holdings = object.holdings;
    } else {
      message.holdings = "";
    }
    if (object.rebalance !== undefined && object.rebalance !== null) {
      message.rebalance = object.rebalance;
    } else {
      message.rebalance = 0;
    }
    if (object.baseDenom !== undefined && object.baseDenom !== null) {
      message.baseDenom = object.baseDenom;
    } else {
      message.baseDenom = "";
    }
    if (object.startingPrice !== undefined && object.startingPrice !== null) {
      message.startingPrice = object.startingPrice;
    } else {
      message.startingPrice = "";
    }
    return message;
  },
};

const baseMsgCreateFundResponse: object = {};

export const MsgCreateFundResponse = {
  encode(_: MsgCreateFundResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateFundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateFundResponse } as MsgCreateFundResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateFundResponse {
    const message = { ...baseMsgCreateFundResponse } as MsgCreateFundResponse;
    return message;
  },

  toJSON(_: MsgCreateFundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateFundResponse>): MsgCreateFundResponse {
    const message = { ...baseMsgCreateFundResponse } as MsgCreateFundResponse;
    return message;
  },
};

const baseMsgCreate: object = {
  creator: "",
  fund: "",
  channel: "",
  timeoutHeight: "",
  timeoutTimestamp: 0,
};

export const MsgCreate = {
  encode(message: MsgCreate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fund !== "") {
      writer.uint32(18).string(message.fund);
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }
    if (message.timeoutHeight !== "") {
      writer.uint32(42).string(message.timeoutHeight);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(48).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreate } as MsgCreate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fund = reader.string();
          break;
        case 3:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.channel = reader.string();
          break;
        case 5:
          message.timeoutHeight = reader.string();
          break;
        case 6:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.fund !== undefined && object.fund !== null) {
      message.fund = String(object.fund);
    } else {
      message.fund = "";
    }
    if (object.tokenIn !== undefined && object.tokenIn !== null) {
      message.tokenIn = Coin.fromJSON(object.tokenIn);
    } else {
      message.tokenIn = undefined;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    if (object.timeoutHeight !== undefined && object.timeoutHeight !== null) {
      message.timeoutHeight = String(object.timeoutHeight);
    } else {
      message.timeoutHeight = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fund !== undefined && (obj.fund = message.fund);
    message.tokenIn !== undefined &&
      (obj.tokenIn = message.tokenIn
        ? Coin.toJSON(message.tokenIn)
        : undefined);
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeoutHeight !== undefined &&
      (obj.timeoutHeight = message.timeoutHeight);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreate>): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.fund !== undefined && object.fund !== null) {
      message.fund = object.fund;
    } else {
      message.fund = "";
    }
    if (object.tokenIn !== undefined && object.tokenIn !== null) {
      message.tokenIn = Coin.fromPartial(object.tokenIn);
    } else {
      message.tokenIn = undefined;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    if (object.timeoutHeight !== undefined && object.timeoutHeight !== null) {
      message.timeoutHeight = object.timeoutHeight;
    } else {
      message.timeoutHeight = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    return message;
  },
};

const baseMsgCreateResponse: object = {};

export const MsgCreateResponse = {
  encode(_: MsgCreateResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    return message;
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    return message;
  },
};

const baseAddressMap: object = { osmosisAddress: "" };

export const AddressMap = {
  encode(message: AddressMap, writer: Writer = Writer.create()): Writer {
    if (message.osmosisAddress !== "") {
      writer.uint32(10).string(message.osmosisAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddressMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddressMap } as AddressMap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.osmosisAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressMap {
    const message = { ...baseAddressMap } as AddressMap;
    if (object.osmosisAddress !== undefined && object.osmosisAddress !== null) {
      message.osmosisAddress = String(object.osmosisAddress);
    } else {
      message.osmosisAddress = "";
    }
    return message;
  },

  toJSON(message: AddressMap): unknown {
    const obj: any = {};
    message.osmosisAddress !== undefined &&
      (obj.osmosisAddress = message.osmosisAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<AddressMap>): AddressMap {
    const message = { ...baseAddressMap } as AddressMap;
    if (object.osmosisAddress !== undefined && object.osmosisAddress !== null) {
      message.osmosisAddress = object.osmosisAddress;
    } else {
      message.osmosisAddress = "";
    }
    return message;
  },
};

const baseMsgRedeem: object = { creator: "", fund: "", channel: "" };

export const MsgRedeem = {
  encode(message: MsgRedeem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fund !== "") {
      writer.uint32(18).string(message.fund);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.channel !== "") {
      writer.uint32(34).string(message.channel);
    }
    if (message.addresses !== undefined) {
      AddressMap.encode(message.addresses, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRedeem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedeem } as MsgRedeem;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fund = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.channel = reader.string();
          break;
        case 5:
          message.addresses = AddressMap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeem {
    const message = { ...baseMsgRedeem } as MsgRedeem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.fund !== undefined && object.fund !== null) {
      message.fund = String(object.fund);
    } else {
      message.fund = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = String(object.channel);
    } else {
      message.channel = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      message.addresses = AddressMap.fromJSON(object.addresses);
    } else {
      message.addresses = undefined;
    }
    return message;
  },

  toJSON(message: MsgRedeem): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fund !== undefined && (obj.fund = message.fund);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.channel !== undefined && (obj.channel = message.channel);
    message.addresses !== undefined &&
      (obj.addresses = message.addresses
        ? AddressMap.toJSON(message.addresses)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedeem>): MsgRedeem {
    const message = { ...baseMsgRedeem } as MsgRedeem;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.fund !== undefined && object.fund !== null) {
      message.fund = object.fund;
    } else {
      message.fund = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    } else {
      message.channel = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      message.addresses = AddressMap.fromPartial(object.addresses);
    } else {
      message.addresses = undefined;
    }
    return message;
  },
};

const baseMsgRedeemResponse: object = {};

export const MsgRedeemResponse = {
  encode(_: MsgRedeemResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRedeemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedeemResponse } as MsgRedeemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRedeemResponse {
    const message = { ...baseMsgRedeemResponse } as MsgRedeemResponse;
    return message;
  },

  toJSON(_: MsgRedeemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRedeemResponse>): MsgRedeemResponse {
    const message = { ...baseMsgRedeemResponse } as MsgRedeemResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateFund(request: MsgCreateFund): Promise<MsgCreateFundResponse>;
  Create(request: MsgCreate): Promise<MsgCreateResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateFund(request: MsgCreateFund): Promise<MsgCreateFundResponse> {
    const data = MsgCreateFund.encode(request).finish();
    const promise = this.rpc.request(
      "defundlabs.defund.etf.Msg",
      "CreateFund",
      data
    );
    return promise.then((data) =>
      MsgCreateFundResponse.decode(new Reader(data))
    );
  }

  Create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request(
      "defundlabs.defund.etf.Msg",
      "Create",
      data
    );
    return promise.then((data) => MsgCreateResponse.decode(new Reader(data)));
  }

  Redeem(request: MsgRedeem): Promise<MsgRedeemResponse> {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request(
      "defundlabs.defund.etf.Msg",
      "Redeem",
      data
    );
    return promise.then((data) => MsgRedeemResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
