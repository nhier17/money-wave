import Image from "next/image";
import HeaderBox from '@/components/HeaderBox';
import BalanceBox from '@/components/BalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser()
  
  
  return (
<section className="home">
<div className="home-content">
  <header className="home-header">
    <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.name}
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
<RightSidebar
 user={loggedIn} 
 banks={[{}, {}]}
 transactions={[]}
 />
</section>
  );
}


export default Home;