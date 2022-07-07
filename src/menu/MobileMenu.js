import React from 'react'
import styled from "styled-components";
import { css } from "styled-components";
import "../index.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import whyhereimg from '../whyHere.png';
function MobileMenu() {
    function App() {
        return (
            <Frame41>
                <Frame343 expresso="Mocchiato Aromatisé" number="22" />
                <Frame363>
                    (Caramel Ou Vanille Ou Chocolat Ou Noisette Ou pistaches Amaretto ou Maple ou Cannelle)
                </Frame363>
                <Line2 src="line-2.png" />
            </Frame41>
        );
    }

    function Frame363(props) {
        const { children } = props;

        return (
            <Frame36>
                <CaramelOuVanille>{children}</CaramelOuVanille>
            </Frame36>
        );
    }


    function Frame343(props) {
        const { expresso, number } = props;

        return (
            <Frame34>
                <MocchiatoAromatis>{expresso}</MocchiatoAromatis>
                <Number>{number}</Number>
            </Frame34>
        );
    }

    return (
        <div
        // className='Mobile-header'
        >
            <Conatiner>
                {/* head of the section */}
                <SectionTitle>
                    <Doncof>Doncof</Doncof>
                    <Content
                        menu="Menu"
                        loremIpsumDolorSi="Notre approche est une cuisine de plein air légère élevée pour accompagner le café le plus courant au monde. Le menu propose des plats simples, simples mais savoureux qui sont exactement ce que nous voulons quand nous buvons un bon café. Pour nous, cela signifie des plats qui ne sont pas trop difficiles et qui complètent plutôt que de nuire au café."
                    />
                </SectionTitle>
                {/* the menu categorie */}
                <MenuCategorieConatiner>
                    <Frame32>
                        <CtegorieTitle>Boissons Chaudes</CtegorieTitle>
                    </Frame32>
                    {/* items's name and price */}
                    <NameAndPrice>
                        <Name>Expresso</Name>
                        <Price>14</Price>
                    </NameAndPrice>

                    <NameAndPrice>
                        <Name>Restritto (italiano )</Name>
                        <Price>14</Price>
                    </NameAndPrice>

                    <NameAndPrice>
                        <Name>Café Capsule</Name>
                        <Price>16</Price>
                    </NameAndPrice>

                    <NameAndPrice>
                        <Name>Americano (Café allongé)</Name>
                        <Price>15</Price>
                    </NameAndPrice>

                    <NameAndPrice>
                        <Name>Cappuccino</Name>
                        <Price>23</Price>
                    </NameAndPrice>

                    <NameAndPrice>
                        <Name>Mocaccino</Name>
                        <Price>23</Price>
                    </NameAndPrice>
                    {/* long section componenet */}
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Mocchiato Aromatisé</Name>
                            <Price>22</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Caramel Ou Vanille Ou Chocolat Ou Noisette Ou pistaches Amaretto ou Maple ou Cannelle)
                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>DonOreo</Name>
                        <Price>28</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Café Latté </Name>
                        <Price>16</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Café Latté Séparé</Name>
                        <Price>22</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Choocolat Chaud </Name>
                        <Price>18</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Con Panna ( Espressot+Créme Fraiche )</Name>
                        <Price>18</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Lait Chaud</Name>
                        <Price>12</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Chocolat Fondant</Name>
                        <Price>28</Price>
                    </NameAndPrice>
                    {/* Suplement */}
                    <Suplement>Supplément :</Suplement>
                    <NameAndPrice>
                        <Name>Sirop</Name>
                        <Price>05</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Lait Chaud</Name>
                        <Price>05</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Eau naturel 33cl</Name>
                        <Price>05</Price>
                    </NameAndPrice>
                </MenuCategorieConatiner>
                {/* second section */}
                <MenuCategorieConatiner>
                    <Frame32>
                        <CtegorieTitle>Boissons Froides</CtegorieTitle>
                    </Frame32>
                    <NameAndPrice>
                        <Name>Oreo Shake</Name>
                        <Price>22</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Milkshake</Name>
                        <Price>25</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Iced Café</Name>
                        <Price>14</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Iced Mocha avec chocolate</Name>
                        <Price>23</Price>
                    </NameAndPrice>
                    {/*  */}
                    {/* long section componenet */}
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Iced Macchiato</Name>
                            <Price>23</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Caramel ou Vanille ou Chocolat ou Noisette ou Amaretto ou Maple ou
                            Cannelle)
                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Jus Citron Gingembre miel Clou de girofle</Name>
                        <Price>25</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Jus d’Orange</Name>
                        <Price>15</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Jus Pamplemousse</Name>
                        <Price>15</Price>
                    </NameAndPrice>                <NameAndPrice>
                        <Name>Jus De fruit à base de lait</Name>
                        <Price>20</Price>
                    </NameAndPrice>                <NameAndPrice>
                        <Name>Jus De fruit à base d’orange</Name>
                        <Price>20</Price>
                    </NameAndPrice>                <NameAndPrice>
                        <Name>Smoothie fraise ou Banane ou Ananas ou Mangue</Name>
                        <Price>30</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Eau Minéral 50CL</Name>
                        <Price>10</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Boissons Energétique</Name>
                        <Price>25</Price>
                    </NameAndPrice>                <NameAndPrice>
                        <Name>Oulmés</Name>
                        <Price>15</Price>
                    </NameAndPrice>                <NameAndPrice>
                        <Name>Mojito Virgin</Name>
                        <Price>25</Price>
                    </NameAndPrice>                <NameAndPrice>
                        <Name>Lait Froid</Name>
                        <Price>09</Price>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Lait Froid Parfumé</Name>
                            <Price>14</Price>
                        </WraperForLongSections>
                        <Frame363>
                            Caramel Ou Vanille Ou Chocolat Ou Noisette ou Amaretto ou Maple ou
                            Cannelle
                        </Frame363>
                    </NameAndPrice>
                    <Suplement>Supplément :</Suplement>
                    <NameAndPrice>
                        <Name>Sirop Monin</Name>
                        <Price>05</Price>
                    </NameAndPrice>
                </MenuCategorieConatiner>
                {/* yhird section */}
                <MenuCategorieConatiner>
                    <Frame32>
                        <CtegorieTitle>L’art de Thé</CtegorieTitle>
                    </Frame32>
                    <NameAndPrice>
                        <Name>petite théière</Name>
                        <Price>14</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Moyenne théière</Name>
                        <Price>18</Price>
                    </NameAndPrice>
                    {/*  */}
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Thé Marocain Parfumé petite </Name>
                            <Price>16</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Origan Ou Sauge Ou Safran Oui Anis Ou Cardamine)
                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Thé Marocain Parfumé Moyenne  </Name>
                            <Price>23</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Origan Ou Sauge Ou Safran Oui Anis Ou Cardamine)
                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé citron gingembre Cannelle miel Clou de

                            girofle chaude </Name>
                        <Price>25</Price>
                    </NameAndPrice>                <NameAndPrice>
                        <Name>Thé infusion</Name>
                        <Price>13</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Noir Lipton </Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Verveine </Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Citron </Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Fruit Rouge  </Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Earl grey   </Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé English Breakfast  </Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Vanille </Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé jasmin</Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Camomille</Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Caramel  </Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Hibiscus </Name>
                        <Price>-</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Chai Indien </Name>
                        <Price>17</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Thé Clacé </Name>
                        <Price>14</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Infusion au Lait </Name>
                        <Price>16</Price>
                    </NameAndPrice>
                    <Suplement>Supplément :</Suplement>
                    <NameAndPrice>
                        <Name>Eau Minéral 33CL </Name>
                        <Price>03</Price>
                    </NameAndPrice>
                </MenuCategorieConatiner>
                {/*  */}
                <MenuCategorieConatiner>
                    <Frame32>
                        <CtegorieTitle>Petit Déjeuner</CtegorieTitle>
                    </Frame32>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>petit Déj Doncof</Name>
                            <Price>26</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Boisson chaude+viennoiserie+ Petit jus dorange+Eau naturel 33cl)
                        </Frame363>
                    </NameAndPrice>                <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj Fassi </Name>
                            <Price>42</Price>
                        </WraperForLongSections>
                        <Frame363>(
                            Ckhii+2 Gufs baldis+Boisson chauderPositel jus d’orange+olives+huile d’olive+ pain mix+Eau naturel 33cl)

                        </Frame363>
                    </NameAndPrice>                <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj New Yorker  </Name>
                            <Price>37</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Boisson chaude+Viennoiserie+Petit jus d’orange+olives+huile d’olive +Meil + Confiture+
                            Beurret+Kiri+pain mix + Eau naturel 33cl )
                        </Frame363>
                    </NameAndPrice>                <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj Chamali </Name>
                            <Price>40</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (2 Oeufs baldist+Olivest+J’ban +Frormage rougr+charcuterie+ Boisson chaude +
                            Petit Jus dorange+pain mix+Eau naturel 33cl )

                        </Frame363>
                    </NameAndPrice>                <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj berbère</Name>
                            <Price>40</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Boisson chaude+ Miel+Olivest + huile d’olivet+Amlou+J’ban+Petit Jus d’orange+pain complet+Eau naturel 33cl)

                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj Français</Name>
                            <Price>45</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Boisson chaude+Pomme+Yaourt+Céréale au lait+Viennoiserie +Confiture +Miel +
                            Beurre+2 toast grillé+Eau naturel 33cl)
                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj Américain </Name>
                            <Price>50</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (2 Oeufs avec saucisson ou champignons ou Fromage + Céréale au lait +Boisson
                            chaude +Petit jus d’oranget+Miel+Confiture + Beurre +Pain mix +Eau naturel 33cl)
                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj L’Espagnol</Name>
                            <Price>44</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Boisson chaude+tomate rapée avec l‘ait+fromage rapée ou tranché+olives+huile
                            d’olive + petit jus d'orange+pain grillé +Eau naturel 33cl)

                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj L’Espagnol</Name>
                            <Price>44</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Boisson chaude+tomate rapée avec l‘ait+fromage rapée ou tranché+olives+huile
                            d’olive + petit jus d'orange+pain grillé +Eau naturel 33cl)

                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj Chakchouka</Name>
                            <Price>50</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (2 Oeufs avec crevette tomate+Poivre vert +persilt+onion+l‘ail+ Boisson chaude +
                            Petit jus d’orange+Pain mix +Eau naturel 33cl)


                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj Rayes</Name>
                            <Price>42</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Croissant Beurre + Fromage Rouge + Charcuterie + Boisson Chaud + Petit Jus
                            D’oranget+Eau naturel 33cl)

                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj Dontoast</Name>
                            <Price>42</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Toast oeuf Fromage +Charcuterie + Tomate ta Buisad Chaud + Petit Jus D’orange + Eau Naturel 33cl)

                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Sandwich Hajar</Name>
                            <Price>42</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (2 Oeufs basldis + Olives + j’ban + Fromage + chacuteris + boisson chaude + Petit Jus D’orange + Eau Naturel 33cl)

                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Petit Déj Dontoast</Name>
                            <Price>42</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Toast oeuf Fromage +Charcuterie + Tomate ta Buisad Chaud + Petit Jus D’orange + Eau Naturel 33cl)

                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>2 Oeufs mix</Name>
                            <Price>30</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (2 Oeufs basldis avec saucisson la sauce tomate fromage au plat ou brouillés ou omelette + pain mix + huile d’olive + petit jus d’orange)

                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>2 Oeufs</Name>
                            <Price>25</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (2 Oeufs basldis au plat ou brouillés ou Omelette fromage rouge + chracuterie + j’ban + pain mix + huile d’olive + petit jus d’oramge)
                        </Frame363>
                    </NameAndPrice>

                </MenuCategorieConatiner>
                <MenuCategorieConatiner>
                    <Frame32>
                        <CtegorieTitle>L’art de Thé</CtegorieTitle>
                    </Frame32>
                    <NameAndPrice>
                        <Name>Crevette</Name>
                        <Price>20</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Plat Khlie</Name>
                        <Price>20</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Fromage Sandwich</Name>
                        <Price>3</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Charcuterie</Name>
                        <Price>10</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Fromage Rouge</Name>
                        <Price>10</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Fromage râpée</Name>
                        <Price>10</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Jben Baldy</Name>
                        <Price>05</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Saucisson</Name>
                        <Price>12</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Petit Jus D’orange</Name>
                        <Price>07</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Beurre</Name>
                        <Price>04</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Miel</Name>
                        <Price>04</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Confiture</Name>
                        <Price>03</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Amlou</Name>
                        <Price>12</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Argane</Name>
                        <Price>15</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Huile D’olive</Name>
                        <Price>04</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>kiri</Name>
                        <Price>03</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Lavach kiri</Name>
                        <Price>02</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Tomat râpée avec l’ait</Name>
                        <Price>10</Price>
                    </NameAndPrice>
                </MenuCategorieConatiner>
                {/*  */}
                <MenuCategorieConatiner>
                    <Frame32>
                        <CtegorieTitle>Viennoiseries</CtegorieTitle>
                    </Frame32>
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Salade de Fruit</Name>
                            <Price>25</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (Muesli Ou Cornflakes Ou Chocé pop au lait)
                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Céréale</Name>
                        <Price>20</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Toast Nutella</Name>
                        <Price>10</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Toast Fromage Sandwich</Name>
                        <Price>10</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Toast Fromage Rouge</Name>
                        <Price>15</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Toast Fromage Rouge Tomate</Name>
                        <Price>18</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Toast Fromage Tomate Charcuterie</Name>
                        <Price>25</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Toast Fromage Oeufs Charcuterie Tomate</Name>
                        <Price>27</Price>
                    </NameAndPrice>
                    {/*  */}
                    <NameAndPrice className='divforLongSections'>
                        <WraperForLongSections >
                            <Name>Toast Sandwich Doncof </Name>
                            <Price>30</Price>
                        </WraperForLongSections>
                        <Frame363>
                            (2 Oeufs baldis+J‘ban+Olivest+Fromage +charcuterie+tomate )

                        </Frame363>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Toast Double Frommage Oeuf Charcuterie Tomatte</Name>
                        <Price>37</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Toast Oeuf Steak Dande Fromage Tomate</Name>
                        <Price>33</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Toast Oeuf Viande Hache Fromage Tomate</Name>
                        <Price>38</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Cake</Name>
                        <Price>10</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Cake Brownies</Name>
                        <Price>18</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Gâteau</Name>
                        <Price>20</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Gâteau Amande</Name>
                        <Price>22</Price>
                    </NameAndPrice>
                    {/*  */}
                    <Suplement>Crêpe</Suplement>
                    {/*  */}
                    <NameAndPrice>
                        <Name>Crêpe Nutella</Name>
                        <Price>18</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Mille</Name>
                        <Price>16</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Nutella banane ou frise ou kiwi ou ananas</Name>
                        <Price>25</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Noistte</Name>
                        <Price>20</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Noix Miel</Name>
                        <Price>24</Price>
                    </NameAndPrice>
                    {/*  */}
                    <Suplement>Crêpe Sal</Suplement>
                    {/*  */}
                    <NameAndPrice>
                        <Name>Crêpe Fromage Rouge</Name>
                        <Price>20</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Fromage Rouge Charcuterie</Name>
                        <Price>22</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Fromage Rouge Charcuterie Oeuf</Name>
                        <Price>25</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Fromage Rouge Charcuterie Champignon</Name>
                        <Price>30</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Fromage Rouge Champignon crevette</Name>
                        <Price>45</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Fromage Rouge Champignon poulet</Name>
                        <Price>40</Price>
                    </NameAndPrice>
                    <NameAndPrice>
                        <Name>Crêpe Fromage Rouge Champignon Viande Haché</Name>
                        <Price>45</Price>
                    </NameAndPrice>
                </MenuCategorieConatiner>
            </Conatiner>
        </div>
    )
}

