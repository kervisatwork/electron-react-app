import { styled, useTheme } from "styled-components"
import { Link } from "react-router";


const Header = styled.header`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
`
const HeaderImage = styled.img`
    width: 100%;
    height: 300px;
`
const HeaderTitle = styled.h2`
    color: ${ props => props.theme.font.color.accent };
    font-size: ${ props => props.theme.font.sized.title};
    font-family: ${ props => props.theme.font.family.primary};
    box-sizing: border-box;
`
const Main = styled.main`
    background-color: ${props => props.theme.background.color.primary};
    padding: ${props => props.theme.spacing.padding.small};
    color: ${props => props.theme.font.color.primary};
    font-family: ${props => props.theme.font.family.primary};
    font-size: ${props => props.theme.font.size.medium};
    text-align: justify;
    box-sizing: border-box;
`

var CardStyle = styled.div`
    background-color: #525353;
    border-radius: 6pt;
    flex: 1 1 50%;
    padding: .6em;
    box-sizing: border-box;
`

var CardText = styled.p`
    color: ${ props => props.theme.font.color.accent}
`

const CardFeebackUsuario = ({text, ratings, imageUrl, userName}) => {

    return (
        <CardStyle>
            <div className="cardHeading">
                <div>
                    <img src={imageUrl} alt="" />
                    <span className="userName">{userName}</span>
                </div>
                <div>
                    <span className="userRatins">
                        {Array.from({ length: ratings }).map((_, index) => (
                            <span class="material-symbols-outlined">star</span>
                        ))}
                    </span>
                </div>
            </div>
            <div className="cardBody">
                <CardText>{text}</CardText>
            </div>
        </CardStyle>
    );
}

const Layout = {
    row: styled.div`
        display: flex;
        flex-flow: row nowrap;
    `,
    col: styled.div`
        flex: 1;
    `
}

function HomePage() {

    let theme = useTheme()

    return (
        <>
            <Header>
                <HeaderImage src="https://picsum.photos/360" />
                <HeaderTitle>Conheça o Hypn'o Matic</HeaderTitle>
            </Header>

            <Main>
                <div id="textContainer">
                    <p className="textBlock" style={{marginBottom: "2em", color: theme.font.color.accent}}>
                        Seu app para sessões de autohipnose programado por quem entende do assunto!
                    </p>
                    <p className="textBlock" style={{marginBottom: "2em"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc enim, lacinia a velit id, placerat dictum velit. Nullam sed volutpat erat. Vivamus in est in urna ultrices tempor eu at risus. Nulla arcu magna, volutpat vel elit non, convallis blandit lacus. In sodales justo id enim semper, eu dictum turpis suscipit. Vestibulum hendrerit mi vel urna tincidunt, id vulputate lectus consectetur. Quisque cursus consectetur bibendum. Mauris laoreet blandit accumsan. Pellentesque vehicula consectetur arcu. Vivamus sit amet nunc libero. Aenean iaculis nulla vitae sapien fringilla mattis. Vestibulum tempor malesuada eleifend. Nunc interdum gravida leo.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas venenatis dignissim ultricies. Nam vitae efficitur neque, non tincidunt purus. Phasellus tincidunt feugiat ipsum, nec scelerisque justo egestas eu. Sed non massa non enim pharetra volutpat. Proin elementum placerat ullamcorper. Sed sed mollis tellus. Integer semper non lectus eu hendrerit.
                    </p>
                </div>

                <div style={{display: "flex", gap: "1em"}}>
                    <CardFeebackUsuario userName="Helly R." ratings={3} imageUrl="http://i.pravatar.cc/80" text="Minha vida era ótima, mas agora tá tudo zuado por causa da Lumon!"></CardFeebackUsuario>
                    <CardFeebackUsuario userName="Mark S." ratings={5} imageUrl="http://i.pravatar.cc/80" text="Eu amo a Helly e adoro trabalhar na Lumon! Tá tudo suave na nave"></CardFeebackUsuario>
                </div>

                <Layout.row>
                    <Layout.col>
                        <Link to="/teste">
                            <button>Fazer login</button>
                        </Link>
                        <Link>
                            criar uma conta
                        </Link>
                    </Layout.col>
                </Layout.row>
            </Main>

            <footer>
                <p>Desenvolvido por <a href="">Kervi Jhonata</a> & <a href="">Roberto Leone</a> at <a href="">JoBA Labs&reg;</a></p>
            </footer>

        </>
    )
}

export default HomePage;