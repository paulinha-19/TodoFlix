import React from 'react';
import * as yup from "yup";

export const addMovieSchema = yup.object().shape({
    title: yup.string().max(50, "Máximo de 50 caracteres").required("⚠ Nome do filme é obrigatório"),
    overview: yup.string().max(200, "Máximo de 200 caracteres").required("⚠ Descrição do filme é obrigatório"),
    status: yup.string().required("⚠ Status do filme é obrigatório").nullable(),
    poster: yup.mixed().required("⚠ Selecione uma imagem")
});