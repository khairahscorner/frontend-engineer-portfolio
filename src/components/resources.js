import HTMLIcon from "../assets/html.svg";
import SassIcon from "../assets/sass.svg";
import TWIcon from "../assets/tailwindcss.svg";
import StyledIcon from "../assets/styled.png";
import ReactIcon from "../assets/react.svg";
import GatsbyIcon from "../assets/gatsby.svg";
import NuxtIcon from "../assets/nuxt.svg";
import VueIcon from "../assets/vue.svg";
import GraphqlIcon from "../assets/graphql.svg";
import SqlIcon from "../assets/sql.svg";
import VscodeIcon from "../assets/vscode.svg";
import GitIcon from "../assets/git.svg";


export const tools = [
    {
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
        logo: HTMLIcon
    },
    {
        url: "https://sass-lang.com/",
        logo: SassIcon
    },
    {
        url: "https://tailwindcss.com/",
        logo: TWIcon
    },
    {
        url: "https://styled-components.com/",
        logo: StyledIcon
    },
    {
        url: "https://reactjs.org/",
        logo: ReactIcon
    },
    {
        url: "https://www.gatsbyjs.com/",
        logo: GatsbyIcon
    },
    {
        url: "https://nuxtjs.org/",
        logo: NuxtIcon
    },
    {
        url: "https://vuejs.org/",
        logo: VueIcon
    },
    {
        url: "https://graphql.org/",
        logo: GraphqlIcon
    },
    {
        url: "https://www.postgresql.org/",
        logo: SqlIcon
    },
    {
        url: "https://code.visualstudio.com/",
        logo: VscodeIcon
    },
    {
        url: "https://git-scm.com/",
        logo: GitIcon
    },
]

export const projects = [
    {
        name: "SNEducate",
        url: "https://sneducate.netlify.app/",
        mark: "sneducate"
    },
    {
        name: "Save-The-Pony Game",
        url: "https://tp-challenge.netlify.app/",
        mark: "trustpilot"
    },
    {
        name: "AutiMS",
        url: "https://autims.netlify.app",
        mark: "autims"
    },
    {
        name: "MCF",
        url: "https://mentalcare.life",
        mark: "mcf"
    },
    {
        name: "Fitila",
        url: "https://fitila.mentalcare.life",
        mark: "fitila"
    },
    {
        name: "Teume project",
        url: "https://treasureproject.netlify.app",
        mark: "treasure"
    },
    {
        name: "Callerview Dashboard",
        url: "https://callerview.netlify.app",
        mark: "callerview"
    },
    {
        name: "Filter Pay",
        url: "https://filter-pay.netlify.app",
        mark: "filter"
    },
    {
        name: "GitHub Repos",
        url: "https://githubgraphql.netlify.app/",
        mark: "graphql"
    },
    {
        name: "MePaint",
        url: "https://mepaint.netlify.app",
        mark: "meyer"
    },
    {
        name: "This Portfolio",
        url: "#",
        mark: "portfolio"
    },
]

export const settings = {
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    infinite: true,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    }]
};