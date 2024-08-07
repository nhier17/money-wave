import Image from "next/image";
import HeaderBox from '@/components/HeaderBox';
import BalanceBox from '@/components/BalanceBox';

const Home = () => {
  return (
<section className="home">
<div className="home-content">
  <header className="home-header">
    <HeaderBox
        type="greeting"
        title="Welcome"
        user='Guest'
        subtext="Access and manage your account and transactions efficiently."
    />
    <BalanceBox
     accounts={[]}
     totalBanks={1}
     totalCurrentBalance={1,250}
    />
  </header>
  RecentTransactions
</div>
RightSidebar
</section>
  );
}


export default Home;