export default MobileMenu

export const RobotoNormalCopper16px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-s);
  font-weight: 400;
  font-style: normal;
`;
export const RobotoMediumCopper24px = css`
  color: var(--the-gray-for-content);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl);
  font-weight: 500;
  font-style: normal;
`;
export const PhoneHeading = css`
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  font-weight: 700;
  font-style: normal;
`;
const Conatiner = styled.div`
display: flex;
flex-direction: column;
`

const Suplement = styled.div`
color: var(--the-gray-for-content);
    font-family: var(--font-family-roboto);
    font-size: var(--font-size-m);
    ${PhoneHeading}
  width: 594px;
  height: 34px;
  font-weight: 700;
  color: var(--the-gray-for-content);
  line-height: 33.6px;
  white-space: nowrap;
  display: flex;
    justify-content: center;
`
const WraperForLongSections = styled.div`
    display: flex;
    /* width: 600px; */
    justify-content: space-between;
`
const NameAndPrice = styled.div`
    display: flex;
    /* width: 776px; */
    justify-content: space-between;
    border-bottom: var(--the-gray-for-content) 4px solid;
    margin-bottom: 10px;

`
const Name = styled.h1`
color: var(--the-gray-for-content);
    font-family: var(--font-family-roboto);
    font-size: var(--font-size-m);
    ${PhoneHeading}
  /* height: 34px; */
  font-weight: 700;
  color: var(--the-gray-for-content);
  line-height: 33.6px;
  /* white-space: nowrap; */
  font-size: 18px;
  width: 340px;
