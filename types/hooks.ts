import { MetaMaskInpageProvider } from '@metamask/providers';
import { providers, Contract } from 'ethers';
import { SWRResponse } from 'swr';

export type Web3Dependencies = {
  provider: providers.Web3Provider;
  contract: Contract;
  ethereum: MetaMaskInpageProvider;
};

export type CryptoSWRResponse = SWRResponse;

export type CryptoHandlerHook = (params: any) => CryptoSWRResponse;

export type CryptoHookFactory = {
  (dependencies: Partial<Web3Dependencies>): CryptoHandlerHook;
};