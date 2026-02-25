import { useNavigate } from "react-router-dom";
import { Check, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import {
    CadastroContainer,
    CadastroCard,
    Logo,
    Divider,
    Title,
    StepperContainer,
    StepWrapper,
    StepCircle,
    StepLine
                } from "./Cadastro.styles"
import { StepLabel } from "@mui/material";



const ESTADOS_BR = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const Cadastro = () => {
    const navigate = useNavigate();
    const [passo, setPasso] = useState(1);

    // Página cadastro 1
    const [nome, setNome] = useState("");
    const [sexo, setSexo] = useState("masculino");
    const [dataNascimento, setDataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

    // Página cadastro 2
    const [cep, setCep] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");


    return (
        <CadastroContainer>
            <CadastroCard>
                <Logo src="/logo-faex-hub.png" alt="Logo" />
                <Divider />
                <Title>Novo cadastro</Title>

                <StepperContainer>
                    <StepWrapper>
                    <StepCircle $active={passo === 1} $completed={passo > 1}>
                        {passo > 1 ? <Check /> : "1"}
                    </StepCircle>
                    <StepLabel $active={passo === 1}>Perfil</StepLabel>
                    </StepWrapper>
                    <StepLine />
                    <StepWrapper>
                        <StepCircle $active={passo === 2}>2</StepCircle>
                        <StepLabel $active={passo === 2}>Meu endereço</StepLabel>
                    </StepWrapper>    
                </StepperContainer>
            </CadastroCard>
        </CadastroContainer>
    )
}

export default Cadastro;