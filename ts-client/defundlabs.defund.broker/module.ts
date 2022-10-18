// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgAddConnectionBroker } from "./types/broker/tx";
import { MsgAddLiquiditySource } from "./types/broker/tx";


export { MsgAddConnectionBroker, MsgAddLiquiditySource };

type sendMsgAddConnectionBrokerParams = {
  value: MsgAddConnectionBroker,
  fee?: StdFee,
  memo?: string
};

type sendMsgAddLiquiditySourceParams = {
  value: MsgAddLiquiditySource,
  fee?: StdFee,
  memo?: string
};


type msgAddConnectionBrokerParams = {
  value: MsgAddConnectionBroker,
};

type msgAddLiquiditySourceParams = {
  value: MsgAddLiquiditySource,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgAddConnectionBroker({ value, fee, memo }: sendMsgAddConnectionBrokerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgAddConnectionBroker: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgAddConnectionBroker({ value: MsgAddConnectionBroker.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgAddConnectionBroker: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgAddLiquiditySource({ value, fee, memo }: sendMsgAddLiquiditySourceParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgAddLiquiditySource: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgAddLiquiditySource({ value: MsgAddLiquiditySource.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgAddLiquiditySource: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgAddConnectionBroker({ value }: msgAddConnectionBrokerParams): EncodeObject {
			try {
				return { typeUrl: "/defundlabs.defund.broker.MsgAddConnectionBroker", value: MsgAddConnectionBroker.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgAddConnectionBroker: Could not create message: ' + e.message)
			}
		},
		
		msgAddLiquiditySource({ value }: msgAddLiquiditySourceParams): EncodeObject {
			try {
				return { typeUrl: "/defundlabs.defund.broker.MsgAddLiquiditySource", value: MsgAddLiquiditySource.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgAddLiquiditySource: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			DefundlabsDefundBroker: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;