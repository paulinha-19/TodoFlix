import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//css

import '../../styles/Form.css';

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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="name">
                    Nome do filme
                    <input id="name" type="text" {...register("name")} />
                    <span className='errorMsgName'>{errors.name?.message}</span>
                </label>

                <label for="descricao">
                    Descrição
                    <textarea id="descricao" rows="5" cols="40" {...register("descricao")} />
                    <span className='errorMsgDescricao'>{errors.descricao?.message}</span>
                </label>

                <p>Status</p>
                <span>{errors.status?.message}</span>

                <div className='status'>
                    <span>
                        <label htmlFor="assisti">Já assisti</label>
                        <input id="assisti" name='status' value="assisti" type="radio" {...register("status")} />
                    </span>
                    <span>
                        <label htmlFor="naoAssisti">Não assisti</label>
                        <input id="naoAssisti" name='status' value="naoAssisti" type="radio" {...register("status")} />
                    </span>
                </div>
                <input type="submit" />
                <input type="reset" value="Cancelar"></input>
            </form>
        </div>
    )
}

export default Form