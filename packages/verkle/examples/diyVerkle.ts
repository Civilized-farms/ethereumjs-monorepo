import { MapDB, bytesToHex } from '@ethereumjs/util'
import { VerkleTree } from '@ethereumjs/verkle'
import * as verkle from 'micro-eth-signer/verkle'
const loadVerkleCrypto = () => Promise.resolve(verkle)

const verkleCrypto = await loadVerkleCrypto()

const main = async () => {
  const tree = new VerkleTree({
    cacheSize: 0,
    db: new MapDB<Uint8Array, Uint8Array>(),
    useRootPersistence: false,
    verkleCrypto,
  })
  await tree.createRootNode()
  console.log(bytesToHex(tree.root())) // 0x0000000000000000000000000000000000000000000000000000000000000000
}

void main()