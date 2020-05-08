import { useSelector } from 'react-redux';

export const useScreen = () => {
  const windowSize = useSelector(state => state.windowSize);

  const sizeThreshold = 600;
  const isMobileScreen = windowSize.width < sizeThreshold || windowSize.height < sizeThreshold;
  const isSmallScreen = windowSize.width < sizeThreshold && windowSize.height < sizeThreshold;

  const landscapeAspectRatio = { minimum: 1.2, maximum: 2.8 };
  const aspectRatio = windowSize.height > 0 ? windowSize.width / windowSize.height : 0;
  const isLandscape =
    aspectRatio >= landscapeAspectRatio.minimum && aspectRatio <= landscapeAspectRatio.maximum;

  return { isMobileScreen, isSmallScreen, isLandscape };
};
