import { NextResponse } from "next/server";

export async function GET() {

    const produtos = [
        {
            endereco: "camisa",
            nome: "Camisa",
            imagem: "/camisa.jpg",
            descricao: "Camisa 100% algodão",
        },
        {
            endereco: "calca",
            nome: "Calça",
            imagem: "/calca.jpg",
            descricao: "Calça muito flexível",
        },
        {
            endereco: "bone",
            nome: "Boné",
            imagem: "/bone.jpg",
            descricao: "Boné muito bonito",
        },
        {
            endereco: "sapato",
            nome: "Sapato",
            imagem: "/sapato.jpg",
            descricao: "Sapato de qualidade",
        },
        {
            endereco: "oculos",
            nome: "Óculos",
            imagem: "/oculos.jpg",
            descricao: "Óculos muito bonito",
        },
    ]

    return NextResponse.json(produtos);
}