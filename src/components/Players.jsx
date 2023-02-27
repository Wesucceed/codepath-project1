import React from "react";
import Card from "./Card.jsx";

const Players = () => {
    return(
        <div className="Players">
            <Card name = {'Lionel Messi'} alt = "Messi" src = "./src/assets/messi.jpg" about = "https://en.wikipedia.org/wiki/Lionel_Messi"/>
            <Card name = {'Christiano Ronaldo'} alt = "Messi" src = "./src/assets/cr7.jpg" about = "https://en.wikipedia.org/wiki/Cristiano_Ronaldo"/>
            <Card name = {'Edson Pele'} alt = "Messi" src = "./src/assets/pele.jpeg" about = "https://en.wikipedia.org/wiki/Pel%C3%A9"/>
            <Card name = {'Diego Maradona'} alt = "Messi" src = "./src/assets/maradon.jpg" about = "https://en.wikipedia.org/wiki/Diego_Maradona"/>
            <Card name = {'Johan Cruyff'} alt = "Messi" src = "./src/assets/cryuff.jpeg" about = "https://en.wikipedia.org/wiki/Johan_Cruyff"/>
            <Card name = {'Kylian Mbappe'} alt = "Messi" src = "./src/assets/mbappe.jpg" about = "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9"/>
            <Card name = {'Ronaldinho Gaúcho'} alt = "Messi" src = "./src/assets/ronaldinho.jpg" about = "https://en.wikipedia.org/wiki/Ronaldinho"/>
            <Card name = {'Neymar Junior'} alt = "Messi" src = "./src/assets/neymar.jpg" about = "https://en.wikipedia.org/wiki/Neymar"/>
            <Card name = {'Ronaldo Nazário'} alt = "Messi" src = "./src/assets/ronaldo.jpeg" about = "https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)"/>
            <Card name = {'Zinedine Zidane'} alt = "Messi" src = "./src/assets/zidane.jpg" about = "https://en.wikipedia.org/wiki/Zinedine_Zidane"/>
            <Card name = {'Alfredo Di Stéfano'} alt = "Messi" src = "./src/assets/distefano.jpg" about = "https://en.wikipedia.org/wiki/Alfredo_Di_St%C3%A9fano"/>
            <Card name = {'George Best'} alt = "Messi" src = "./src/assets/george-best.jpg" about = "https://en.wikipedia.org/wiki/George_Best"/>
        </div>
    )
}

export default Players;