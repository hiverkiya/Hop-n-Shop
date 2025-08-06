import { Navbar } from '@/app/(app)/(home)/navbar';
import WebsiteFooter from '@/app/(app)/(home)/footer';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F0]"> {children}</div>
      <WebsiteFooter />
    </div>
  );
};
export default Layout;
