import type { FC, ReactNode } from 'react';
import { useAppSelector } from 'redux/redux-hooks';
import type { Theme, Config } from 'types/global-types';
import { isIframed } from 'utils/helpers';

const sectionStyles = (theme: Theme, config: Config) => ({
  maxHeight: config.containerHeight,
  maxWidth: config.containerWidth,
  height: '100vh',
  width: '100vw',
  border: '1px solid',
  borderColor: theme.border,
  margin: isIframed() ? '15px' : '3px',
  padding: '10px',
  background: theme.background,
  color: theme.text,
  borderRadius: theme.borderRadius,
});

interface Props {
  children: ReactNode
}

const WidgetContainer: FC<Props> = ({ children }) => {
  const theme: Theme = useAppSelector(({ context }) => context.theme);
  const config: Config = useAppSelector(({ context }) => context.config);

  return (
    <section id="widget-container" style={sectionStyles(theme, config)}>
      { children }
    </section>
  );
};

export default WidgetContainer;