import {FiLogIn, FiMail, FiLock} from "react-icons/fi"
import {Link, useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {Button} from "../../components/Button";
import {Container,Content,Background,Error,FormContainer,InputContainer} from "./styles";
import {useAuth} from '../../hooks/Auth';
import api from "../../services/api";


interface FormData {
    email: string;
    password: string;
}

export function Login(){

    const {signIn} = useAuth();

    const history = useHistory();

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(async data => await signIn({
        email: data.email,
        password: data.password
    }).then(() => history.push('/dashboard'))
);

    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu login:</h2>
                    <form onSubmit={onSubmit}>
                        
                        <InputContainer>
                            <FiMail size={40} />
                            <input 
                                type="email"
                                placeholder="E-mail"
                                {...register("email", {required:true})}
                            />
                        </InputContainer>

                        {errors.email && <Error> O preenchimendo do campo é obrigatório </Error>}

                        <InputContainer>
                            <FiLock size={40} />
                            <input 
                                type="password"
                                placeholder="Senha"
                                {...register("password", {required:true})}
                            />
                        </InputContainer>

                        {errors.password && <Error> O preenchimendo do campo é obrigatório </Error>}

                        <Button type="submit">Entrar</Button>

                    </form>

                    <Link to="/register">
                        <FiLogIn size={40} />
                        Cadastre seu acesso
                    </Link>
                </FormContainer>
            </Content>
            <Background/>
        </Container>
    )
}