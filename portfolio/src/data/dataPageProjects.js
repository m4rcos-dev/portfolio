import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { dataIconStacks } from "./dataIconsStacks";

export const dataProjects = (iconColor, iconSize) => {
  return [
    // Front END
    {
      head: {
        title: "Mobile / Web - Full Stack",
        icon: (
          <RocketLaunchIcon sx={{ color: iconColor }} fontSize={iconSize} />
        ),
      },
      body: [
        // PROJETO Metrito
        {
          title: "Metrito",
          technologiesProgress: [
            {
              name: "React",
              progress: 50,
              src: dataIconStacks().frontEnd.react,
            },
            {
              name: "NodeJS",
              progress: 38,
              src: dataIconStacks().backEnd.nodeJs,
            },
            {
              name: "MongoDB",
              progress: 20,
              src: dataIconStacks().backEnd.mongoDB,
            },
          ],
          mainImageProject:
            "https://github.com/user-attachments/assets/2d72b976-4899-4824-8bf4-5bfa2da2f5f3",
          video: "https://www.youtube.com/embed/8RgHsmP7Lbo",
          allImagesProject: [
            "https://github.com/user-attachments/assets/7a33b11b-49f4-464f-9496-94e1224f80a2",
            "https://github.com/user-attachments/assets/ebdde106-124c-45e7-bb10-a8bf2919b8f2",
            "https://github.com/user-attachments/assets/3032546a-1874-48b0-b14f-5cec27d0ec4b",
          ],
          text: `A Metrito é uma plataforma de análise de dados que ajuda empresas a rastrear, visualizar e otimizar suas métricas de marketing e vendas (gateways de pagamento, checkouts..) em tempo real. Ela permite que equipes tomem decisões baseadas em dados por meio de painéis personalizáveis.`,
          linkGitHub: "private",
          linkApp:
            "https://metrito.com.br/",
        },
        // PROJETO mei gestor
        {
          title: "Mei Gestor - Mobile app",
          technologiesProgress: [
            {
              name: "React Native",
              progress: 50,
              src: dataIconStacks().frontEnd.react,
            },
            {
              name: "Laravel PHP",
              progress: 38,
              src: dataIconStacks().backEnd.laravel,
            },
            {
              name: "MySql",
              progress: 20,
              src: dataIconStacks().backEnd.mySql,
            },
            {
              name: "Expo",
              progress: 2,
              src: dataIconStacks().languagesAndTolls.expo,
            },
          ],
          mainImageProject:
            "https://github.com/user-attachments/assets/7104a399-60aa-470c-a743-e14187404432",
          video: "https://www.youtube.com/embed/8RgHsmP7Lbo",
          allImagesProject: [
            "https://github.com/user-attachments/assets/bb2f8ad5-d3eb-4b54-8c22-6a81e376d3c0",
            "https://github.com/user-attachments/assets/03cefb2d-a9a0-4c01-a33f-a61b1ab5acd7",
            "https://github.com/user-attachments/assets/9a040ad8-7900-40e9-bedb-c2121ac95f33",
          ],
          text: `Aplicativo dedicado a simplificar o processo para microempreendedores individuais (MEIs), oferecendo serviços especializados desde a abertura gratuita do MEI até soluções avançadas de gerenciamento do CNPJ.`,
          linkGitHub: "private",
          linkApp:
            "https://play.google.com/store/apps/details?id=meigestor.app&hl=en",
        },
        // PROJETO shopping-cart-trybe
        {
          title: "Shopping cart",
          technologiesProgress: [
            {
              name: "JavaScript",
              progress: 50,
              src: dataIconStacks().languagesAndTolls.javaScript,
            },
            {
              name: "HTML",
              progress: 20,
              src: dataIconStacks().frontEnd.html,
            },
            {
              name: "CSS",
              progress: 38,
              src: dataIconStacks().frontEnd.css,
            },
            {
              name: "API",
              progress: 2,
              src: dataIconStacks().backEnd.api,
            },
          ],
          mainImageProject:
            "https://user-images.githubusercontent.com/104791582/197052715-bef0000c-9962-49d2-a6ba-1c52d97752f2.gif",
          video: "https://www.youtube.com/embed/8RgHsmP7Lbo",
          allImagesProject: [
            "https://user-images.githubusercontent.com/104791582/209656479-c9ea5539-805c-439d-8f0c-ac757723a414.png",
            "https://user-images.githubusercontent.com/104791582/209657651-1adef0e6-c0cf-4bcd-b1b8-03f9803fbce0.png",
            "https://user-images.githubusercontent.com/104791582/209657654-caab708d-29d5-4664-a896-2fc52a4fd5b9.png",
          ],
          text: `Simula uma loja online, utilizando API do Mercado Livre. Com busca de produtos e um carrinho que armazena os produtos que são adicionados, somando o total, possibilitando excluir ou adicionar produtos. Projeto feito sem nenhum Framework, apenas com html, javascript e css puros.`,
          linkGitHub:
            "https://github.com/m4rcos-dev/project-shopping-cart-trybe.git",
          linkApp: "https://trybe-shopping-cart.netlify.app/",
        },
        // PROJETO Trybe Wallet
        {
          title: "Trybe Wallet",
          technologiesProgress: [
            {
              name: "React",
              progress: 63,
              src: dataIconStacks().frontEnd.react,
            },
            {
              name: "Material-UI",
              progress: 32,
              src: dataIconStacks().frontEnd.materialUI,
            },
            {
              name: "API",
              progress: 5,
              src: dataIconStacks().backEnd.api,
            },
            {
              name: "Responsive Page",
              progress: 100,
              src: dataIconStacks().frontEnd.responsivePage,
            },
          ],
          mainImageProject:
            "https://user-images.githubusercontent.com/104791582/199237032-c637911e-2063-41eb-9586-105bae4d88f2.gif",
          video: "https://www.youtube.com/embed/dX5W9jHAaSM",
          allImagesProject: [
            "https://user-images.githubusercontent.com/104791582/209661079-cc8915e5-909f-4576-a89e-0b177a5b95ea.png",
            "https://user-images.githubusercontent.com/104791582/209661137-e92532ce-216b-4d5c-9bfe-01150017171d.png",
          ],
          text: `Carteira virtual com cotação de moedas em tempo real utilizando API, podendo adicionar despesas, editar e excluir, com cálculo total convertido pela cotação da moeda escolhida. Desenvolvido pensando no mobile first utilizando React e Material-UI.`,
          linkGitHub: "https://github.com/m4rcos-dev/project-trybewallet.git",
          linkApp: "https://trybewallett.web.app/",
        },
        // Projeto Solar System
        {
          title: "Sistema Solar",
          technologiesProgress: [
            {
              name: "React",
              progress: 90,
              src: dataIconStacks().frontEnd.react,
            },
            {
              name: "CSS",
              progress: 10,
              src: dataIconStacks().frontEnd.css,
            },
          ],
          mainImageProject:
            "https://user-images.githubusercontent.com/104791582/209689985-0e62db6c-2d08-4333-b273-3b1c80f5719b.gif",
          video: "https://www.youtube.com/embed/bKV2T5HiSho",
          allImagesProject: [
            "https://user-images.githubusercontent.com/104791582/209692261-1698009c-7e81-4dfe-bf97-debd8be13357.png",
            "https://user-images.githubusercontent.com/104791582/209692347-e485168f-27ef-4964-8326-1b48a271fd54.png",
          ],
          text: `Meu primeiro projeto utilizando React, aprendendo a componentizar e reaproveitar o componente na página ganhado assim agilidade e tempo para desenvolver aplicações WEB. O projeto é simples apenas para colocar em prática todo os conceitos citado acima`,
          linkGitHub:
            "https://github.com/m4rcos-dev/project-solar-system-trybe.git",
          linkApp: "https://sistemasolar.web.app/",
        },
        // Projeto Pixel Art
        {
          title: "Pixel Art",
          technologiesProgress: [
            {
              name: "HTML",
              progress: 26,
              src: dataIconStacks().frontEnd.html,
            },
            {
              name: "JavaScript",
              progress: 48,
              src: dataIconStacks().languagesAndTolls.javaScript,
            },
            {
              name: "CSS",
              progress: 26,
              src: dataIconStacks().frontEnd.css,
            },
          ],
          mainImageProject:
            "https://user-images.githubusercontent.com/104791582/196544338-a81c3180-1e7c-424e-9381-79bacf2c7b9c.gif",
          video: "https://www.youtube.com/embed/tHYsUl38f54",
          allImagesProject: [
            "https://user-images.githubusercontent.com/104791582/209671869-c5b10b65-7d60-4cb1-a21e-6684e565234f.png",
            "https://user-images.githubusercontent.com/104791582/209671943-7671dfec-3e0e-4259-be9b-9d702ce89e37.png",
            "https://user-images.githubusercontent.com/104791582/209672038-db90f9bd-abad-4fcc-922f-32ba2407ba34.png",
            "https://user-images.githubusercontent.com/104791582/209672100-33813fd9-9b9b-4553-9ccd-16bc4c444f0e.png",
          ],
          text: `O projeto renderiza uma tabela de pixels onde é possível redefinir o tamanho e quantidade de pixels, escolher uma cor para pintar e criar sua própria arte pixelada. Projeto feito sem nenhum framework, utiliza htlm, javascript, css e manipulação do DOM puros.`,
          linkGitHub: "https://github.com/m4rcos-dev/project-pixel-art.git",
          linkApp: "https://trybe-pixel-art.netlify.app/",
        },
      ],
    },
    // Vanila
    // {
    //   head: {
    //     title: "HTML, CSS, JAVASCRIPT",
    //     icon: <RocketIcon sx={{ color: iconColor }} fontSize={iconSize} />,
    //   },
    //   body: [
    //     // Projeto Pixel Art
    //     {
    //       title: "Pixel Art",
    //       technologiesProgress: [
    //         {
    //           name: "HTML",
    //           progress: 26,
    //           src: dataIconStacks().frontEnd.html,
    //         },
    //         {
    //           name: "JavaScript",
    //           progress: 48,
    //           src: dataIconStacks().languagesAndTolls.javaScript,
    //         },
    //         {
    //           name: "CSS",
    //           progress: 26,
    //           src: dataIconStacks().frontEnd.css,
    //         },
    //       ],
    //       mainImageProject:
    //         "https://user-images.githubusercontent.com/104791582/196544338-a81c3180-1e7c-424e-9381-79bacf2c7b9c.gif",
    //       video: "https://www.youtube.com/embed/tHYsUl38f54",
    //       allImagesProject: [
    //         "https://user-images.githubusercontent.com/104791582/209671869-c5b10b65-7d60-4cb1-a21e-6684e565234f.png",
    //         "https://user-images.githubusercontent.com/104791582/209671943-7671dfec-3e0e-4259-be9b-9d702ce89e37.png",
    //         "https://user-images.githubusercontent.com/104791582/209672038-db90f9bd-abad-4fcc-922f-32ba2407ba34.png",
    //         "https://user-images.githubusercontent.com/104791582/209672100-33813fd9-9b9b-4553-9ccd-16bc4c444f0e.png",
    //       ],
    //       text: `O projeto renderiza uma tabela de pixels onde é possível redefinir o tamanho e quantidade de pixels, escolher uma cor para pintar e criar sua própria arte pixelada. Projeto feito sem nenhum framework, utiliza htlm, javascript, css e manipulação do DOM puros.`,
    //       linkGitHub: "https://github.com/m4rcos-dev/project-pixel-art.git",
    //       linkApp: "https://trybe-pixel-art.netlify.app/",
    //     },
    //   ],
    // },
  ];
};
