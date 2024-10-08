// Mockchain: only used to provide blockhashes for the BLOCKHASH opcode for the VM. Has no other uses.
export class Mockchain {
  _hashes: any

  constructor() {
    this._hashes = {}
  }

  async _init() {}

  getBlock(num: bigint): any {
    const bHash = this._hashes[num.toString()]
    return {
      hash() {
        return bHash
      },
    }
  }

  putBlockHash(num: bigint, hash: Uint8Array): void {
    this._hashes[num.toString()] = hash
  }
}
