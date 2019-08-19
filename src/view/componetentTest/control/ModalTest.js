import React,{useState} from 'react';
import {Button, Container, Modal} from "../../../component";

function ModalTest(props) {
    const [modalState,setModalState] = useState(false);

    return <Container>
        <Button onClick={open} type='primary'>打开modal</Button>
        {modalState && <Modal confirm={close} cancel={close}/>}
    </Container>;

    function close() {
        setModalState(false)
    }
    function open() {
        setModalState(true)
    }
}

export default ModalTest;