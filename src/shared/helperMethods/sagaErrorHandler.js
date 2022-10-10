import { put } from 'redux-saga/effects';
import { logout } from '../../redux/auth/actions';
import { SNACKBAR_OPEN } from 'store/actions';
import { useNavigate } from 'react-router-dom';

export function* sagaErrorHandler(error) {
  
    if (error.error === 'Your account has been blocked!' || error.error === 'Your account has not verified yet!') {
        yield put(logout());
    } else {
        yield put({
            type: SNACKBAR_OPEN,
            open: true,
            message: error.error,
            variant: 'alert',
            alertSeverity: 'error',
            transition: 'SlideRight',
            anchorOrigin: { vertical: 'top', horizontal: 'right' }
        });
    }
}
