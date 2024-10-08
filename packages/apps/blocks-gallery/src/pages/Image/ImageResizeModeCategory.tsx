import { Devvit } from '@devvit/public-api';

import { Columns } from '../../components/Columns.js';
import { Tile } from '../../components/Tile.js';

export const ImageResizeModeCategory = (): JSX.Element => {
  const options: [string, Devvit.Blocks.ImageResizeMode][] = [
    ['None', 'none'],
    ['Fit *', 'fit'],
    ['Fill', 'fill'],
    ['Cover', 'cover'],
    ['Scale Down', 'scale-down'],
  ];

  const content = options.map(([label, style]) => (
    <Tile label={label}>
      <hstack backgroundColor="#EAEDEF">
        <image url="Snoo.png" resizeMode={style} imageHeight={128} imageWidth={512} />
      </hstack>
    </Tile>
  ));

  return (
    <vstack>
      <Columns count={1}>{content}</Columns>
    </vstack>
  );
};
