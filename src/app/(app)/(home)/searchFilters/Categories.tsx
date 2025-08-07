import { Category } from '@/payload-types.ts';
import { CategoryDropdown } from '@/app/(app)/(home)/searchFilters/CategoryDropdown.tsx';

interface Props {
  payloadData: Category[];
}
export const Categories = ({ payloadData }: Props) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {payloadData.map((category: Category) => (
          <div key={category.id}>
            <CategoryDropdown category={category} isActive={false} isNavigationHovered={false} />
          </div>
        ))}
      </div>
    </div>
  );
};
