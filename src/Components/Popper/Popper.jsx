import * as React from 'react';

import AppointmentDetail from "..//AppointmentDetail/AppointmentDetail"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DoctorSchedule from '../DoctorSchedule/DoctorSchedule';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const {
        role,
        detail,
        setDetail,

        schedule,
        setSchedule,

        checkDecider,
        setCheckDecider,
    } = props;

    const handleClose = () => {
        if (detail) {
            setDetail(false);
        } else {
            setSchedule(false);
        }
    };

    const CheckPopper = () => {
        setCheckDecider(true);
    }

    return (
        <Dialog
            open={detail || schedule}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                {detail && (<AppointmentDetail role={role} />)}
                {schedule && (<DoctorSchedule />)}
            </DialogContent>
            <DialogActions>
                {detail && (<Button onClick={CheckPopper}>CANCEL APPOINTMENT</Button>)}
                {schedule && (<Button onClick={CheckPopper}>Choose</Button>)}
                <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
    );
}