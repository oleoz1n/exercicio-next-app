import Card from "@/components/Card/Card";
import React from "react";

export default async function page({ params }) {
    const response = await fetch("http://localhost:3000/dados");
    const produtos = await response.json();

    const produto = await produtos.filter(
        (produto) => produto.endereco === params.item
    )[0];
    console.log(produto);
    return (
        <>
            
        </>
    );
}
