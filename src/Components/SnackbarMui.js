import { useSnackbar } from 'notistack';

const SnackbarMui = () => {
    const { enqueueSnackbar } = useSnackbar();
    return { enqueueSnackbar };
}

export default SnackbarMui;