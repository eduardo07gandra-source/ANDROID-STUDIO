// ETAPA 1 - INICIO DO PROJETO: TELA INICIAL

// O que fazemos aqui
//Está e a tela inicial do app (rota"/")

import {View, text, ScrollView, FlatList, pressable, StyleSheet} from "react-native";
//view - conteiner básicos
//text - para exibir o texto
//ScrollView - permite rolagem vertical
//Flatlist: lista otimizada com rolagem
//Pressable: botão de feedback de toque
//StyleShett; define estilos

import { useRouter } from "expo-router";
//acesso ao objeto router, tem a função de navegação baseada em arquivos (biblioteca)

import GameCard from "../components/GameCard"
//Reutilizar componentes, isso evita duplicação codigo e mantem a consistência virtual.

import { jogos } from "../data/jogos";
//Importante uma array de objetos do arquivos data/jogos.js

import { cores } from "../data/tema";
//importa a paleta de cores do app do arquivo data/tema.js

//---------------------------------------------------------------------
export default function inicio(){
    // obtemos o objeto de navegação
    const router = useRouter();
    //percorre o array jogos e cria um novo array destaque contendo apenas os objetos cuja o campo 
    //"destaque" seja true
    const destaques = jogos.filter((jogo) => jogo.destaque)
    //percorre o array jogos e cria um novo array destaques contente apenas os objetos cuja o campo "destaque" seja true 
    const populares = [...jogos].sort((a, b) => b.nota - a.nota).slice(0,5);
    //..jogos -> cria uma copia do array original
    // sort((a, b) => b.nota a.nota) ordena a copia da maior nota para a menor
    //.slice(0,5:extrai apenas os 5 primeiros elementos do array)


    //-------------------------------
    //BLOCO 2 - ESTRURTURA DA TELA
    //-------------------------------

    return(
        //inicio do JSX retonando pelo componente: define o que sera renderizado na tela 
        <ScrollView style={style.container} contentContainerStyle={style.conteudo}>
            {/*scrollview:container com rolagem vertical */}
            <text style={style.titulo}>GameHub</text>
            {/*Exibe o texto "GameHub" como titulo, usando o estilo "titulo*/}
            <text style={style.subtitulo}>Seu Universo de jogos em  um só lugar</text>

        //---------------------------
        // BLOCO 2.1 - SEÇÃO JOGOS
        //---------------------------

                <text style={style.secaoTitulo}> Jogos em Destaque</text>
        {/* Exibe o titulo desta seção, usando o estilo "seçãotitulo"*/}
        <FlatList
            data={destaques}
            //define a fonte de dados da lista - array "destaque"
            keyExtractor={(item) => item.id}
            //Função que retorna uma chave unica
            horizontal 
            //faz a lista rolar
            showsVerticalScrollIndicator={false}
            //oculta a barrinha de rolagem horinzontal, deixando a interface mais limpa 
            renderItem={({item}) => <GameCard jogo= {item}/>}
            //Função chamada para cada elemento do array "data"

        />
        //----------------------
        //BLOCO 2.2 -Seção "Mais populares"
        //------------------------

        </ScrollView>
    )




}
