// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DAOdeployed extends ethereum.Event {
  get params(): DAOdeployed__Params {
    return new DAOdeployed__Params(this);
  }
}

export class DAOdeployed__Params {
  _event: DAOdeployed;

  constructor(event: DAOdeployed) {
    this._event = event;
  }

  get kaliDAO(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get symbol(): string {
    return this._event.parameters[2].value.toString();
  }

  get docs(): string {
    return this._event.parameters[3].value.toString();
  }

  get paused(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get extensions(): Array<Address> {
    return this._event.parameters[5].value.toAddressArray();
  }

  get extensionsData(): Array<Bytes> {
    return this._event.parameters[6].value.toBytesArray();
  }

  get voters(): Array<Address> {
    return this._event.parameters[7].value.toAddressArray();
  }

  get shares(): Array<BigInt> {
    return this._event.parameters[8].value.toBigIntArray();
  }

  get govSettings(): Array<BigInt> {
    return this._event.parameters[9].value.toBigIntArray();
  }
}

export class KaliDAOFactory extends ethereum.SmartContract {
  static bind(address: Address): KaliDAOFactory {
    return new KaliDAOFactory("KaliDAOFactory", address);
  }

  kaliMaster(): Address {
    let result = super.call("kaliMaster", "kaliMaster():(address)", []);

    return result[0].toAddress();
  }

  try_kaliMaster(): ethereum.CallResult<Address> {
    let result = super.tryCall("kaliMaster", "kaliMaster():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  multicall(data: Array<Bytes>): Array<Bytes> {
    let result = super.call("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);

    return result[0].toBytesArray();
  }

  try_multicall(data: Array<Bytes>): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  ricardianLLC(): Address {
    let result = super.call("ricardianLLC", "ricardianLLC():(address)", []);

    return result[0].toAddress();
  }

  try_ricardianLLC(): ethereum.CallResult<Address> {
    let result = super.tryCall("ricardianLLC", "ricardianLLC():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get kaliMaster_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ricardianLLC_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeployKaliDAOCall extends ethereum.Call {
  get inputs(): DeployKaliDAOCall__Inputs {
    return new DeployKaliDAOCall__Inputs(this);
  }

  get outputs(): DeployKaliDAOCall__Outputs {
    return new DeployKaliDAOCall__Outputs(this);
  }
}

export class DeployKaliDAOCall__Inputs {
  _call: DeployKaliDAOCall;

  constructor(call: DeployKaliDAOCall) {
    this._call = call;
  }

  get name_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol_(): string {
    return this._call.inputValues[1].value.toString();
  }

  get docs_(): string {
    return this._call.inputValues[2].value.toString();
  }

  get paused_(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get extensions_(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }

  get extensionsData_(): Array<Bytes> {
    return this._call.inputValues[5].value.toBytesArray();
  }

  get voters_(): Array<Address> {
    return this._call.inputValues[6].value.toAddressArray();
  }

  get shares_(): Array<BigInt> {
    return this._call.inputValues[7].value.toBigIntArray();
  }

  get govSettings_(): Array<BigInt> {
    return this._call.inputValues[8].value.toBigIntArray();
  }
}

export class DeployKaliDAOCall__Outputs {
  _call: DeployKaliDAOCall;

  constructor(call: DeployKaliDAOCall) {
    this._call = call;
  }

  get kaliDAO(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class MulticallCall extends ethereum.Call {
  get inputs(): MulticallCall__Inputs {
    return new MulticallCall__Inputs(this);
  }

  get outputs(): MulticallCall__Outputs {
    return new MulticallCall__Outputs(this);
  }
}

export class MulticallCall__Inputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class MulticallCall__Outputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}
