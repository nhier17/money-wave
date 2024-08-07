import Image from "next/image";
import HeaderBox from '@/components/HeaderBox'

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
    TotalBalanceBox
  </header>
  RecentTransactions
</div>
RightSidebar
</section>
  );
}


export default Home;