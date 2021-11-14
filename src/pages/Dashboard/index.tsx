import {ActivityTable} from "../../components/ActivityTable";
import {Header} from "../../components/Header";
import {Summary} from "../../components/Summary";
import {Container} from "./styles";
import {NewActivityModal} from "../../components/NewActivityModal"
import {NewCourseUnitModal} from "../../components/NewCourseUnitModal"
import {useState} from "react";


export function Dashboard(){

    const [isNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false)
    const [isNewCourseUnitModalOpen, setIsNewCourseUnitModalOpen] = useState(false)

    function handleOpenActivityModal(){
        setIsNewActivityModalOpen(true);
    }

    function handleOpenCourseUnitModal(){
        setIsNewCourseUnitModalOpen(true);
    }

    function handleCloseActivityModal(){
        setIsNewActivityModalOpen(false);
    }

    function handleCloseCourseUnitModal(){
        setIsNewCourseUnitModalOpen(false);
    }

    return(
        <>
            <Header 
                onOpenNewActivityModal={handleOpenActivityModal}
                onOpenNewCourseUnitModal={handleOpenCourseUnitModal}
            />
            <Container>
                <Summary />
                <ActivityTable />
            </Container>

            <NewActivityModal 
                isOpen={isNewActivityModalOpen}
                onRequestClose={handleCloseActivityModal}
            />
            <NewCourseUnitModal 
                isOpen={isNewCourseUnitModalOpen}
                onRequestClose={handleCloseCourseUnitModal}
            />
        </>
    )
}