`
const Price = styled.h1`
color: var(--the-gray-for-content);
    font-family: var(--font-family-roboto);
    font-size: var(--font-size-m);
    ${RobotoMediumCopper24px}
  width: 28px;
  height: 34px;
  margin-left: 10px;
  letter-spacing: 0;
  line-height: 33.6px;
  white-space: nowrap;
  font-size: 18px;
`
const MenuCategorieConatiner = styled.div`
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
    flex-direction: column;
    align-items: center;

`
export const RobotoBoldCopper32px = css`
    color: var(--the-gray-for-content);
    font-family: var(--font-family-roboto);
    font-size: var(--font-size-m);
    font-weight: 700;
    font-style: normal;
  `;



export const RobotoBoldBigFootFeet48px = css`
  color: var(--head-sections-color);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xxl);
  font-weight: 700;
  font-style: normal;
`;

export const RobotoNormalBigFootFeet18px = css`
  color: var(--head-sections-color);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;
const SectionTitle = styled.div`
  /* width: 768px; */
  /* height: 304px; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
  
`;

const Doncof = styled.div`
  height: 24px;
  margin-top: 64px;
  font-family: var(--font-family-roboto);
  font-weight: 600;
  color: var(--head-sections-color);
  font-size: var(--font-size-s);
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

function Content(props) {
    const { menu, loremIpsumDolorSi } = props;

    return (
        <Content1>
            <Title>{menu}</Title>
            <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
        </Content1>
    );
}
// height: 304px
const Content1 = styled.div`
  /* width: 768px; */
  /* height: 136px; */
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${RobotoBoldBigFootFeet48px}
  height: 58px;
  text-align: center;
  letter-spacing: 0;
  line-height: 57.6px;
  white-space: nowrap;
