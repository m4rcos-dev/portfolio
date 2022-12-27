import RocketIcon from '@mui/icons-material/Rocket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { dataIconStacks } from './dataIconsStacks';
import { dataAvatarCardAbout } from './dataPageAbout';

export const dataProjects = (iconColor, iconSize) => {
  return [
    // Front END
    {
      head: {
        title: 'Front End',
        icon: <RocketLaunchIcon sx={{ color: iconColor }} fontSize={iconSize} />,
      },
      body: [
        // PROJETO shopping-cart-trybe
        {
          title: 'Shopping cart',
          technologiesProgress: [
            {
              name: 'JavaScript',
              progress: 50,
              src: dataIconStacks().languagesAndTolls.javaScript,
            },
            {
              name: 'HTML',
              progress: 20,
              src: dataIconStacks().frontEnd.html,
            },
            {
              name: 'CSS',
              progress: 38,
              src: dataIconStacks().frontEnd.css,
            },
            {
              name: 'API',
              progress: 2,
              src: dataIconStacks().backEnd.api,
            },
          ],
          mainImageProject: 'https://user-images.githubusercontent.com/104791582/197052715-bef0000c-9962-49d2-a6ba-1c52d97752f2.gif',
          video: 'https://www.youtube.com/embed/8RgHsmP7Lbo',
          allImagesProject: [
            'https://user-images.githubusercontent.com/104791582/209656479-c9ea5539-805c-439d-8f0c-ac757723a414.png',
            'https://user-images.githubusercontent.com/104791582/209657651-1adef0e6-c0cf-4bcd-b1b8-03f9803fbce0.png',
            'https://user-images.githubusercontent.com/104791582/209657654-caab708d-29d5-4664-a896-2fc52a4fd5b9.png',
          ],
          text: `Simula uma loja online, utilizando API do Mercado Livre. Com busca de produtos e um carrinho que armazena os produtos que são adicionados, somando o total, possibilitando excluir ou adicionar produtos. Projeto feito sem nenhum Framework, apenas com html, javascript e css puros.`,
          linkGitHub: 'https://github.com/m4rcos-dev/project-shopping-cart-trybe.git',
          linkApp: 'https://trybe-shopping-cart.netlify.app/',
        },
        // PROJETO Trybe Wallet
        {
          title: 'Trybe Wallet',
          technologiesProgress: [
            {
              name: 'React',
              progress: 63,
              src: dataIconStacks().frontEnd.react,
            },
            {
              name: 'Material-UI',
              progress: 32,
              src: dataIconStacks().frontEnd.materialUI,
            },
            {
              name: 'API',
              progress: 5,
              src: dataIconStacks().backEnd.api,
            },
            {
              name: 'Responsive Page',
              progress: 100,
              src: dataIconStacks().frontEnd.responsivePage,
            },
          ],
          mainImageProject: 'https://user-images.githubusercontent.com/104791582/199237032-c637911e-2063-41eb-9586-105bae4d88f2.gif',
          video: 'https://www.youtube.com/embed/dX5W9jHAaSM',
          allImagesProject: [
            'https://user-images.githubusercontent.com/104791582/209661079-cc8915e5-909f-4576-a89e-0b177a5b95ea.png',
            'https://user-images.githubusercontent.com/104791582/209661137-e92532ce-216b-4d5c-9bfe-01150017171d.png',
          ],
          text: `Carteira virtual com cotação de moedas em tempo real utilizando API, podendo adicionar despesas, editar e excluir, com cálculo total convertido pela cotação da moeda escolhida. Desenvolvido pensando no mobile first utilizando React e Material-UI.`,
          linkGitHub: 'https://github.com/m4rcos-dev/project-trybewallet.git',
          linkApp: 'https://trybewallett.web.app/',
        },
        // Projeto Solar System
        {
          title: 'Sistema Solar',
          technologiesProgress: [
            {
              name: 'React',
              progress: 90,
              src: dataAvatarCardAbout().icosTechnologies[7].src,
            },
            {
              name: 'CSS',
              progress: 10,
              src: dataAvatarCardAbout().icosTechnologies[3].src,
            },
          ],
          mainImageProject: 'https://imgcloud.com.br/share/NQgnZztE1ksmhgLF',
          video: 'https://www.youtube.com/embed/bKV2T5HiSho',
          allImagesProject: [
            'https://imgcloud.com.br/share/NQgnZztE1ksmhgLF',
            'https://imgcloud.com.br/share/LaxvOqh3vNdmFRLx',
          ],
          text: `Meu primeiro projeto utilizando React, aprendendo a componentizar e reaproveitar o componente na página ganhado assim agilidade e tempo para desenvolver aplicações WEB. O projeto é simples apenas para colocar em prática todo os conceitos citado acima`,
          linkGitHub: 'https://github.com/m4rcos-dev/project-solar-system-trybe.git',
          linkApp: 'https://m4rcos-dev.github.io/project-solar-system-trybe/',
        },
      ]
    },
    // Vanila
    {
      head: {
        title: 'HTML, CSS, JAVASCRIPT',
        icon: <RocketIcon sx={{ color: iconColor }} fontSize={iconSize} />,
      },
      body: [
        // Projeto Pixel Art
        {
          title: 'Pixel Art',
          technologiesProgress: [
            {
              name: 'HTML',
              progress: 26,
              src: dataAvatarCardAbout().icosTechnologies[2].src,
            },
            {
              name: 'JavaScript',
              progress: 48,
              src: dataAvatarCardAbout().icosTechnologies[4].src,
            },
            {
              name: 'CSS',
              progress: 26,
              src: dataAvatarCardAbout().icosTechnologies[3].src,
            },
          ],
          mainImageProject: 'https://imgcloud.com.br/share/RTzhS0Jm2sXsDQDj',
          video: 'https://www.youtube.com/embed/tHYsUl38f54',
          allImagesProject: [
            'https://imgcloud.com.br/share/RTzhS0Jm2sXsDQDj',
            'https://imgcloud.com.br/share/S4zJpYBojnHxbeFO',
            'https://imgcloud.com.br/share/FEmbjThK7Joltmx8',
            'https://imgcloud.com.br/share/1Mo9S0byeF3IQCJk',
          ],
          text: `O projeto renderiza uma tabela de pixels onde é possível redefinir o tamanho e quantidade de pixels, escolher uma cor para pintar e criar sua própria arte pixelada. Projeto feito sem nenhum framework, utiliza htlm, javascript, css e manipulação do DOM puros.`,
          linkGitHub: 'https://github.com/m4rcos-dev/project-pixel-art.git',
          linkApp: 'https://trybe-pixel-art.netlify.app/',
        },
      ]
    },
  ]
}
