import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//css
import '../../styles/Form.css';
import RedButton from '../../Global/styled/ButtonRed';
import styled from 'styled-components';

//image
import ImgForm from '../../assets/img/img-form.png'

const CancelButton = styled(RedButton)`
    background-color: #000;
    border: 1px solid #000;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
 
`

const schema = yup.object({
    name: yup.string().max(50, "Máximo de 50 caracteres").required("Nome do filme é obrigatório"),
    descricao: yup.string().max(200, "Máximo de 200 caracteres").required("Descrição do filme é obrigatório"),
    status: yup.string().required("Status do filme é obrigatório"),
}).required();

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='aside-content'>
                    <label style={{ display: 'flex' }} for="name">
                        Nome do filme
                        <input id="name" type="text" {...register("name")} />
                        <span className='errorMsgName'>{errors.name?.message}</span>
                    </label>

                    <label style={{ display: 'flex' }} for="descricao">
                        <div className='descricao'>
                            <span>Descrição</span>
                            <span>0/200</span>
                        </div>
                        <textarea id="descricao" rows="5" cols="40" {...register("descricao")} />
                        <span className='errorMsgDescricao'>{errors.descricao?.message}</span>
                    </label>

                    <label>Status</label>
                    <span>{errors.status?.message}</span>

                    <div className='status'>
                        <label style={{ display: 'flex' }} htmlFor="assisti">
                            <input id="assisti" name='status' value="assisti" type="radio" {...register("status")} />
                            Já assisti
                        </label>
                        <label style={{ display: 'flex' }} htmlFor="naoAssisti">
                            <input id="naoAssisti" name='status' value="naoAssisti" type="radio" {...register("status")} />
                            Não assisti
                        </label>
                    </div>
                </div>
                <div className='form-img aside-content'>
                    <img src={ImgForm} alt='Image form'></img>
                </div>
                <div className='box-buttons'>
                    <RedButton type='submit'>Confirmar</RedButton>
                    <CancelButton type="reset">Cancelar</CancelButton>
                </div>
            </form>
    );
}

export default Form