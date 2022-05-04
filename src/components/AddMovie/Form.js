import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { addMovieSchema } from '../../Validations/AddMovieValidation';
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
    title: yup.string().max(50, "Máximo de 50 caracteres").required("⚠ Nome do filme é obrigatório"),
    overview: yup.string().max(200, "Máximo de 200 caracteres").required("⚠ Descrição do filme é obrigatório"),
    status: yup.string().required("⚠ Status do filme é obrigatório").nullable(),
    poster: yup.mixed().required()
    // .test("fileSize", "Tamanho máximo da imagem de 10Mb", (value) => {
    //     return value && value[0].size <= 10000
    // })
});

const Form = () => {
    let navigate = useNavigate();
    const { addMovie, setAddMovie, rating, setRating } = useContext(MoviesContext);
    const [file, setFile] = useState(null);
    const [base64URL, setBase64URL] = useState("");
    const [nameImage, setNameImage] = useState("");
    const handleRating = (rate) => {
        setRating(rate);
        return rate;
    }
    const [addMovieInfo, setAddMovieInfo] = useState({
        title: "",
        overview: "",
        rating: "",
    })
    const ratingValue = handleRating(rating);
    // const handleFileChange = (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //         let file = e.target.files[0];
    //         let preview = URL.createObjectURL(e.target.files[0]);
    //         setFile(file)
    //         setImagePreview(preview);
    //         setNameImage(e.target.files[0].name);
    //     }
    // }

    const getBase64 = (file) => {
        return new Promise((resolve) => {
            let fileInfo;
            let baseURL = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
            console.log("FILEINFO", fileInfo);
        });
    };

    const handleFileInputChange = (e) => {
        let file = e.target.files[0];
        let name = e.target.files[0].name;
        getBase64(file)
            .then((result) => {
                file["base64"] = result;
                setBase64URL(result);
            })
            .catch((err) => {
                console.log(err);
            });
        setFile(file);
        setNameImage(name);
    };

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setAddMovieInfo({
            ...addMovieInfo,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (ratingValue > 0 && file != null) {
            const formData = {
                id: Date.now(),
                title: addMovieInfo.title,
                overview: addMovieInfo.overview,
                poster: file,
                rating: ratingValue,
                watched: false,
                highlight: false,
                favorite: false,
            };
            const newMovie = [...addMovie, formData];
            setAddMovie(newMovie);
            event.target.reset(); // reset after form submit
            setFile("");
            setTimeout(() => navigate("/adicionados"), 1000);
        } else {
            alert("Preencha todos os campos");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="sub-container1">
                {console.log("FORM", addMovie)}
                <div className="item1">
                    <label style={{ display: 'flex' }} htmlFor="title">
                        Nome do filme
                        <input required id="title" type="text" name="title" value={addMovieInfo.title} onChange={handleFieldChange} />
                    </label>

                    <label style={{ display: 'flex' }} htmlFor="overview">
                        <div className='descricao'>
                            <span>Descrição</span>
                            <span>0/200</span>
                        </div>
                        <textarea required id="overview" rows="5" cols="40" name="overview" value={addMovieInfo.overview} onChange={handleFieldChange} />
                    </label>

                    <label>Status</label>
                    <div className='status'>
                        <label style={{ display: 'flex' }} htmlFor="assisti">
                            <input id="assisti" name='status' value="assisti" type="radio" checked onChange={handleFieldChange} />
                            Já assisti
                        </label>
                        <label style={{ display: 'flex' }} htmlFor="naoAssisti">
                            <input id="naoAssisti" name='status' value="naoAssisti" type="radio" onChange={handleFieldChange} />
                            Não assisti
                        </label>
                    </div>
                    <div className='rating'>
                        <label htmlFor='rating'>Nota</label>
                        <Rating
                            name="rating"
                            id='rating'
                            onClick={handleRating}
                            ratingValue={rating}
                            showTooltip
                            tooltipArray={['1/5', '2/5', '3/5', '4/5', '5/5']}
                            value={addMovieInfo.rating}
                            onChange={handleFieldChange}
                        >
                        </Rating>
                    </div>
                </div>
            </div>
            <div className="sub-container2">
                <div className="item2">
                    <label>Imagem de capa</label>
                    {file && (
                        <div style={styles.preview}>
                            <img
                                src={base64URL}
                                style={styles.image}
                            />
                            <p>{nameImage}</p>
                        </div>
                    )}
                    <label className='selecionar-imagem' htmlFor='poster'>Selecionar imagem</label>
                    <input
                        required
                        name="poster"
                        type='file'
                        id='poster'
                        accept=".png, .jpg, .jpeg"
                        onChange={handleFileInputChange}
                    />
                </div>
            </div>
            <div className='box-buttons'>
                <RedButton type='submit'>Confirmar</RedButton>
                <CancelButton type='reset'>Cancelar</CancelButton>
            </div>
        </form>
    );
}

export default Form

