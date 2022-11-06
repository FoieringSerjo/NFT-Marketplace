import { MetaMaskInpageProvider } from '@metamask/providers';
import { providers, Contract } from 'ethers';
import { SWRResponse } from 'swr';

export type Web3Dependencies = {
  provider: providers.Web3Provider;
  contract: Contract;
  ethereum: MetaMaskInpageProvider;
};

export type CryptoHookFactory<Data = any, Params = any> = {
  (dependencies: Partial<Web3Dependencies>): CryptoHandlerHook<Data, Params>;
};

export type CryptoHandlerHook<Data = any, Params = any> = (
  params: Params
) => CryptoSWRResponse<Data>;

export type CryptoSWRResponse<Data = any> = SWRResponse<Data>;

// export type CryptoHookFactory<Data = any, Params = any> = {
//   (dependencies: Partial<Web3Dependencies>): (
//     params: Params
//   ) => SWRResponse<Data>;
// };
