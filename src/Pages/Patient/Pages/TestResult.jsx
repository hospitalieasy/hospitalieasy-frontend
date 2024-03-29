import { ContentWrapper, Date, DoctorName, Icon, Label, LabelWrapper, Ongoing, ResultItem, ResultItems, TestResultBase, Title, TitleWrapper } from "../Styles/TestResult.style";

import { AuthContext } from "../../../Context/AuthContext";
import { Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CircularProgress from '@mui/material/CircularProgress';
import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"
import Popper from "..//..//..//Components/Popper/Popper"
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const TestResult = () => {
    const { userId } = useContext(AuthContext)

    const [doctors, setDoctors] = useState([])
    const [tests, setTests] = useState([])
    const [filteredTest, setFilteredTest] = useState([])

    const [showResult, setShowResult] = useState({ show: false, index: "" });

    const [appointments, setAppointments] = useState([])
    const [filteredAppointments, setFilteredAppointments] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_DOCTOR_URL)
            .then((response) => setDoctors(response.data))

        axios.get(process.env.REACT_APP_TEST_RESULT_URL)
            .then((response) => setTests(response.data))

        axios.get(process.env.REACT_APP_APPOINTMENT_URL)
            .then((response) => setAppointments(response.data))
    }, [])

    useEffect(() => {
        if (tests.length > 0) {
            const filteredTest = tests.filter(test => test.patientId === userId)
            setFilteredTest(filteredTest)
        }

        if (appointments.length > 0) {
            const filteredAppointments = appointments.filter(appointment => appointment.patientId === userId && appointment.appStatus)
            setFilteredAppointments(filteredAppointments)
        }

    }, [appointments, tests, userId])

    const showResultHandler = (resultIndex) => {
        setShowResult({ show: true, index: resultIndex })
    }

    return (
        <TestResultBase>
            <DefaultBox width="95%" height="85%" background="#fff" margin="20px 12px 0px 0px">
                <ContentWrapper>
                    <TitleWrapper>
                        <Title>Test Results</Title>
                        <Icon>
                            <img style={{ marginBottom: "4px" }} src="https://img.icons8.com/emoji/36/null/test-tube-emoji.png" alt="" />
                        </Icon>
                        <Ongoing>
                            <LabelWrapper>
                                <CheckIcon style={{ marginRight: "8px", marginBottom: "2px" }} color="success" />
                                <Label>{`Resulted Appointments: ${filteredTest.length}`}</Label>
                            </LabelWrapper>
                            <LabelWrapper>
                                <CircularProgress style={{ marginRight: "10px" }} size={"20px"} />
                                <Label>{`Ongoing Appointments: ${filteredAppointments.length}`}</Label>
                            </LabelWrapper>
                        </Ongoing>
                    </TitleWrapper>
                    <ResultItems>
                        {filteredTest.map((test, index) => (
                            <ResultItem key={index}>
                                <Date>{test.date}</Date>
                                <DoctorName>{
                                    "Dr." +
                                    doctors.find(doctor => doctor.id === test.doctorId)?.name
                                    + " " +
                                    doctors.find(doctor => doctor.id === test.doctorId)?.surname
                                }</DoctorName>
                                <Button
                                    className="show-patient-result"
                                    variant="contained"
                                    onClick={() => { showResultHandler(index) }}
                                >
                                    Show Result
                                </Button>
                            </ResultItem>
                        ))}
                    </ResultItems>
                </ContentWrapper>
            </DefaultBox>
            {showResult.show && (
                <Popper filteredTest={filteredTest} showResult={showResult} setShowResult={setShowResult} />
            )}
        </TestResultBase>
    );
}

export default TestResult;