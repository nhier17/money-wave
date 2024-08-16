import Image from "next/image";
import HeaderBox from '@/components/HeaderBox';
import BalanceBox from '@/components/BalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { getAccount, getAccounts } from '@/lib/actions/banks.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  if(!accounts) return

const accountsData = accounts?.data;
const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
const account = await getAccount(appwriteItemId);
  
  return (
<section className="home">
<div className="home-content">
  <header className="home-header">
    <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.lastName}
        subtext="Access and manage your account and transactions efficiently."
    />
    <BalanceBox
     accounts={accountsData}
     totalBanks={accounts?.totalBanks}
     totalCurrentBalance={accounts?.totalCurrentBalance}
    />
  </header>
  RecentTransactions
</div>
<RightSidebar
 user={loggedIn} 
 banks={accountsData?.slice(0,2)}
 transactions={accounts?.transactions}
 />
</section>
  );
}


export default Home;