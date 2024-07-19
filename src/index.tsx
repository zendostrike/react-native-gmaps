import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-gmaps' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

interface GMapsProps {
  style: ViewStyle;
  markers?: any;
  onMarkerClick?: (args: any) => void;
}

const ComponentName = 'GMapsView';

export const GMapsView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<GMapsProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