`;

const LoremIpsumDolorSi = styled.div`
  ${RobotoNormalBigFootFeet18px}
  /* height: 54px; */
  /* margin-top: 24px; */
  text-align: center;
  letter-spacing: 0;
  line-height: 27px;
`;

// menu categorie name
const Frame32 = styled.div`
    /* width: 696px; */
    height: 55px;
    display: flex;
    margin-bottom: 20px;
  `;

const CtegorieTitle = styled.h1`
    ${RobotoBoldCopper32px}
    margin-top: 10px;
    /* width: 800px; */
    height: 45px;
    margin-left: 10px;
    letter-spacing: 0;
    line-height: 44.8px;
    white-space: nowrap;
    font-size: 28px;
  `;


//   items






// const Frame36 = styled.div`
//   width: 696px;
//   height: 60px;
//   position: relative;
//   display: flex;
//   flex-direction: column;
// `;

// const Line2 = styled.img`
//   margin-left: 31.5px;
//   width: 632px;
//   height: 2px;
//   margin-top: 8.5px;
// `;


// const Frame34 = styled.div`
//   margin-left: 32px;
//   width: 632px;
//   margin-top: 8px;
//   display: flex;
// `;

// const ItemsTitle = styled.h1`
//   ${PhoneHeading}
//   width: 594px;
//   height: 34px;
//   font-weight: 700;
//   color: var(--the-gray-for-content);
//   line-height: 33.6px;
//   white-space: nowrap;
// `;

