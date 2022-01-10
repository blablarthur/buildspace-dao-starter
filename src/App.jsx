import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  const { connectWallet, address } = useWeb3();
  console.log(`Address: ${address}`);

  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to the HarryPotterDAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect Wallet
        </button>
      </div>
    );
  }
  return (
    <div className="landing">
      <h1>👀 Wallet connected ! Let's go play some Quidditch 🧹</h1>
    </div>
  );
};

export default App;
