import { useEffect, useState } from 'react';
import { parseEther } from 'viem';
import {
  useAccount,
  useBalance,
  useBlockNumber,
  useConnect,
  useContractRead,
  useDisconnect,
  useEnsName,
  useFeeData,
  useSendTransaction,
  useToken,
} from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

import { wagmigotchiABI } from './data';

export function Profile() {
  const { address, status, connector } = useAccount();
  const [connectStatus, setConnectStatus] = useState<typeof status>();
  const isConnecting = connectStatus === 'connecting';
  const isConnected = connectStatus === 'connected';

  const { data: ensName } = useEnsName({ address });

  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setConnectStatus(status);
  }, [status]);

  if (isConnecting) return <div>Connecting...</div>;

  return isConnected ? (
    <div>
      <div>
        <span className="pr-4">Connected to {connector?.name}</span>
        <button className="btn btn-sm" onClick={() => disconnect()}>
          Disconnect
        </button>
      </div>
      <div>ensName: {ensName}</div>
      <div>address: {address}</div>

      <BalanceCard address={address} />
      <BlockNumberCard />
      <ContractReadCard />
      <FeeDataCard />
      <SendTransactionCard />
      <TokenCard />
    </div>
  ) : (
    <button className="btn btn-sm" onClick={() => connect()}>
      Connect Wallet
    </button>
  );
}

const card = 'border rounded border-slate-400 p-2 w-fit my-3';

function BalanceCard({ address }) {
  const { data, isError, isLoading } = useBalance({ address });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div className={card}>
      Balance: {data?.formatted} {data?.symbol}
    </div>
  );
}

function BlockNumberCard() {
  const { data, isError, isLoading } = useBlockNumber();

  if (isLoading) return <div>Fetching block number…</div>;
  if (isError) return <div>Error fetching block number</div>;
  return <div className={card}>Block number: {data?.toString() || '-'}</div>;
}

function ContractReadCard() {
  const { data, isError, isLoading } = useContractRead({
    address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    abi: wagmigotchiABI,
    functionName: 'getHunger',
  });

  if (isLoading) return <div>Reading contract…</div>;
  if (isError) return <div>Error reading contract</div>;
  return <div className={card}>Result: {data?.toString() || '-'}</div>;
}

function FeeDataCard() {
  const { data, isError, isLoading } = useFeeData();

  if (isLoading) return <div>Fetching fee data…</div>;
  if (isError) return <div>Error fetching fee data</div>;
  return <div className={card}>Fee data: {JSON.stringify(data?.formatted)}</div>;
}

function SendTransactionCard() {
  const { data, isLoading, isSuccess, isError, error, sendTransaction } =
    useSendTransaction({
      to: 'moxey.eth',
      value: parseEther('0.01'),
    });

  return (
    <div className={card}>
      <button className="btn btn-sm" onClick={() => sendTransaction()}>
        Send Transaction
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      {isError && <div>Error: {error?.message}</div>}
    </div>
  );
}

function TokenCard() {
  const { data, isError, isLoading } = useToken({
    address: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
  });

  if (isLoading) return <div>Fetching token…</div>;
  if (isError) return <div>Error fetching token</div>;
  return (
    <div className={card}>
      Token: {data?.name}/{data?.symbol}
    </div>
  );
}
