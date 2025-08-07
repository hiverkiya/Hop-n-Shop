import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input.tsx';

interface Props {
  disabled?: boolean;
}
export const SearchInput = ({ disabled }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute pr-2 left-3 top-1/2 -translate-y-1/2 size-6 text-neutral-500" />
        <Input className="pl-8" placeholder="Search Products" disabled={disabled} />
      </div>
    </div>
  );
};
