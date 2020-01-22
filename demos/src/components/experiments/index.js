import type { ExperimentsMap } from './types';
import DigitsRecognitionMLP from './DigitsRecognitionMLP/DigitsRecognitionMLP';
import DigitsRecognitionCNN from './DigitsRecognitionCNN/DigitsRecognitionCNN';
import ObjectsDetectionSSDLiteMobilenetV2 from './ObjectsDetectionSSDLiteMobilenetV2/ObjectsDetectionSSDLiteMobilenetV2';

const experiments: ExperimentsMap = {
  DigitsRecognitionMLP,
  DigitsRecognitionCNN,
  ObjectsDetectionSSDLiteMobilenetV2,
};

export default experiments;
