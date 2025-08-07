import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { Navbar } from '@/app/(app)/(home)/Navbar.tsx';
import { SearchFilters } from '@/app/(app)/(home)/searchFilters/SearchFilters.tsx';
import WebsiteFooter from '@/app/(app)/(home)/Footer.tsx';
import { Category } from '@/payload-types.ts';

interface Props {
  children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const payloadData = await payload.find({
    collection: 'categories',
    depth: 1, // Populating subcategories here, subcategories.[0] will be a type of Category
    pagination: false,
    where: {
      parent: { exists: false },
    },
  });
  const formattedData = payloadData.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc: Category) => ({
      //Depth 1 gives the doc as Category
      ...doc,
      subcategories: undefined,
    })),
  }));
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters payloadData={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]"> {children}</div>
      <WebsiteFooter />
    </div>
  );
};
export default Layout;
