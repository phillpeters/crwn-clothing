import CategoryItem from '../CategoryItem/CategoryItem';

import './Directory.scss';

interface Props {
  categories: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
}

const Directory = ({ categories }: Props) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
