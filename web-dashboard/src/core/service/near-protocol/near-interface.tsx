import { utils } from 'near-api-js'

export class RabbitNft {
  contractId: any
  wallet: any

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId
    this.wallet = walletToUse
  }

  async getNftInfo(tokenId: string) {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: 'get_nft_info',
      args: { token_id: tokenId },
    })
  }

  async getUserNfts(ownerId: string) {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: 'get_tokens_metadata_by_owner',
      args: { owner_id: ownerId },
    })
  }

  async mintNft(title, rarity, amount) {
    const deposit = utils.format.parseNearAmount(amount)
    // let deposit = 1
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'nft_mint',
      args: { title: title, rarity: rarity },
      deposit: deposit,
    })
  }

  async extendExpired(token_id, time, amount) {
    // const deposit = utils.format.parseNearAmount(amount);
    const deposit = 1
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'extend_expired',
      args: { token_id: token_id, time: time },
      deposit,
    })
  }
}
