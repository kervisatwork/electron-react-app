import Header from "../components/BodyStructures/Header"
import Main from "../components/BodyStructures/Main"

import "./Home.css"

import { Link } from "react-router";

function HomePage() {
    return (
        <div>
            <header className="header">
                <img src="https://picsum.photos/360" id="img1"/>
                <h2>Conheça o Hypn'o Matic</h2>
            </header>
            <main>
                <div id="textContainer">
                    <p className="textBlock">
                        Seu app para sessões de autohipnose programado por quem entende do assunto!
                    </p>
                    <p className="textBlock">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc enim, lacinia a velit id, placerat dictum velit. Nullam sed volutpat erat. Vivamus in est in urna ultrices tempor eu at risus. Nulla arcu magna, volutpat vel elit non, convallis blandit lacus. In sodales justo id enim semper, eu dictum turpis suscipit. Vestibulum hendrerit mi vel urna tincidunt, id vulputate lectus consectetur. Quisque cursus consectetur bibendum. Mauris laoreet blandit accumsan. Pellentesque vehicula consectetur arcu. Vivamus sit amet nunc libero. Aenean iaculis nulla vitae sapien fringilla mattis. Vestibulum tempor malesuada eleifend. Nunc interdum gravida leo.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas venenatis dignissim ultricies. Nam vitae efficitur neque, non tincidunt purus. Phasellus tincidunt feugiat ipsum, nec scelerisque justo egestas eu. Sed non massa non enim pharetra volutpat. Proin elementum placerat ullamcorper. Sed sed mollis tellus. Integer semper non lectus eu hendrerit.
                    </p>
                </div>
{/* 
                <CardFeebackUsuario imagem="" ratings="4.5" comentario=""/>
                <CardFeebackUsuario imagem="" ratings="4.5" comentario=""/> */}

                <div className="usersFeedbacks">
                    <div className="cardUserFeedback">
                        <div className="cardHeading">
                            <div>
                                <img src="http://i.pravatar.cc/80" alt="" className="userImage"/>
                                <span className="userName">Helly R.</span>
                            </div>
                            <div>
                                <span className="userRatins">
                                    <span class="material-symbols-outlined">star</span>
                                    <span class="material-symbols-outlined">star</span>
                                    <span class="material-symbols-outlined">star</span>
                                    <span class="material-symbols-outlined">star</span>
                                    <span class="material-symbols-outlined">star</span>
                                </span>
                            </div>
                        </div>
                        <div className="cardBody">
                            <p>Minha vida tava uma delicia lá fora, agora tá tudo uma porra</p>
                        </div>
                    </div>
                    <div className="cardUserFeedback">
                        <div className="cardHeading">
                            <div>
                                <img src="http://i.pravatar.cc/80" alt="" className="userImage"/>
                                <span className="userName">Mark S.</span>
                            </div>
                            <div>
                                <span className="userRatins">
                                    <span class="material-symbols-outlined">star</span>
                                    <span class="material-symbols-outlined">star</span>
                                    <span class="material-symbols-outlined">star</span>
                                    <span class="material-symbols-outlined">star</span>
                                    <span class="material-symbols-outlined">star</span>
                                </span>
                            </div>
                        </div>
                        <div className="cardBody">
                            <p>Minha vida tava uma delicia lá fora, agora tá tudo uma porra</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/teste">teste</Link>
                        <button>Fazer login</button>
                        <a>Fazer login</a>
                    </div>
                </div>
            </main>

            <footer>
                <p>Desenvolvido por <a href="">Kervi Jhonata</a> & <a href="">Roberto Leone</a> at <a href="">JoBA Labs&reg;</a></p>
            </footer>
        </div>
    )
}

export default HomePage;