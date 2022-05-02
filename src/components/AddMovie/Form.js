import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { MoviesContext } from '../../context/MoviesContext';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
//css
import '../../assets/styles/Form.css';
import RedButton from '../../Global/styled/ButtonRed';
import styled from 'styled-components';


const CancelButton = styled(RedButton)`
    background-color: #000;
    border: 1px solid #000;
`
const styles = {
    preview: {
        display: "flex",
        flexDirection: "column"
    },
    image: { maxWidth: "260px", maxHeight: "148px" }
};

const schema = yup.object().shape({
    title: yup.string().max(50, "Máximo de 50 caracteres").required("Nome do filme é obrigatório"),
    overview: yup.string().max(200, "Máximo de 200 caracteres").required("Descrição do filme é obrigatório"),
    status: yup.string().required("Status do filme é obrigatório").nullable(),
});

const Form = () => {
    let navigate = useNavigate();
    const { addMovie, setAddMovie, rating, setRating } = useContext(MoviesContext);
    const [selectedImage, setSelectedImage] = useState();
    const [nameImage, setNameImage] = useState();
    const handleRating = (rate) => {
        setRating(rate);
        return rate;
    }
    const ratingValue = handleRating(rating);

    const onImageChange = (e) => {  //preview image
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
            setNameImage(e.target.files[0].name);
        }
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const defaultValues = {
        title: "",
        overview: "",
        poster: "",
        rating: "",
    };
    const onSubmit = (data, event) => {
        const dataMovie = {
            id: Date.now(),
            title: data.title,
            overview: data.overview,
            poster: data.poster[0],
            rating: ratingValue,
            watched: false,
            highlight: false,
            favorite: false,
        };
        const newMovie = [...addMovie, dataMovie];
        setAddMovie(newMovie);
        event.target.reset(); // reset after form submit
        setSelectedImage("");
        setTimeout(() => navigate("/adicionados"), 1000);
        console.log(newMovie);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sub-container1">
                {console.log("FORM", addMovie)}
                <div className="item1">
                    <label style={{ display: 'flex' }} htmlFor="title">
                        Nome do filme
                        <input id="title" type="text" {...register("title")} />
                        <span className='errorMsgName'>{errors.title?.message}</span>
                    </label>

                    <label style={{ display: 'flex' }} htmlFor="overview">
                        <div className='descricao'>
                            <span>Descrição</span>
                            <span>0/200</span>
                        </div>
                        <textarea id="overview" rows="5" cols="40" {...register("overview")} />
                        <span className='errorMsgDescricao'>{errors.overview?.message}</span>
                    </label>

                    <label>Status</label>
                    <div className='status'>
                        <label style={{ display: 'flex' }} htmlFor="assisti">
                            <input id="assisti" name='status' value="assisti" type="radio" {...register("status")} checked />
                            Já assisti
                        </label>
                        <label style={{ display: 'flex' }} htmlFor="naoAssisti">
                            <input id="naoAssisti" name='status' value="naoAssisti" type="radio" {...register("status")} />
                            Não assisti
                        </label>
                    </div>
                    <span>{errors.status?.message}</span>
                    <div className='rating'>
                        <label htmlFor='rating'>Nota</label>
                        <Rating
                            name="rating"
                            id='rating'
                            onClick={handleRating}
                            ratingValue={rating}
                            showTooltip
                            tooltipArray={['1/5', '2/5', '3/5', '4/5', '5/5']}
                        >
                        </Rating>
                    </div>
                </div>
            </div>
            <div className="sub-container2">
                <div className="item2">
                    <label>Imagem de capa</label>
                    {selectedImage && (
                        <div style={styles.preview}>
                            <img
                                src={selectedImage}
                                style={styles.image}
                            />
                            <p>{nameImage}</p>
                        </div>
                    )}
                    <label className='selecionar-imagem' htmlFor='file'>Selecionar imagem</label>
                    <input
                        type='file'
                        id='file'
                        accept=".png, .jpg, .jpeg"
                        {...register("poster", { required: true })}
                        onChange={onImageChange}
                    />
                    {errors.poster && <span className='errorMsgDescricao'>Selecione uma imagem</span>}
                </div>
            </div>
            <div className='box-buttons'>
                <RedButton type='submit'>Confirmar</RedButton>
                <CancelButton onClick={() => reset({ ...defaultValues }, setSelectedImage(), setRating())}>Cancelar</CancelButton>
            </div>
        </form>
    );
}

export default Form

