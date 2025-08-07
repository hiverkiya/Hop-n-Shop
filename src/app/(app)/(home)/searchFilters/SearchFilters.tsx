import { Categories } from '@/app/(app)/(home)/searchFilters/Categories.tsx';
import { SearchInput } from '@/app/(app)/(home)/searchFilters/SearchInput.tsx';
import { CustomCategory } from '../types';

interface Props {
  payloadData: CustomCategory[];
}
export const SearchFilters = ({ payloadData }: Props) => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput />
      <Categories payloadData={payloadData} />
    </div>
  );
};