// const Number = styled.div`
//   ${RobotoMediumCopper24px}
//   width: 28px;
//   height: 34px;
//   margin-left: 10px;
//   letter-spacing: 0;
//   line-height: 33.6px;
//   white-space: nowrap;
// `;


// const frame343Data = {
//     expresso: "Expresso",
//     number: "14",
// };

// const frame362Data = {
//     frame343Props: frame343Data,
// };
// the section that is unusualy long

const Frame41 = styled.div`
  width: 696px;
  height: 114px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Line2 = styled.img`
  margin-left: 31.5px;
  width: 632px;
  height: 2px;
  margin-top: 8.5px;
`;



const Frame34 = styled.div`
  margin-left: 32px;
  width: 632px;
  margin-top: 8px;
  display: flex;
`;

const MocchiatoAromatis = styled.h1`
  ${PhoneHeading}
  width: 594px;
  height: 34px;
  font-weight: 700;
  color: var(--the-gray-for-content);
  line-height: 33.6px;
  white-space: nowrap;
`;

const Number = styled.div`
  ${RobotoMediumCopper24px}
  width: 28px;
  height: 34px;
  margin-left: 10px;
  letter-spacing: 0;
  line-height: 33.6px;
  white-space: nowrap;
`;



const Frame36 = styled.div`
  /* margin-left: 32px; */
  /* width: 632px; */
  width: 332px;
  margin-top: 10px;
  display: flex;
`;

const CaramelOuVanille = styled.p`
  ${RobotoNormalCopper16px}
  /* width: 632px; */
  /* height: 44px; */
  letter-spacing: 0;
  line-height: 22.4px;
  margin-bottom: 8px;
  width: 340px;
`;


