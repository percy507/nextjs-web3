// "use client" is used to declare a boundary between a Server and Client Component modules. This means that by defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.
'use client';

import { configureChains, createConfig, mainnet, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { Profile } from './Profile';

// 配置使用的链和相应的 Provider
const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet], // 以太坊主网（Mainnet）
  // 在生产应用中，不建议只将 publicProvider 传递给 configureChains，因为 Public Provider 有速率限制，建议还传递一个 alchemyProvider 或 infuraProvider。
  [publicProvider()],
);

// init wagmi config
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default function Page1() {
  return (
    <div className="px-24 py-5">
      <h3 className="pb-3">
        测试 <code>wagmi & viem</code>
      </h3>
      <WagmiConfig config={config}>
        <Profile />
      </WagmiConfig>
    </div>
  );
}
