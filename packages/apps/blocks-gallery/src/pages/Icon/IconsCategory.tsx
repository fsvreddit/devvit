import type { IconName } from '@devvit/public-api';
import { Devvit } from '@devvit/public-api';

import type { SharedCategoryPageProps } from '../../components/CategoryPage.js';
import { CategoryPage } from '../../components/CategoryPage.js';
import { Columns } from '../../components/Columns.js';
import { Tile } from '../../components/Tile.js';

function getIcons(type: string = ''): JSX.Element[] {
  const iconNames = ['bot', 'topic-programming', 'original', 'karma'];
  const iconColors = ['black', 'blue', 'green', 'red'];

  return iconNames.map((name, index) => (
    <Tile label={name}>
      <icon name={`${name}${type ? '-' : ''}${type}` as IconName} color={iconColors[index]} />
    </Tile>
  ));
}

const defaultIcons = getIcons();
const outlineIcons = getIcons('outline');
const fillIcons = getIcons('fill');

const iconCategories = [
  { label: 'Default', category: 'default', content: <Columns count={2}>{defaultIcons}</Columns> },
  { label: 'Outline', category: 'outline', content: <Columns count={2}>{outlineIcons}</Columns> },
  { label: 'Fill', category: 'fill', content: <Columns count={2}>{fillIcons}</Columns> },
];

export const IconsCategory = ({ state }: SharedCategoryPageProps): JSX.Element => {
  return (
    <CategoryPage
      state={state}
      categories={iconCategories}
      activeCategory={state.subcategory}
      onCategoryChanged={state.setSubCategory}
      subCategoryPage
    />
  );
};
