import {
  FileUpload as FileUploadIcon,
  FileDownload as FileDownloadIcon
} from '@mui/icons-material';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { type Navigation } from '@toolpad/core/AppProvider';
import {ReactRouterAppProvider} from '@toolpad/core/react-router';
import { Outlet } from 'react-router';

const NAVIGATION: Navigation = [
  {
    segment: 'upload',
    title: 'Upload',
    icon: <FileUploadIcon />,
  },
  {
    segment: 'convert',
    title: 'Convert',
    icon: <ChangeCircleIcon />,
  },
  {
    segment: 'download',
    title: 'Download',
    icon: <FileDownloadIcon />
  }
]

const BRANDING = {
  title: 'Word2Markdown',
};

export default function App() {
  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
    >
      <Outlet />
    </ReactRouterAppProvider>
  );
}
