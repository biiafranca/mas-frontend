import Modal from 'react-modal';
import {FiX} from 'react-icons/fi';
import {Container, Error} from './styles';
import {useForm} from 'react-hook-form';
import api from "../../services/api";

interface NewActivityModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivityModalData {
    courseunit: string;
    activiy: string;
    date: Date;
}

export function NewActivityModal({isOpen,onRequestClose}:NewActivityModalProps){

    const {register, handleSubmit, formState: {errors}} = useForm<NewActivityModalData>()

    const onSubmit = handleSubmit(data => api.post('/activity', data).then(response => alert(response.data)));

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            
            <Container>
                <h2>Cadastrar Atividade</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20} />
                </button>

                <form onSubmit={onSubmit}>

                    <input 
                        type="text"
                        placeholder="Unidade Curricular"
                        {...register("courseunit", {required:true})}
                    />

                    {errors.courseunit && <Error> O preenchimendo do campo é obrigatório </Error>} 

                    <input 
                        type="text"
                        placeholder="Atividade"
                        {...register("activiy", {required:true})}
                    />

                    {errors.activiy && <Error> O preenchimendo do campo é obrigatório </Error>}

                    <input 
                        type="date"
                        placeholder="Data da Atividade"
                        {...register("date", {required:true})}
                    />
                    
                    {errors.activiy && <Error> O preenchimendo do campo é obrigatório </Error>}
                    
                    <button type="submit">
                        Cadastrar
                    </button>
                    
                </form>
                
            </Container>

        </Modal>
    )
}